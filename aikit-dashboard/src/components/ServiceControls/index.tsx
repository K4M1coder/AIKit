import React from 'react';
import { Button, CircularProgress, ButtonGroup, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RefreshIcon from '@mui/icons-material/Refresh';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Service } from '../../types/service';
import { useServiceManagement } from '../../hooks/useServiceManagement';

const ControlsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

interface ServiceControlsProps {
  service: Service;
}

export const ServiceControls: React.FC<ServiceControlsProps> = ({ service }) => {
  const { isActionPending, startService, stopService, restartService, updateService } = useServiceManagement(service);
  
  return (
    <ControlsWrapper>
      <ButtonGroup variant="contained" size="small">
        <Tooltip title="Start Service" arrow>
          <span>
            <Button
              color="success"
              disabled={service.status === 'running' || isActionPending}
              onClick={startService}
              startIcon={<PlayArrowIcon />}
            >
              Start
            </Button>
          </span>
        </Tooltip>
        
        <Tooltip title="Stop Service" arrow>
          <span>
            <Button
              color="error"
              disabled={service.status === 'stopped' || isActionPending}
              onClick={stopService}
              startIcon={<StopIcon />}
            >
              Stop
            </Button>
          </span>
        </Tooltip>

        <Tooltip title="Restart Service" arrow>
          <span>
            <Button
              color="warning"
              disabled={service.status === 'stopped' || isActionPending}
              onClick={restartService}
              startIcon={<RefreshIcon />}
            >
              Restart
            </Button>
          </span>
        </Tooltip>
      </ButtonGroup>

      <Tooltip title="Update Service" arrow>
        <span>
          <Button
            variant="outlined"
            disabled={service.status !== 'running' || isActionPending}
            onClick={updateService}
            startIcon={<SystemUpdateAltIcon />}
            size="small"
          >
            Update
          </Button>
        </span>
      </Tooltip>

      {isActionPending && (
        <CircularProgress size={20} sx={{ ml: 1 }} />
      )}
    </ControlsWrapper>
  );
};