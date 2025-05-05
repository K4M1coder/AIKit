# AIKit Dashboard Troubleshooting Guide

This document provides solutions for common issues you might encounter when using the AIKit Dashboard.

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Connection Issues](#connection-issues)
3. [Docker Integration Problems](#docker-integration-problems)
4. [UI Problems](#ui-problems)
5. [Performance Issues](#performance-issues)
6. [Error Messages](#common-error-messages)

## Installation Issues

### npm Installation Failures

**Issue**: Errors when running `npm install`.

**Solution**:
1. Make sure Node.js version is 18.0.0 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` folder and `package-lock.json`
4. Run `npm install` again
5. If errors persist, check for compatibility issues in package.json

### Docker Compose Not Starting All Services

**Issue**: Some services don't start when running `docker-compose up`.

**Solution**:
1. Check logs for specific errors: `docker-compose logs`
2. Verify port conflicts: `netstat -tuln`
3. Ensure Docker has sufficient resources allocated
4. Try starting services one by one to identify the problematic service
5. Check environment variables and volume mounts

## Connection Issues

### API Connection Failed

**Issue**: Dashboard shows "API Connection Failed" error.

**Solution**:
1. Verify the API server is running: `docker ps` or check service status
2. Confirm the API URL is correct in the `.env` file (`VITE_API_BASE_URL`)
3. Check for network connectivity between dashboard and API server
4. Review API server logs for errors
5. Verify CORS settings allow connections from dashboard origin

### Unable to Connect to Docker Socket

**Issue**: API server can't connect to Docker socket.

**Solution**:
1. Verify Docker socket path: `/var/run/docker.sock`
2. Check permissions on Docker socket: `ls -la /var/run/docker.sock`
3. Ensure the API server container has proper volumes: `-v /var/run/docker.sock:/var/run/docker.sock`
4. Run API server with proper user privileges
5. Try restarting the Docker daemon: `sudo systemctl restart docker`

## Docker Integration Problems

### Services Not Detected

**Issue**: Docker containers are running but not showing in dashboard.

**Solution**:
1. Verify containers have the required label: `aikit.service=true`
2. Check Docker API version compatibility
3. Restart the API server
4. Verify Docker permissions and access
5. Check container inspection output: `docker inspect <container_id>`

### Unable to Start/Stop Services

**Issue**: Service control buttons (start, stop, restart) have no effect.

**Solution**:
1. Check API server logs for errors
2. Verify API authentication is correct
3. Ensure Docker socket access is working
4. Check if the target container exists and is accessible
5. Try the operation directly with Docker CLI to see if it's a Docker issue

## UI Problems

### Dashboard Not Updating

**Issue**: Service status or statistics don't update automatically.

**Solution**:
1. Check refresh interval configuration in environment variables
2. Verify API connectivity
3. Check browser console for JavaScript errors
4. Try manual refresh (browser refresh)
5. Review API server logs for rate limiting or errors

### Resource Metrics Not Showing

**Issue**: CPU and memory usage metrics are missing.

**Solution**:
1. Verify Docker stats API is functioning: `docker stats`
2. Check API server permissions to access Docker stats
3. Ensure containers are actually running (not in error state)
4. Review API server logs for statistics collection errors
5. Some container types may not report proper resource metrics

## Performance Issues

### Dashboard Loading Slowly

**Issue**: Dashboard takes a long time to load.

**Solution**:
1. Reduce the number of services being monitored
2. Increase refresh interval to reduce API load
3. Check browser performance and memory usage
4. Verify server has sufficient resources
5. Consider using pagination for service listing

### High CPU/Memory Usage

**Issue**: Dashboard or API server using excessive resources.

**Solution**:
1. Increase polling intervals for automatic refreshes
2. Reduce number of monitored services
3. Check for memory leaks in browser console
4. Ensure proper production build for deployment
5. Consider resource limits for API server container

## Common Error Messages

### "Docker API Error: Error response from daemon"

**Issue**: Communication with Docker daemon failed.

**Solution**:
1. Verify Docker is running: `systemctl status docker`
2. Check Docker socket permissions
3. Review specific error message details
4. Ensure API server has proper access to Docker socket
5. Docker version may be incompatible - check version requirements

### "Container not found"

**Issue**: API can't find the specified container.

**Solution**:
1. Verify container ID is correct
2. Check if container exists: `docker ps -a`
3. Container may have been removed or renamed
4. Refresh the dashboard to update container list
5. Check container name vs. container ID usage

### "CORS policy: No 'Access-Control-Allow-Origin' header"

**Issue**: Browser blocks API requests due to CORS policy.

**Solution**:
1. Set proper CORS_ORIGIN in API server environment
2. Ensure API server includes proper CORS headers
3. Check for proxy configuration in development setup
4. Verify browser security settings
5. Use browser extensions to debug CORS issues (temporarily disable for testing)

## Advanced Troubleshooting

For more complex issues, you can enable debug logging:

### API Server Debug Logging

Set the environment variable:
```
LOG_LEVEL=debug
```

### Frontend Debug Logging

Enable browser debugging by adding to localStorage:
```javascript
localStorage.setItem('AIKitDashboard:debug', 'true')
```

## Getting Help

If you continue to experience issues:

1. Check for known issues in the GitHub repository
2. Gather logs from both the frontend and API server
3. Include Docker environment details in any support requests
4. Try with a minimal setup to isolate the issue
5. Contact support with complete details of your setup and the issue