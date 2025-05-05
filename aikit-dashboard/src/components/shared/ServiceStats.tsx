import React from 'react';
import { Box, Typography, CircularProgress, styled, useTheme } from '@mui/material';
import { Warning, Error } from '@mui/icons-material';
import { ServiceStats as ServiceStatsType } from '../../types/service';

type ResourceStatus = 'normal' | 'warning' | 'critical';

interface ExtendedServiceStats extends ServiceStatsType {
  memoryUsage?: number;
  memoryLimit?: number;
}

const StatusIndicator = styled(Box)<{ status: ResourceStatus }>(({ theme, status }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  color: status === 'warning' ? theme.palette.warning.main :
         status === 'critical' ? theme.palette.error.main :
         theme.palette.success.main
}));

interface ServiceStatsProps {
  stats: ExtendedServiceStats | null | undefined;
  cpuStatus: ResourceStatus;
  memoryStatus: ResourceStatus;
}

export const ServiceStats: React.FC<ServiceStatsProps> = ({ stats, cpuStatus, memoryStatus }) => {
  const theme = useTheme();

  if (!stats) {
    return <CircularProgress size={20} />;
  }

  const getStatusIcon = (status: ResourceStatus) => {
    switch (status) {
      case 'warning':
        return <Warning fontSize="small" />;
      case 'critical':
        return <Error fontSize="small" />;
      default:
        return null;
    }
  };

  const formatMemory = (bytes?: number) => {
    if (!bytes) return 'N/A';
    const gb = bytes / (1024 * 1024 * 1024);
    return `${gb.toFixed(2)} GB`;
  };

  return (
    <Box>
      <Typography variant="body2" component="div">
        CPU: {stats.cpu.toFixed(1)}%
        <StatusIndicator theme={theme} status={cpuStatus}>
          {getStatusIcon(cpuStatus)}
        </StatusIndicator>
      </Typography>
      <Typography variant="body2" component="div">
        Memory: {stats.memory.toFixed(1)}%
        <StatusIndicator theme={theme} status={memoryStatus}>
          {getStatusIcon(memoryStatus)}
        </StatusIndicator>
      </Typography>
      {stats.memoryUsage && stats.memoryLimit && (
        <Typography variant="body2" color="textSecondary">
          {formatMemory(stats.memoryUsage)} / {formatMemory(stats.memoryLimit)}
        </Typography>
      )}
    </Box>
  );
};