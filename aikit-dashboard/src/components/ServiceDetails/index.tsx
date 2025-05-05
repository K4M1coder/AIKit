import React from 'react';
import {
  Box,
  Collapse,
  useMediaQuery,
  useTheme,
  Typography,
  Stack,
  Alert,
  List,
  ListItem,
  Chip,
  Link,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Service } from '../../types/service';
import type { ResourceAlert } from '../../hooks/useResourceMonitor';

interface ServiceDetailsProps {
  service: Service;
  alerts: ResourceAlert[];
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  alerts,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const content = (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </Box>

      {alerts.length > 0 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Alerts
          </Typography>
          <List dense disablePadding>
            {alerts.map((alert, index) => (
              <ListItem key={index} disablePadding>
                <Alert 
                  severity={alert.level === 'critical' ? 'error' : 'warning'} 
                  sx={{ width: '100%', mb: 1 }}
                >
                  {alert.message}
                </Alert>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Links
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link href={service.url} target="_blank" rel="noopener">
            <Chip
              label="Open Service"
              onClick={() => {}}
              onDelete={() => {}}
              deleteIcon={<OpenInNewIcon />}
            />
          </Link>
          {service.docsUrl && (
            <Link href={service.docsUrl} target="_blank" rel="noopener">
              <Chip
                label="Documentation"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<OpenInNewIcon />}
              />
            </Link>
          )}
          {service.githubUrl && (
            <Link href={service.githubUrl} target="_blank" rel="noopener">
              <Chip
                label="GitHub"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<OpenInNewIcon />}
              />
            </Link>
          )}
        </Stack>
      </Box>
    </Stack>
  );

  if (!isMobile) {
    return content;
  }

  return (
    <Box>
      <Collapse in={true} timeout="auto">
        <Box sx={{ mt: 2 }}>
          {content}
        </Box>
      </Collapse>
    </Box>
  );
};