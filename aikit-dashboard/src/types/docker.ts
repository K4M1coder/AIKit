export interface ContainerStatus {
  status: 'running' | 'stopped' | 'restarting' | 'updating' | 'error';
  health: 'healthy' | 'unhealthy' | 'none';
  version: string;
}

export type ContainerAction = 'start' | 'stop' | 'restart' | 'update';

export interface ContainerInfo extends ContainerStatus {
  id: string;
  name: string;
  image: string;
  created: string;
  ports: Array<{
    internal: number;
    external: number;
  }>;
}