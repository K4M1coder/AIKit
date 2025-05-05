import { useState, useCallback, useRef } from 'react';

interface QueueItem<T> {
  id: string;
  request: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
  attempts?: number;
}

interface RequestQueueOptions {
  maxConcurrent?: number;
  retryLimit?: number;
  retryDelay?: number;
}

export function useRequestQueue({
  maxConcurrent = 3,
  retryLimit = 3,
  retryDelay = 1000,
}: RequestQueueOptions = {}) {
  const [activeRequests, setActiveRequests] = useState(0);
  const queueRef = useRef<Array<QueueItem<unknown>>>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const processQueue = useCallback(async () => {
    if (activeRequests >= maxConcurrent || queueRef.current.length === 0) {
      return;
    }

    const item = queueRef.current.shift();
    if (!item) return;

    setActiveRequests((prev) => prev + 1);

    const attemptRequest = async (attempt: number = 0): Promise<unknown> => {
      try {
        const result = await item.request();
        item.resolve(result);
        return result;
      } catch (error) {
        if (attempt < retryLimit) {
          // Exponential backoff with jitter
          const baseDelay = retryDelay * Math.pow(2, attempt);
          const jitter = Math.random() * 100;
          await new Promise(resolve => 
            setTimeout(resolve, baseDelay + jitter)
          );
          return attemptRequest(attempt + 1);
        }
        const finalError = error instanceof Error ? error : new Error('Request failed');
        item.reject(finalError);
        throw finalError;
      } finally {
        setActiveRequests((prev) => prev - 1);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(processQueue, 0);
      }
    };

    attemptRequest();
  }, [maxConcurrent, retryLimit, retryDelay, activeRequests]);

  const enqueue = useCallback(<T>(
    request: () => Promise<T>,
    id: string
  ): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      const queueItem: QueueItem<T> = {
        id,
        request,
        resolve,
        reject,
        attempts: 0,
      };

      const existingIndex = queueRef.current.findIndex(item => item.id === id);
      if (existingIndex !== -1) {
        queueRef.current[existingIndex] = queueItem as QueueItem<unknown>;
      } else {
        queueRef.current.push(queueItem as QueueItem<unknown>);
      }

      processQueue();
    });
  }, [processQueue]);

  const clearQueue = useCallback(() => {
    queueRef.current.forEach(item => {
      item.reject(new Error('Queue cleared'));
    });
    queueRef.current = [];
    setActiveRequests(0);
  }, []);

  return {
    enqueue,
    clearQueue,
    activeRequests,
    queueLength: queueRef.current.length,
  };
}