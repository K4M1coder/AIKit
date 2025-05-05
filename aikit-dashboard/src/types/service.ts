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

export interface ServiceDetails {
  overview: string;
  configuration: ConfigItem[];
  features: Feature[];
  documentation: Documentation;
  relatedServices: RelatedService[];
}

export interface ConfigItem {
  key: string;
  value: string;
  description: string;
}

export interface Feature {
  title: string;
  icon: string;
  description: string;
}

export interface Documentation {
  official?: string;
  github?: string;
  internal?: string;
}

export interface RelatedService {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface ServiceAction {
  type: 'start' | 'stop' | 'restart' | 'update';
  timestamp: number;
  status: 'pending' | 'success' | 'error';
  message?: string;
}

export interface ServiceStats {
  cpu: number;
  memory: number;
  uptime: number;
  restartCount: number;
  lastRestart?: Date;
}