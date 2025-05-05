import { useState, useEffect, useCallback } from 'react';
import { useNotification } from '../contexts/NotificationContext';

export type ResourceStatus = 'normal' | 'warning' | 'critical';
export type ResourceType = 'cpu' | 'memory';

export interface ResourceAlert {
  type: ResourceType;
  level: ResourceStatus;
  message: string;
  timestamp: number;
}

interface ResourceStats {
  cpu: number;
  memory: number;
  memoryUsage?: number;
  memoryLimit?: number;
}

const THRESHOLDS = {
  cpu: {
    warning: 70,
    critical: 90,
  },
  memory: {
    warning: 80,
    critical: 95,
  },
};

export const useResourceMonitor = (serviceName: string, stats: ResourceStats | null) => {
  const [cpuStatus, setCpuStatus] = useState<ResourceStatus>('normal');
  const [memoryStatus, setMemoryStatus] = useState<ResourceStatus>('normal');
  const [alerts, setAlerts] = useState<ResourceAlert[]>([]);
  const { showNotification } = useNotification();

  const checkThreshold = useCallback((value: number, type: ResourceType): ResourceStatus => {
    if (value >= THRESHOLDS[type].critical) return 'critical';
    if (value >= THRESHOLDS[type].warning) return 'warning';
    return 'normal';
  }, []);

  const addAlert = useCallback((alert: ResourceAlert) => {
    setAlerts(prev => {
      // Remove older alerts of the same type to prevent alert spam
      const filtered = prev.filter(a => 
        !(a.type === alert.type && Date.now() - a.timestamp < 300000) // 5 minutes
      );
      return [...filtered, alert];
    });

    // Show notification for critical alerts
    if (alert.level === 'critical') {
      showNotification(alert.message, 'error');
    } else if (alert.level === 'warning') {
      showNotification(alert.message, 'warning');
    }
  }, [showNotification]);

  useEffect(() => {
    if (!stats) return;

    const newCpuStatus = checkThreshold(stats.cpu, 'cpu');
    const newMemoryStatus = checkThreshold(stats.memory, 'memory');

    if (newCpuStatus !== cpuStatus) {
      setCpuStatus(newCpuStatus);
      if (newCpuStatus !== 'normal') {
        addAlert({
          type: 'cpu',
          level: newCpuStatus,
          message: `${serviceName}: CPU usage at ${stats.cpu.toFixed(1)}% (${newCpuStatus})`,
          timestamp: Date.now(),
        });
      }
    }

    if (newMemoryStatus !== memoryStatus) {
      setMemoryStatus(newMemoryStatus);
      if (newMemoryStatus !== 'normal') {
        addAlert({
          type: 'memory',
          level: newMemoryStatus,
          message: `${serviceName}: Memory usage at ${stats.memory.toFixed(1)}% (${newMemoryStatus})`,
          timestamp: Date.now(),
        });
      }
    }
  }, [stats, serviceName, cpuStatus, memoryStatus, checkThreshold, addAlert]);

  return {
    cpuStatus,
    memoryStatus,
    alerts,
  };
};