#!/bin/bash

# Get the Docker GID on the host system
DOCKER_GID=$(getent group docker | cut -d: -f3)
echo "Docker group ID is: $DOCKER_GID"

# Stop the dashboard API container
docker-compose down dashboard-api

# Update docker-compose.yml to use the root user instead of trying with specific user IDs
# This is a temporary solution to see if it resolves the issue
sed -i 's/user: "${UID:-1000}:${DOCKER_GID:-999}"/user: "root"/' docker-compose.yml

# Rebuild and restart the dashboard API
docker-compose up -d --build dashboard-api

echo "Dashboard API restarted with root user to access Docker socket"
echo "Check the logs in a few seconds with: docker logs aikit-dashboard-api"
