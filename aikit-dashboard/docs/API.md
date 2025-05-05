# AIKit Dashboard API Reference

This document provides detailed information about the API endpoints available for the AIKit Dashboard.

## Base URL

All API endpoints are relative to the base URL:

```
http://localhost:5000/api
```

You can configure the port and other settings using environment variables as described in the [DOCUMENTATION.md](./DOCUMENTATION.md).

## Authentication

The API currently uses basic authentication. Include the following header with all requests:

```
Authorization: Bearer YOUR_API_KEY
```

To configure the API key, set the `API_KEY` environment variable for the backend server.

## Response Format

All API responses follow a standard format:

```json
{
  "success": true|false,
  "data": { ... },  // Response data (only included on success)
  "error": "Error message"  // Only included on failure
}
```

## API Endpoints

### Service Management

#### Get All Services

Returns a list of all AIKit services.

- **URL**: `/services`
- **Method**: `GET`
- **Query Parameters**:
  - `filter` (optional): Filter services by status (running, stopped, all)
  - `limit` (optional): Limit the number of results
  - `page` (optional): Pagination page number

**Response Example**:

```json
{
  "success": true,
  "data": [
    {
      "id": "service1",
      "name": "AI Service 1",
      "containerId": "abc123",
      "status": "running",
      "health": "healthy",
      "version": "1.0.0",
      "description": "Description of the service",
      "url": "http://localhost:8000",
      "port": 8000,
      "stats": {
        "cpu": 12.5,
        "memory": 35.2,
        "uptime": 86400,
        "restartCount": 0
      }
    },
    // More services...
  ]
}
```

#### Get Service Details

Returns detailed information about a specific service.

- **URL**: `/services/:containerId`
- **Method**: `GET`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "id": "service1",
    "name": "AI Service 1",
    "containerId": "abc123",
    "status": "running",
    "health": "healthy",
    "version": "1.0.0",
    "description": "Description of the service",
    "url": "http://localhost:8000",
    "port": 8000,
    "stats": {
      "cpu": 12.5,
      "memory": 35.2,
      "uptime": 86400,
      "restartCount": 0
    },
    "details": {
      "image": "service1:latest",
      "created": "2025-05-01T10:00:00Z",
      "ports": [
        {
          "internal": 8000,
          "external": 8000
        }
      ],
      "volumes": [
        {
          "source": "/data",
          "destination": "/app/data"
        }
      ],
      "env": [
        "NODE_ENV=production",
        "PORT=8000"
      ]
    }
  }
}
```

#### Start Service

Starts a stopped service.

- **URL**: `/services/:containerId/start`
- **Method**: `POST`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "message": "Service started successfully",
    "status": "running"
  }
}
```

#### Stop Service

Stops a running service.

- **URL**: `/services/:containerId/stop`
- **Method**: `POST`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "message": "Service stopped successfully",
    "status": "stopped"
  }
}
```

#### Restart Service

Restarts a service.

- **URL**: `/services/:containerId/restart`
- **Method**: `POST`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "message": "Service restarted successfully",
    "status": "running"
  }
}
```

#### Update Service

Updates a service to the latest image version.

- **URL**: `/services/:containerId/update`
- **Method**: `POST`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "message": "Service updated successfully",
    "version": "1.0.1"
  }
}
```

### Service Monitoring

#### Get Service Logs

Returns the logs for a specific service.

- **URL**: `/services/:containerId/logs`
- **Method**: `GET`
- **URL Parameters**:
  - `containerId`: Docker container ID or name
- **Query Parameters**:
  - `lines` (optional): Number of log lines to return (default: 100)
  - `since` (optional): Return logs since timestamp (e.g., "2025-05-01T00:00:00Z")

**Response Example**:

```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "timestamp": "2025-05-05T10:00:00Z",
        "message": "Service started successfully",
        "level": "info"
      },
      // More log entries...
    ]
  }
}
```

#### Get Service Stats

Returns the resource usage statistics for a specific service.

- **URL**: `/services/:containerId/stats`
- **Method**: `GET`
- **URL Parameters**:
  - `containerId`: Docker container ID or name

**Response Example**:

```json
{
  "success": true,
  "data": {
    "cpu": 12.5,
    "memory": 35.2,
    "memoryUsage": 512000000,
    "memoryLimit": 1073741824,
    "uptime": 86400,
    "restartCount": 0,
    "timestamp": "2025-05-05T10:30:00Z"
  }
}
```

### System Information

#### Get System Stats

Returns overall system statistics.

- **URL**: `/system/stats`
- **Method**: `GET`

**Response Example**:

```json
{
  "success": true,
  "data": {
    "services": {
      "total": 10,
      "running": 8,
      "stopped": 2
    },
    "resources": {
      "avgCpu": 25.6,
      "avgMemory": 40.3,
      "totalMemoryUsage": 4096000000
    },
    "health": {
      "status": "healthy",
      "warnings": 1,
      "errors": 0
    }
  }
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Service or resource not found |
| 500 | Internal Server Error - Server-side error |

## Rate Limiting

The API has rate limiting in place to prevent abuse. Headers in the response provide information about rate limits:

- `X-RateLimit-Limit`: The number of requests allowed per hour
- `X-RateLimit-Remaining`: The number of requests remaining in the current time window
- `X-RateLimit-Reset`: The time at which the rate limit resets, in UTC epoch seconds

## Webhook Notifications

You can configure webhooks to receive notifications when service states change:

- **URL**: `/webhooks`
- **Method**: `POST`
- **Request Body**:

```json
{
  "url": "https://your-webhook-url.com",
  "events": ["service:start", "service:stop", "service:error"],
  "secret": "your-webhook-secret"
}
```

For more details on integrating with the API, see the examples in [DOCUMENTATION.md](./DOCUMENTATION.md).