export interface DockerContainerState {
  Status: string;
  Running: boolean;
  Paused: boolean;
  Restarting: boolean;
  Dead: boolean;
  Pid: number;
  ExitCode: number;
  Error: string;
  StartedAt: string;
  FinishedAt: string;
  Health?: {
    Status: string;
    FailingStreak: number;
    Log: Array<{
      Start: string;
      End: string;
      ExitCode: number;
      Output: string;
    }>;
  };
}

export interface DockerContainer {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports: Array<{
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
  }>;
  Labels: { [key: string]: string };
  State: string;
  Status: string;
  HostConfig: {
    NetworkMode: string;
  };
  NetworkSettings: {
    Networks: {
      [key: string]: {
        IPAddress: string;
        Gateway: string;
        MacAddress: string;
      };
    };
  };
  Mounts: Array<{
    Type: string;
    Source: string;
    Destination: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }>;
}

export interface DockerImage {
  Id: string;
  RepoTags: string[];
  RepoDigests: string[];
  Created: number;
  Size: number;
  VirtualSize: number;
  Labels: { [key: string]: string };
}