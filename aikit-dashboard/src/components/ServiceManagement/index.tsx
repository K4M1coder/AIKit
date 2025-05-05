import React, { useEffect, useState } from 'react';
import { 
  Paper,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Box,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useServiceManagement } from '../../hooks/useServiceManagement';
import { useResourceMonitor } from '../../hooks/useResourceMonitor';
import { useNotification } from '../../contexts/NotificationContext';
import { ServiceControls } from '../ServiceControls';
import { ServiceStats } from '../shared/ServiceStats';
import { Service, ServiceStatus as ServiceStatusType, ServiceHealth } from '../../types/service';
import { useApi } from '../../hooks/useApi';

const ManagementPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  '&.running': {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  '&.stopped': {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
  '&.warning': {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
}));

interface ServiceStatusInfo {
  status: ServiceStatusType;
  health: ServiceHealth;
  version?: string;
}

interface ServiceStatsInfo {
  cpu: number;
  memory: number;
  memoryUsage?: number;
  memoryLimit?: number;
  uptime: number;
  restartCount: number;
  lastRestart?: Date;
}

interface ServiceApiResponse {
  success: boolean;
  data: {
    status: ServiceStatusInfo;
    stats: ServiceStatsInfo;
  };
}

interface ServiceManagementProps {
  serviceId: string;
  containerId: string;
  serviceName: string;
}

export const ServiceManagement: React.FC<ServiceManagementProps> = ({
  serviceId,
  containerId,
  serviceName
}) => {
  const { showNotification } = useNotification();
  const { data: apiData, error: apiError } = useApi<ServiceApiResponse>(`/api/services/${containerId}`);
  const [status, setStatus] = useState<ServiceStatusInfo | null>(null);
  const [stats, setStats] = useState<ServiceStatsInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create a Service object for hooks
  const service: Service = {
    id: serviceId,
    name: serviceName,
    containerId,
    status: (status?.status || 'stopped') as ServiceStatusType,
    health: status?.health || 'none',
    version: status?.version,
    description: '',
    icon: '',
    url: '',
    port: 0,
  };

  const serviceManagement = useServiceManagement(service);

  // Monitor resource usage and show alerts
  const { cpuStatus, memoryStatus, alerts } = useResourceMonitor(serviceName, stats);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (apiError) {
          throw apiError;
        }
        if (apiData?.data) {
          setStatus(apiData.data.status);
          setStats(apiData.data.stats);
        }
      } catch (error) {
        showNotification(
          `Failed to fetch service data: ${error instanceof Error ? error.message : 'Unknown error'}`,
          'error'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiData, apiError, showNotification]);

  if (isLoading || !status) {
    return (
      <ManagementPaper>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Box>
      </ManagementPaper>
    );
  }

  const getStatusColor = (status: ServiceStatusType, health: ServiceHealth): string => {
    if (status === 'running' && health === 'healthy') return 'running';
    if (status === 'stopped') return 'stopped';
    return 'warning';
  };

  return (
    <ManagementPaper>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">Status</Typography>
          <StatusChip
            label={`${status.status}${status.health !== 'none' ? ` (${status.health})` : ''}`}
            className={getStatusColor(status.status, status.health)}
          />
        </Stack>

        <ServiceControls service={service} />

        {status.status === 'running' && (
          <>
            <Divider />
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Resource Usage
              </Typography>
              <ServiceStats 
                stats={stats} 
                cpuStatus={cpuStatus}
                memoryStatus={memoryStatus}
              />
            </Box>
          </>
        )}

        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Version
          </Typography>
          <Typography variant="body2">
            {status.version || 'Not available'}
          </Typography>
        </Box>

        {alerts.length > 0 && (
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Alerts
            </Typography>
            {alerts.map((alert, index) => (
              <Typography 
                key={index} 
                variant="body2" 
                color={alert.level === 'critical' ? 'error' : 'warning'}
              >
                {alert.message}
              </Typography>
            ))}
          </Box>
        )}

        {serviceManagement.isActionPending && (
          <Box display="flex" justifyContent="center">
            <CircularProgress size={24} />
          </Box>
        )}
      </Stack>
    </ManagementPaper>
  );
};