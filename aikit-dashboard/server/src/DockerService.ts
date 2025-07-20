import Docker from 'dockerode';
import { Service, ServiceStatus, ServiceHealth } from '../types/service';
import { DockerContainerState, DockerContainer } from '../types/docker';

/**
 * Format timestamp for logging
 */
function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

export class DockerService {
  private docker: Docker;
  private services: Map<string, Service>;
  private statsCache: Map<string, any>;
  private statsInterval: NodeJS.Timeout | null;

  constructor() {
    try {
      console.log(`${getTimestamp()} [DOCKER] Initializing Docker service with socket path: ${process.env.DOCKER_SOCKET || '/var/run/docker.sock'}`);
      
      // Create Docker client with additional debug info
      this.docker = new Docker({
        socketPath: process.env.DOCKER_SOCKET || '/var/run/docker.sock',
      });
      
      // Test Docker connection on startup
      this.testConnection().catch(err => {
        console.error(`${getTimestamp()} [ERROR] Docker connection test failed: ${err.message}`);
        if (err.message.includes('connect EACCES')) {
          console.error(`${getTimestamp()} [ERROR] ======= DOCKER SOCKET PERMISSION ERROR =======`);
          console.error(`${getTimestamp()} [ERROR] The application does not have permissions to access the Docker socket.`);
          console.error(`${getTimestamp()} [ERROR] You may need to:`);
          console.error(`${getTimestamp()} [ERROR] 1. Mount the Docker socket with proper permissions in your docker-compose.yml`);
          console.error(`${getTimestamp()} [ERROR] 2. Ensure the container has the correct user/group permissions`);
          console.error(`${getTimestamp()} [ERROR] ==========================================`);
        } else if (err.message.includes('connect ENOENT')) {
          console.error(`${getTimestamp()} [ERROR] ======= DOCKER SOCKET NOT FOUND =======`);
          console.error(`${getTimestamp()} [ERROR] The Docker socket file does not exist at the specified path.`);
          console.error(`${getTimestamp()} [ERROR] Make sure you've mounted it correctly in your docker-compose.yml.`);
          console.error(`${getTimestamp()} [ERROR] ==========================================`);
        }
      });
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Error initializing Docker service:`, error);
      throw error;
    }

    this.services = new Map();
    this.statsCache = new Map();
    this.statsInterval = null;
    this.initializeServices();
    this.startStatsMonitoring();
  }

  // Method to test Docker connection
  async testConnection(): Promise<void> {
    try {
      console.log(`${getTimestamp()} [DOCKER] Testing Docker connection...`);
      const info = await this.docker.info();
      console.log(`${getTimestamp()} [DOCKER] Connection successful! Docker version: ${info.ServerVersion}`);
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Docker connection test failed:`, error);
      throw error;
    }
  }

  private async initializeServices() {
    // Initialize known services from docker-compose
    const services = [
      {
        id: 'n8n',
        name: 'n8n',
        description: 'Workflow automation platform with 400+ integrations',
        icon: 'https://n8n.io/favicon.ico',
        url: 'http://localhost:5678',
        port: 5678,
        containerId: 'n8n',
        docsUrl: 'https://docs.n8n.io/',
        internalDocsUrl: '/docs/n8n.html',
        githubUrl: 'https://github.com/n8n-io/n8n',
      },
      {
        id: 'openwebui',
        name: 'Open WebUI',
        description: 'Advanced chat interface with function calling',
        icon: 'https://openwebui.com/favicon.ico',
        url: 'http://localhost:3000',
        port: 3000,
        containerId: 'open-webui',
        docsUrl: 'https://docs.openwebui.com/',
        internalDocsUrl: '/docs/openwebui.html',
        githubUrl: 'https://github.com/open-webui/open-webui',
      },
      // Add other services...
    ];

    services.forEach(service => {
      this.services.set(service.id, {
        ...service,
        status: 'stopped' as ServiceStatus,
        health: 'none' as ServiceHealth,
      });
    });
    
    console.log(`${getTimestamp()} [INFO] Initialized service definitions: ${services.length} services`);
  }

  private async startStatsMonitoring() {
    // Clear any existing monitoring
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
    }

    console.log(`${getTimestamp()} [INFO] Starting container stats monitoring`);

    this.statsInterval = setInterval(async () => {
      try {
        const containers = await this.docker.listContainers();
        
        for (const container of containers) {
          try {
            const stats = await this.docker.getContainer(container.Id).stats({ stream: false });
            this.statsCache.set(container.Id, stats);
          } catch (error) {
            console.error(`${getTimestamp()} [ERROR] Failed to get stats for container ${container.Id.substring(0, 12)}:`, error);
          }
        }
      } catch (error) {
        console.error(`${getTimestamp()} [ERROR] Error in stats monitoring:`, error);
      }
    }, 5000); // Update every 5 seconds
  }

  private calculateStats(stats: any) {
    if (!stats) return null;

    const cpuDelta = stats.cpu_stats.cpu_usage.total_usage - stats.precpu_stats.cpu_usage.total_usage;
    const systemDelta = stats.cpu_stats.system_cpu_usage - stats.precpu_stats.system_cpu_usage;
    const cpuPercent = (cpuDelta / systemDelta) * 100;

    const memoryUsage = stats.memory_stats.usage;
    const memoryLimit = stats.memory_stats.limit;
    const memoryPercent = (memoryUsage / memoryLimit) * 100;

    return {
      cpu: Number(cpuPercent.toFixed(2)),
      memory: Number(memoryPercent.toFixed(2)),
      memoryUsage: memoryUsage,
      memoryLimit: memoryLimit,
    };
  }

  public async getServices(): Promise<Service[]> {
    await this.updateServicesStatus();
    return Array.from(this.services.values());
  }

  public async getService(id: string): Promise<(Service & { stats?: any }) | null> {
    const service = this.services.get(id);
    if (!service) return null;
    
    const status = await this.getServiceStatus(service.containerId);
    const stats = this.getServiceStats(service.containerId);
    
    return { 
      ...service, 
      ...status,
      stats,
    };
  }

  public getServiceStats(containerId: string) {
    const stats = this.statsCache.get(containerId);
    return stats ? this.calculateStats(stats) : null;
  }

  public async getServiceStatus(containerId: string): Promise<{ status: ServiceStatus; health: ServiceHealth; version?: string; error?: string }> {
    try {
      const container = this.docker.getContainer(containerId);
      const info = await container.inspect();

      // Determine health status
      let health: ServiceHealth = 'none';
      if (info.State.Health) {
        health = info.State.Health.Status === 'healthy' ? 'healthy' : 'unhealthy';
      }

      // Determine container status
      let status: ServiceStatus = 'stopped';
      if (info.State.Running) {
        status = 'running';
      }
      
      const result: { status: ServiceStatus; health: ServiceHealth; version?: string; error?: string } = {
        status,
        health,
        version: info.Config.Image,
      };

      if (info.State.Error) {
        result.status = 'error' as ServiceStatus;
        result.error = info.State.Error;
      }

      return result;
    } catch (error) {
      return {
        status: 'error' as ServiceStatus,
        health: 'none' as ServiceHealth,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private async updateServicesStatus(): Promise<void> {
    try {
      const containers = await this.docker.listContainers({ all: true });
      
      for (const [id, service] of this.services.entries()) {
        const container = containers.find(c => c.Names.includes(`/${service.containerId}`));
        if (container) {
          const status = await this.getServiceStatus(container.Id);
          const stats = this.getServiceStats(container.Id);
          
          // Use type assertion to handle stats property
          const updatedService = { 
            ...service, 
            ...status
          } as Service;
          
          // Add stats separately with type assertion
          (updatedService as any).stats = stats;
          
          this.services.set(id, updatedService);
        } else {
          // Container not found, mark as stopped
          this.services.set(id, { 
            ...service, 
            status: 'stopped' as ServiceStatus,
            health: 'none' as ServiceHealth
          });
        }
      }
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Error updating services status:`, error);
    }
  }

  public async startService(containerId: string): Promise<void> {
    try {
      console.log(`${getTimestamp()} [DOCKER] Starting service: ${containerId}`);
      const container = this.docker.getContainer(containerId);
      await container.start();
      console.log(`${getTimestamp()} [DOCKER] Service started successfully: ${containerId}`);
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Failed to start service ${containerId}:`, error);
      throw error;
    }
  }

  public async stopService(containerId: string): Promise<void> {
    try {
      console.log(`${getTimestamp()} [DOCKER] Stopping service: ${containerId}`);
      const container = this.docker.getContainer(containerId);
      await container.stop();
      console.log(`${getTimestamp()} [DOCKER] Service stopped successfully: ${containerId}`);
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Failed to stop service ${containerId}:`, error);
      throw error;
    }
  }

  public async restartService(containerId: string): Promise<void> {
    try {
      console.log(`${getTimestamp()} [DOCKER] Restarting service: ${containerId}`);
      const container = this.docker.getContainer(containerId);
      await container.restart();
      console.log(`${getTimestamp()} [DOCKER] Service restarted successfully: ${containerId}`);
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Failed to restart service ${containerId}:`, error);
      throw error;
    }
  }

  public async updateService(containerId: string): Promise<void> {
    try {
      console.log(`${getTimestamp()} [DOCKER] Updating service: ${containerId}`);
      const container = this.docker.getContainer(containerId);
      const info = await container.inspect();
      const image = info.Config.Image;
      
      console.log(`${getTimestamp()} [DOCKER] Pulling latest image for: ${image}`);
      await this.docker.pull(image);
      
      console.log(`${getTimestamp()} [DOCKER] Stopping container: ${containerId}`);
      await container.stop();
      
      console.log(`${getTimestamp()} [DOCKER] Removing container: ${containerId}`);
      await container.remove();
      
      console.log(`${getTimestamp()} [DOCKER] Container will be recreated by docker-compose: ${containerId}`);
      // The container should be automatically recreated by docker-compose
      // We'll wait a bit to let it start
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
      console.error(`${getTimestamp()} [ERROR] Failed to update service ${containerId}:`, error);
      throw error;
    }
  }

  public async cleanup() {
    if (this.statsInterval) {
      console.log(`${getTimestamp()} [INFO] Cleaning up stats monitoring`);
      clearInterval(this.statsInterval);
    }
  }
}