import { useState, useCallback, useEffect } from 'react';
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

// Updated to use absolute URL in development with NO /api prefix
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001' 
  : '';

// Create a shared request queue instance for all API calls
const globalRequestQueue = {
  useQueue: () => useRequestQueue({
    maxConcurrent: 5,
    retryLimit: 3,
    retryDelay: 1000,
  }),
};

// Normalize endpoint to prevent duplicate /api prefixes
const normalizeEndpoint = (endpoint: string) => {
  // If endpoint starts with /api, remove it to avoid duplication with API_BASE_URL
  if (endpoint.startsWith('/api/')) {
    return endpoint.substring(4); // Remove the '/api' prefix
  }
  // If endpoint starts with /, just return the rest to avoid // in URL
  if (endpoint.startsWith('/')) {
    return endpoint;
  }
  // Otherwise, ensure endpoint starts with /
  return `/${endpoint}`;
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
  
  // Normalize the endpoint to prevent path duplication issues
  const normalizedEndpoint = normalizeEndpoint(endpoint);

  const fetchData = useCallback(async () => {
    try {
      const result = await enqueue(async () => {
        const url = `${API_BASE_URL}${normalizedEndpoint}`;
        console.log('Fetching API:', url); // Debug logging
        const response = await fetch(url);
        
        if (!response.ok) {
          // Enhanced error handling to see what's coming back
          const text = await response.text();
          console.error('API Error Response:', text.substring(0, 500)); // Log first 500 chars in case it's HTML
          throw new Error(`HTTP error! status: ${response.status}, body: ${text.substring(0, 100)}...`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response:', text.substring(0, 500));
          throw new Error(`Expected JSON but got ${contentType}. Response starts with: ${text.substring(0, 100)}...`);
        }
        
        return response.json();
      }, queueId);

      setData(result);
      setError(null);
    } catch (err) {
      console.error('API fetch error:', err);
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, enqueue, queueId, normalizedEndpoint]);

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

  useEffect(() => {
    fetchData();
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
  
  // Normalize the endpoint to prevent path duplication issues
  const normalizedEndpoint = normalizeEndpoint(endpoint);

  const mutate = useCallback(async (data?: MutationData) => {
    setIsLoading(true);
    try {
      const result = await enqueue(async () => {
        const url = `${API_BASE_URL}${normalizedEndpoint}`;
        console.log('Mutation API:', url); // Debug logging
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data ? JSON.stringify(data) : undefined,
        });

        if (!response.ok) {
          // Enhanced error handling to see what's coming back
          const text = await response.text();
          console.error('API Mutation Error Response:', text.substring(0, 500));
          throw new Error(`HTTP error! status: ${response.status}, body: ${text.substring(0, 100)}...`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON mutation response:', text.substring(0, 500));
          throw new Error(`Expected JSON but got ${contentType}. Response starts with: ${text.substring(0, 100)}...`);
        }

        return response.json();
      }, `mutation-${endpoint}`);

      setError(null);
      return result as T;
    } catch (err) {
      console.error('API mutation error:', err);
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, enqueue, normalizedEndpoint]);

  return {
    mutate,
    isLoading,
    error,
  };
}