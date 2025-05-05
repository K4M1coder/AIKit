import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Collapse,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import { ServiceControls } from '../ServiceControls';
import { ServiceDetails } from '../ServiceDetails';
import { StatusIndicator } from '../shared/StatusIndicator';
import { ServiceStats } from '../shared/ServiceStats';
import { useResourceMonitor } from '../../hooks/useResourceMonitor';
import { Service, ServiceStats as ServiceStatsType } from '../../types/service';

interface ServiceWithStats extends Service {
  stats?: ServiceStatsType & {
    memoryUsage?: number;
    memoryLimit?: number;
  };
}

interface ServiceCardProps {
  service: ServiceWithStats;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const {
    cpuStatus,
    memoryStatus,
    alerts
  } = useResourceMonitor(service.name, service.stats || null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getStatusColor = (status: 'normal' | 'warning' | 'critical') => {
    switch (status) {
      case 'warning':
        return theme.palette.warning.main;
      case 'critical':
        return theme.palette.error.main;
      default:
        return 'inherit';
    }
  };

  const renderResourceIndicator = (
    status: 'normal' | 'warning' | 'critical',
    resource: string
  ) => {
    if (status === 'normal') return null;

    const Icon = status === 'critical' ? ErrorIcon : WarningIcon;
    return (
      <Box 
        component="span" 
        sx={{ 
          display: 'inline-flex',
          alignItems: 'center',
          ml: 1,
          color: getStatusColor(status)
        }}
      >
        <Icon fontSize="small" />
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          {resource}
        </Typography>
      </Box>
    );
  };

  return (
    <Card 
      sx={{ 
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <StatusIndicator status={service.status} />
          <Typography variant="h6" component="div" sx={{ ml: 1, flex: 1 }}>
            {service.name}
            {renderResourceIndicator(cpuStatus, 'CPU')}
            {renderResourceIndicator(memoryStatus, 'MEM')}
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Chip 
            label={service.status} 
            size="small"
            color={service.status === 'running' ? 'success' : 'default'}
          />
          {service.version && (
            <Chip 
              label={`v${service.version}`} 
              size="small" 
              variant="outlined"
            />
          )}
        </Box>

        <ServiceStats 
          stats={service.stats}
          cpuStatus={cpuStatus}
          memoryStatus={memoryStatus}
        />

        <ServiceControls service={service} />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <ServiceDetails 
              service={service}
              alerts={alerts}
            />
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};