import { useState, useCallback } from 'react';
import { useAutoRefresh } from './useAutoRefresh';
import { useRequestQueue } from './useRequestQueue';

interface ApiOptions {
  autoRefresh?: boolean;
  interval?: number;
  minInterval?: number;
  maxInterval?: number;
  queueId?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

const API_BASE_URL = '/api';

// Create a shared request queue instance for all API calls
const globalRequestQueue = {
  useQueue: () => useRequestQueue({
    maxConcurrent: 5,
    retryLimit: 3,
    retryDelay: 1000,
  }),
};

export function useApi<T extends ApiResponse>(
  endpoint: string,
  options: ApiOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { enqueue } = globalRequestQueue.useQueue();
  const queueId = options.queueId || endpoint;

  const fetchData = useCallback(async () => {
    try {
      const result = await enqueue(async () => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      }, queueId);

      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, enqueue, queueId]);

  const {
    isRefreshing,
    currentInterval
  } = useAutoRefresh({
    onRefresh: fetchData,
    interval: options.interval,
    minInterval: options.minInterval,
    maxInterval: options.maxInterval,
    isError: !!error,
  });

  const refetch = useCallback(async () => {
    setIsLoading(true);
    await fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isLoading: isLoading || isRefreshing,
    refetch,
    currentInterval,
  };
}

interface MutationData {
  [key: string]: unknown;
}

export function useApiMutation<T extends ApiResponse>(endpoint: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { enqueue } = globalRequestQueue.useQueue();

  const mutate = useCallback(async (data?: MutationData) => {
    setIsLoading(true);
    try {
      const result = await enqueue(async () => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data ? JSON.stringify(data) : undefined,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      }, `mutation-${endpoint}`);

      setError(null);
      return result as T;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, enqueue]);

  return {
    mutate,
    isLoading,
    error,
  };
}