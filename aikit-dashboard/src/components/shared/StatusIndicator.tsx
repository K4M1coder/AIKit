import React from 'react';
import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 200, 83, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 200, 83, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 200, 83, 0);
  }
`;

const StatusDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'status'
})<{ status: 'running' | 'stopped' | 'error' }>(({ theme, status }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: 
    status === 'running' ? theme.palette.success.main :
    status === 'stopped' ? theme.palette.error.main :
    theme.palette.warning.main,
  animation: status === 'running' ? `${pulse} 2s infinite` : 'none',
  transition: theme.transitions.create(['background-color', 'transform', 'box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
}));

interface StatusIndicatorProps {
  status: 'running' | 'stopped' | 'error';
  size?: 'small' | 'medium' | 'large';
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status,
  size = 'medium'
}) => {
  const sizeMap = {
    small: 8,
    medium: 12,
    large: 16,
  };

  return (
    <StatusDot
      status={status}
      sx={{
        width: sizeMap[size],
        height: sizeMap[size],
      }}
    />
  );
};