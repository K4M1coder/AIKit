import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorDisplayProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        bgcolor: 'error.light',
        color: 'error.contrastText'
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 48, mb: 2 }} />
      <Typography variant="h6" gutterBottom align="center">
        Oops! Something went wrong
      </Typography>
      <Typography color="inherit" align="center" sx={{ mb: 2 }}>
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="inherit"
          startIcon={<RefreshIcon />}
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </Paper>
  );
};