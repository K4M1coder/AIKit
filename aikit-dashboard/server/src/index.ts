import express from 'express';
import cors from 'cors';
import { DockerService } from './services/DockerService';
import { validateService } from './middleware/validateService';
import { errorHandler } from './middleware/errorHandler';

declare global {
  namespace Express {
    interface Request {
      service?: any;
    }
  }
}

const app = express();
const port = process.env.PORT || 3001;
const dockerService = new DockerService();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all services
app.get('/api/services', async (req, res, next) => {
  try {
    const services = await dockerService.getServices();
    res.json(services);
  } catch (error) {
    next(error);
  }
});

// Service-specific routes with validation
app.use('/api/services/:id', validateService(dockerService));

// Get single service
app.get('/api/services/:id', (req, res) => {
  res.json(req.service);
});

// Get service status
app.get('/api/services/:id/status', async (req, res, next) => {
  try {
    const status = await dockerService.getServiceStatus(req.service.containerId);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

// Start service
app.post('/api/services/:id/start', async (req, res, next) => {
  try {
    await dockerService.startService(req.service.containerId);
    res.json({ success: true, message: `Service ${req.service.name} started successfully` });
  } catch (error) {
    next(error);
  }
});

// Stop service
app.post('/api/services/:id/stop', async (req, res, next) => {
  try {
    await dockerService.stopService(req.service.containerId);
    res.json({ success: true, message: `Service ${req.service.name} stopped successfully` });
  } catch (error) {
    next(error);
  }
});

// Restart service
app.post('/api/services/:id/restart', async (req, res, next) => {
  try {
    await dockerService.restartService(req.service.containerId);
    res.json({ success: true, message: `Service ${req.service.name} restarted successfully` });
  } catch (error) {
    next(error);
  }
});

// Update service
app.post('/api/services/:id/update', async (req, res, next) => {
  try {
    await dockerService.updateService(req.service.containerId);
    res.json({ success: true, message: `Service ${req.service.name} updated successfully` });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

// Handle 404s
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    code: 'ROUTE_NOT_FOUND',
    path: req.path
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});