import { useEffect, useCallback, useState } from 'react';

interface AutoRefreshOptions {
  onRefresh: () => Promise<void>;
  interval?: number;
  minInterval?: number;
  maxInterval?: number;
  isError?: boolean;
}

export function useAutoRefresh({
  onRefresh,
  interval = 5000,
  minInterval = 2000,
  maxInterval = 30000,
  isError = false,
}: AutoRefreshOptions) {
  const [currentInterval, setCurrentInterval] = useState(interval);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    if (isRefreshing) return;
    
    try {
      setIsRefreshing(true);
      await onRefresh();
      
      // If successful, gradually increase the interval
      setCurrentInterval(prev => Math.min(prev * 1.5, maxInterval));
    } catch (error) {
      // If error occurs, decrease the interval
      setCurrentInterval(prev => Math.max(prev / 2, minInterval));
      console.error('Auto-refresh error:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, [onRefresh, isRefreshing, maxInterval, minInterval]);

  useEffect(() => {
    // Reset interval on error
    if (isError) {
      setCurrentInterval(minInterval);
    }
  }, [isError, minInterval]);

  useEffect(() => {
    const timer = setInterval(refresh, currentInterval);
    return () => clearInterval(timer);
  }, [refresh, currentInterval]);

  return {
    isRefreshing,
    currentInterval,
    refresh,
  };
}