# AIKit Dashboard Documentation

This document provides detailed information on how to configure and use the AIKit Dashboard application.

## Table of Contents

1. [Dashboard Overview](#dashboard-overview)
2. [Service Management](#service-management)
3. [System Monitoring](#system-monitoring)
4. [Configuration Options](#configuration-options)
5. [User Interface Guide](#user-interface-guide)
6. [Integration with Other Services](#integration-with-other-services)

## Dashboard Overview

The AIKit Dashboard provides a centralized interface for monitoring and managing all your AI services running in Docker containers. It's designed to give you real-time visibility into service health, resource usage, and operational status.

### Key Features

- **Service Status Monitoring**: See which services are running, stopped, or experiencing issues
- **Resource Usage Tracking**: Monitor CPU and memory usage across all services
- **Service Management**: Start, stop, restart and update services
- **Alerting**: Get notified when services exceed resource thresholds
- **Detailed Service Information**: View logs, configuration, and other details for each service

## Service Management

### Starting a Service

1. Locate the service card on the dashboard
2. Click the "Start" button in the service controls section
3. The status indicator will show "Starting" during initialization
4. Once ready, the status will change to "Running"

### Stopping a Service

1. Find the running service on the dashboard
2. Click the "Stop" button in the service controls section
3. The service will begin shutting down
4. Status will change to "Stopped" when complete

### Restarting a Service

1. For any running service, click the "Restart" button
2. The service will shut down and then start again
3. This is useful for applying configuration changes that require a restart

### Updating a Service

1. Click the "Update" button for a running service
2. The dashboard will pull the latest version of the service image
3. The service will restart with the updated version
4. Version information will be updated on the service card

## System Monitoring

### Resource Usage Indicators

- **CPU Usage**: Shows the percentage of CPU being used by each service
  - Green: Normal usage (0-70%)
  - Yellow: Warning level (70-90%)
  - Red: Critical level (90%+)

- **Memory Usage**: Shows the percentage of allocated memory being used
  - Green: Normal usage (0-80%)
  - Yellow: Warning level (80-95%)
  - Red: Critical level (95%+)

### System Overview Panel

The System Overview panel at the top of the dashboard shows:

1. Total number of running and stopped services
2. Overall system health status
3. Average CPU usage across all services
4. Average memory usage across all services

### Alerts

The dashboard generates alerts when:

- A service's CPU or memory usage exceeds warning or critical thresholds
- A service changes state (starts, stops, or encounters an error)
- A service update is available

Alerts appear in the following locations:
- In the service card itself
- In the service details panel
- As system notifications (if permitted by your browser)

## Configuration Options

### Dashboard Configuration

The dashboard can be configured through environment variables:

```
# Frontend Environment Variables
VITE_API_BASE_URL=http://localhost:5000/api  # URL for the API server
VITE_REFRESH_INTERVAL=5000                   # Data refresh interval in milliseconds
VITE_ENABLE_NOTIFICATIONS=true               # Enable browser notifications
VITE_CPU_WARNING_THRESHOLD=70                # CPU warning threshold percentage
VITE_CPU_CRITICAL_THRESHOLD=90               # CPU critical threshold percentage
VITE_MEMORY_WARNING_THRESHOLD=80             # Memory warning threshold percentage
VITE_MEMORY_CRITICAL_THRESHOLD=95            # Memory critical threshold percentage
```

### API Server Configuration

The backend API server can be configured with these environment variables:

```
# Backend Environment Variables
PORT=5000                        # Port the API server runs on
DOCKER_SOCKET_PATH=/var/run/docker.sock  # Path to Docker socket
LOG_LEVEL=info                   # Logging level (debug, info, warn, error)
CORS_ORIGIN=http://localhost:3000  # Allowed origin for CORS
MAX_LOGS_LINES=100               # Maximum number of log lines to return
```

### Service Detection

By default, the dashboard detects Docker containers with the label `aikit.service=true`. 
To mark a container as an AIKit service, add this label in your docker-compose.yml:

```yaml
services:
  my-ai-service:
    image: my-ai-service:latest
    labels:
      - "aikit.service=true"
      - "aikit.name=My AI Service"  # Optional friendly name
      - "aikit.description=Service description"  # Optional description
```

## User Interface Guide

### Dashboard Page

The main dashboard shows all services in a card-based layout with:
- System overview at the top
- Running services section
- Stopped services section

Each service card displays:
- Service name and status
- Resource usage indicators
- Control buttons
- Expandable details section

### Service Details Page

Clicking on a service name takes you to the detailed service page with:
- Expanded resource usage graphs
- Container logs
- Configuration details
- Environment variables
- Mounted volumes
- Network settings

### About Page

The About page provides information about:
- Dashboard version
- System information
- Documentation links
- Project contributors

## Integration with Other Services

### Integration with n8n

The AIKit Dashboard can be integrated with n8n workflows:
1. Use the n8n HTTP Request node to call the AIKit Dashboard API
2. Create workflows that respond to service status changes
3. Automate service management tasks based on schedules or triggers

Example n8n workflow for service monitoring:
```json
{
  "nodes": [
    {
      "parameters": {
        "url": "http://localhost:5000/api/services",
        "authentication": "basicAuth",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Content-Type",
              "value": "application/json"
            }
          ]
        }
      },
      "name": "Get AIKit Services",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 1
    }
  ]
}
```

### Integration with Monitoring Tools

The dashboard can be integrated with monitoring tools like Prometheus and Grafana:
1. Configure the Prometheus Docker exporter to scrape metrics
2. Set up Grafana dashboards to visualize long-term trends
3. Create alerts based on metric thresholds

For detailed information on API endpoints, see [API.md](./API.md).