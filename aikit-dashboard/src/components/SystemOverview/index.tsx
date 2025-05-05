import React, { useMemo } from 'react';
import {
  Paper,
  Grid,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Stack,
  useTheme
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import { Service, ServiceStats } from '../../types/service';

interface ExtendedService extends Service {
  stats?: ServiceStats;
}

interface SystemOverviewProps {
  services: ExtendedService[];
}

type OverallHealth = 'healthy' | 'warning' | 'critical';

export const SystemOverview: React.FC<SystemOverviewProps> = ({ services }) => {
  const theme = useTheme();

  const stats = useMemo(() => {
    if (!services?.length) return null;

    const running = services.filter(s => s.status === 'running').length;
    const total = services.length;
    const stopped = total - running;
    
    // Count different health states
    const healthyCount = services.filter(s => s.health === 'healthy').length;
    const unhealthyCount = services.filter(s => s.health === 'unhealthy').length;

    // Calculate average resource usage across running services with stats
    const runningServices = services.filter(s => s.status === 'running' && s.stats);
    const avgCpu = runningServices.length 
      ? runningServices.reduce((acc, s) => acc + (s.stats?.cpu || 0), 0) / runningServices.length 
      : 0;
    const avgMemory = runningServices.length
      ? runningServices.reduce((acc, s) => acc + (s.stats?.memory || 0), 0) / runningServices.length
      : 0;

    // Determine overall health status
    let overallHealth: OverallHealth;
    if (healthyCount === total) {
      overallHealth = 'healthy';
    } else if (unhealthyCount > 0) {
      overallHealth = 'critical';
    } else {
      overallHealth = 'warning';
    }

    return {
      running,
      stopped,
      total,
      healthyCount,
      unhealthyCount,
      avgCpu,
      avgMemory,
      overallHealth
    };
  }, [services]);

  if (!stats) return null;

  const getHealthColor = (health: OverallHealth) => {
    switch (health) {
      case 'healthy':
        return theme.palette.success.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'critical':
        return theme.palette.error.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getHealthIcon = (health: OverallHealth) => {
    switch (health) {
      case 'healthy':
        return <CheckCircleIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'critical':
        return <ErrorIcon />;
      default:
        return null;
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="h6">System Health</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              {getHealthIcon(stats.overallHealth)}
              <Typography 
                variant="body1" 
                color={getHealthColor(stats.overallHealth)}
                sx={{ textTransform: 'capitalize' }}
              >
                {stats.overallHealth}
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                <Chip 
                  label={`${stats.running} Running`}
                  color="success"
                  size="small"
                />
                {stats.stopped > 0 && (
                  <Chip 
                    label={`${stats.stopped} Stopped`}
                    color="error"
                    size="small"
                  />
                )}
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <Typography variant="h6">Resource Usage</Typography>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Average CPU Usage
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.avgCpu}
                  sx={{ 
                    flexGrow: 1,
                    height: 8,
                    borderRadius: 4
                  }}
                  color={stats.avgCpu > 80 ? 'error' : stats.avgCpu > 60 ? 'warning' : 'primary'}
                />
                <Typography variant="body2" sx={{ minWidth: 45 }}>
                  {stats.avgCpu.toFixed(1)}%
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Average Memory Usage
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.avgMemory}
                  sx={{ 
                    flexGrow: 1,
                    height: 8,
                    borderRadius: 4
                  }}
                  color={stats.avgMemory > 80 ? 'error' : stats.avgMemory > 60 ? 'warning' : 'primary'}
                />
                <Typography variant="body2" sx={{ minWidth: 45 }}>
                  {stats.avgMemory.toFixed(1)}%
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};