import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { ServiceStatus } from '../../types/service';

export const ManagementPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

export const ManagementStatusChip = styled('div')<{ status: ServiceStatus }>(({ theme, status }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  ...(() => {
    switch (status) {
      case 'running':
        return {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.contrastText,
        };
      case 'stopped':
        return {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.contrastText,
        };
      case 'error':
        return {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.contrastText,
        };
      default:
        return {
          backgroundColor: theme.palette.grey[200],
          color: theme.palette.text.secondary,
        };
    }
  })(),
}));

export const ActionButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '& .MuiButton-root': {
    minWidth: 100,
  },
}));