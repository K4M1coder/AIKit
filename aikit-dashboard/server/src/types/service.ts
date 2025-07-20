export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  port: number;
  containerId: string;
  docsUrl?: string;
  internalDocsUrl?: string;
  githubUrl?: string;
  status: ServiceStatus;
  health?: ServiceHealth;
  version?: string;
}

export type ServiceStatus = 'running' | 'stopped' | 'error';
export type ServiceHealth = 'healthy' | 'unhealthy' | 'none';

export interface ServiceStats {
  cpu: number;
  memory: number;
  uptime: number;
  restartCount: number;
  lastRestart?: Date;
}