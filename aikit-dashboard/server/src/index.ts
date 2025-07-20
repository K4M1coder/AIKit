import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { DockerService } from './services/DockerService';
import { errorHandler } from './middleware/errorHandler';
import { validateService } from './middleware/validateService';

const app = express();
const PORT = process.env.PORT || 3001;
const VERSION = '1.0.0';

/**
 * Print a stylish banner when the server starts
 */
function printBanner() {
  console.log(`  _____       _____ _    __ _____ _______     _____            _     _                         _ `);
  console.log(` |  __ \\    |_   _| | /  /|_   _|__   __|   |  __ \\         | |   | |                       | |`);
  console.log(` | |__\ \\     | | | |/ /    | | |  | |      | |  | | __ _ ___| |__ | |__   ___   __ _ _ __ __| |`);
  console.log(` |  ____ \\    | | |    \    | | |  | |      | |  | |/ _\` / __| '_ \\| '_ \\ / _ \\ / _\` | '__/ _\` |`);
  console.log(` | |    \ \\  _| |_| |\  \  _| |_|  | |      | |__| | (_| \\__ \\ | | | |_) | (_) | (_| | | | (_| |`);
  console.log(` |_|     \\_\|_____|_| \__\|_____|  |_|      |_____/ \\__,_|___/_| |_|_.__/ \\___/ \\__,_|_|  \\__,_|`);
  console.log(``);
  console.log(` Version: ${VERSION}, AIKit Monitoring Service`);
  console.log(` Access web UI at http://localhost:8080`);
  console.log(` API available at http://localhost:${PORT}`);
  console.log(``);
}

/**
 * Format timestamp for logging
 */
function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

// Create Docker service singleton
const dockerService = new DockerService();

// Enhanced CORS configuration to ensure proper cross-origin access
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:80', 'http://localhost:8080', 'http://localhost'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Add debugging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${getTimestamp()} [API] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all services
app.get('/services', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`${getTimestamp()} [INFO] Getting all services...`);
    const services = await dockerService.getServices();
    console.log(`${getTimestamp()} [INFO] Retrieved ${services.length} services`);
    res.json({ success: true, data: services });
  } catch (error) {
    console.error(`${getTimestamp()} [ERROR] Error getting services:`, error);
    next(error);
  }
});

// Get a specific service by ID
app.get('/services/:id', validateService, async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`${getTimestamp()} [INFO] Getting service: ${req.params.id}`);
    const service = await dockerService.getService(req.params.id);
    if (!service) {
      console.log(`${getTimestamp()} [WARN] Service not found: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
});

// Control a service
app.post('/services/:id/control', validateService, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { action } = req.body;
    const { id } = req.params;
    
    console.log(`${getTimestamp()} [INFO] Service control requested: ${id} - ${action}`);
    
    const service = await dockerService.getService(id);
    if (!service) {
      console.log(`${getTimestamp()} [WARN] Service not found: ${id}`);
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    
    switch (action) {
      case 'start':
        await dockerService.startService(service.containerId);
        break;
      case 'stop':
        await dockerService.stopService(service.containerId);
        break;
      case 'restart':
        await dockerService.restartService(service.containerId);
        break;
      case 'update':
        await dockerService.updateService(service.containerId);
        break;
      default:
        console.log(`${getTimestamp()} [WARN] Invalid action requested: ${action}`);
        return res.status(400).json({ success: false, message: 'Invalid action' });
    }
    
    const updatedService = await dockerService.getService(id);
    console.log(`${getTimestamp()} [INFO] Service ${action} successful for: ${id}`);
    res.json({ success: true, message: `Service ${action} successful`, data: updatedService });
  } catch (error) {
    console.error(`${getTimestamp()} [ERROR] Error controlling service: ${error}`);
    next(error);
  }
});

// Add error handler middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  // Print banner first, then let Docker service report its success
  printBanner();
});