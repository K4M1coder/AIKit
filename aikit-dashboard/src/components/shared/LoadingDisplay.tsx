import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingDisplayProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  fullHeight?: boolean;
}

export const LoadingDisplay: React.FC<LoadingDisplayProps> = ({
  message = 'Loading...',
  size = 'medium',
  fullHeight = false,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: fullHeight ? '50vh' : 'auto',
        py: 4,
      }}
    >
      <CircularProgress
        size={
          size === 'small' ? 24 :
          size === 'large' ? 48 : 36
        }
        sx={{ mb: 2 }}
      />
      <Typography color="text.secondary" variant="body1">
        {message}
      </Typography>
    </Box>
  );
};