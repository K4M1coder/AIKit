import { useState, useCallback } from 'react';
import { useApiMutation } from './useApi';
import { Service } from '../types/service';

interface ServiceActionResponse {
  success: boolean;
  message?: string;
}

export const useServiceManagement = (service: Service) => {
  const [isActionPending, setIsActionPending] = useState(false);
  
  // Create mutations for each service action
  const startMutation = useApiMutation(`/services/${service.containerId}/start`);
  const stopMutation = useApiMutation(`/services/${service.containerId}/stop`);
  const restartMutation = useApiMutation(`/services/${service.containerId}/restart`);
  const updateMutation = useApiMutation(`/services/${service.containerId}/update`);

  const handleServiceAction = useCallback(async (action: () => Promise<ServiceActionResponse>) => {
    setIsActionPending(true);
    try {
      await action();
    } finally {
      setIsActionPending(false);
    }
  }, []);

  const startService = useCallback(() => 
    handleServiceAction(() => startMutation.mutate()), 
    [handleServiceAction, startMutation]
  );

  const stopService = useCallback(() => 
    handleServiceAction(() => stopMutation.mutate()), 
    [handleServiceAction, stopMutation]
  );

  const restartService = useCallback(() => 
    handleServiceAction(() => restartMutation.mutate()), 
    [handleServiceAction, restartMutation]
  );

  const updateService = useCallback(() => 
    handleServiceAction(() => updateMutation.mutate()), 
    [handleServiceAction, updateMutation]
  );

  return {
    isActionPending: isActionPending || 
      startMutation.isLoading || 
      stopMutation.isLoading || 
      restartMutation.isLoading || 
      updateMutation.isLoading,
    startService,
    stopService,
    restartService,
    updateService,
    error: startMutation.error || stopMutation.error || restartMutation.error || updateMutation.error,
  };
};