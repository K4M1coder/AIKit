import React from 'react';
import { 
  Grid, 
  Typography, 
  Box, 
  Fade,
  useTheme,
  useMediaQuery,
  Container,
  LinearProgress
} from '@mui/material';
import { ServiceCard } from '../../components/ServiceCard';
import { SystemOverview } from '../../components/SystemOverview';
import { ErrorDisplay } from '../../components/shared/ErrorDisplay';
import { LoadingDisplay } from '../../components/shared/LoadingDisplay';
import { useApi } from '../../hooks/useApi';
import { Service } from '../../types/service';

interface ServicesResponse {
  success: boolean;
  data: Service[];
}

interface GroupedServices {
  running?: Service[];
  stopped?: Service[];
}

const Dashboard: React.FC = () => {
  const { 
    data: apiResponse, 
    isLoading, 
    error, 
    refetch,
    currentInterval 
  } = useApi<ServicesResponse>('/services', {
    autoRefresh: true,
    interval: 5000,      // Start with 5s
    minInterval: 2000,   // Min 2s when issues detected
    maxInterval: 15000   // Max 15s when stable
  });

  const services = apiResponse?.data || [];

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  if (isLoading && !services.length) {
    return <LoadingDisplay message="Loading services..." fullHeight />;
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

  // Group services by status for better organization
  const groupedServices = services.reduce<GroupedServices>((acc, service) => {
    const status = service.status === 'running' ? 'running' : 'stopped';
    if (!acc[status]) acc[status] = [];
    acc[status]!.push(service);
    return acc;
  }, {});

  const getColumnCount = () => {
    if (isSmall) return 12;
    if (isMedium) return 6;
    return 4;
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
        {isLoading && ( // Show subtle loading indicator for background refreshes
          <LinearProgress 
            sx={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              zIndex: theme.zIndex.appBar + 1 
            }} 
          />
        )}

        <Fade in timeout={800}>
          <div>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              AIKit Services Dashboard
              <Typography 
                variant="caption" 
                color="text.secondary" 
                sx={{ ml: 2 }}
              >
                Auto-refresh: {(currentInterval / 1000).toFixed(1)}s
              </Typography>
            </Typography>

            <SystemOverview services={services || []} />

            {groupedServices?.running && groupedServices.running.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                  Running Services
                </Typography>
                <Grid container spacing={3}>
                  {groupedServices.running.map((service, index) => (
                    <Grid item xs={12} sm={getColumnCount()} key={service.id}>
                      <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                        <div>
                          <ServiceCard service={service} />
                        </div>
                      </Fade>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {groupedServices?.stopped && groupedServices.stopped.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>
                  Stopped Services
                </Typography>
                <Grid container spacing={3}>
                  {groupedServices.stopped.map((service, index) => (
                    <Grid item xs={12} sm={getColumnCount()} key={service.id}>
                      <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                        <div>
                          <ServiceCard service={service} />
                        </div>
                      </Fade>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </div>
        </Fade>
      </Box>
    </Container>
  );
};

export default Dashboard;