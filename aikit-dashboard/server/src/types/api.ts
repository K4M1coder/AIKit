export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  message?: string;
}

export interface ApiError {
  error: string;
  code: string;
  path?: string;
}

export interface ServiceActionResponse {
  success: boolean;
  message: string;
}

export interface HealthCheckResponse {
  status: 'ok' | 'error';
  version?: string;
  timestamp: number;
}