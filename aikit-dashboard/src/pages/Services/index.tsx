import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
  Fade,
  Grow
} from '@mui/material';
import { ServiceManagement } from '../../components/ServiceManagement';
import { ErrorDisplay } from '../../components/shared/ErrorDisplay';
import { LoadingDisplay } from '../../components/shared/LoadingDisplay';
import { useApi } from '../../hooks/useApi';
import { Service } from '../../types/service';

interface ServicesResponse {
  success: boolean;
  data: Service[];
}

const Services: React.FC = () => {
  const { data: services, isLoading, error, refetch } = useApi<ServicesResponse>('/services');

  if (isLoading) {
    return <LoadingDisplay message="Loading services details..." fullHeight />;
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <ErrorDisplay 
          message={`Error loading services: ${error.message}`}
          onRetry={refetch}
        />
      </Box>
    );
  }

  return (
    <Box>
      <Fade in timeout={800}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Services Management
        </Typography>
      </Fade>

      <Grid container spacing={3}>
        {services?.data?.map((service: Service, index: number) => (
          <Grid item xs={12} key={service.id}>
            <Grow 
              in 
              timeout={600 + (index * 100)}
              style={{ transformOrigin: '0 0 0' }}
            >
              <Card sx={{
                transition: '0.3s',
                '&:hover': {
                  boxShadow: (theme) => theme.shadows[4],
                  transform: 'translateY(-4px)'
                }
              }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        component="img"
                        src={service.icon}
                        alt={`${service.name} icon`}
                        sx={{ 
                          width: 32, 
                          height: 32,
                          filter: (theme) => 
                            theme.palette.mode === 'dark' 
                              ? 'brightness(0.8)' 
                              : 'none'
                        }}
                      />
                      <Typography variant="h6">{service.name}</Typography>
                    </Box>
                    
                    <Typography color="text.secondary" variant="body2">
                      {service.description}
                    </Typography>

                    <Divider />

                    <ServiceManagement 
                      serviceId={service.id} 
                      containerId={service.containerId}
                      serviceName={service.name}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;