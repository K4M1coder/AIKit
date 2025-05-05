# AIKit Dashboard

A modern React dashboard for monitoring and managing AIKit services running in Docker containers.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Option 1: Using Docker Compose (Recommended)](#option-1-using-docker-compose-recommended)
  - [Option 2: Manual Installation](#option-2-manual-installation)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Docker Configuration](#docker-configuration)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Development](#development)
  - [Frontend Structure](#frontend-structure)
  - [Backend API Server Structure](#backend-api-server-structure)
  - [Development Workflow](#development-workflow)
  - [Build Process](#build-process)
  - [Docker Development](#docker-development)
  - [Testing](#testing)
  - [Code Quality](#code-quality)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- **Service Monitoring**: Real-time monitoring of all AIKit services with status indicators
- **Resource Tracking**: CPU and memory usage tracking with configurable thresholds
- **Service Management**: Start, stop, restart, and update services directly from the dashboard
- **Alert System**: Automatic alerts when resource usage exceeds thresholds
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices

## Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn v1.22.0+)
- **Docker**: v20.10.0 or higher (for API server integration)
- **Docker Compose**: v2.0.0 or higher (for running the full stack)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (latest 2 versions)

## Installation

### Option 1: Using Docker Compose (Recommended)

The easiest way to get started is using Docker Compose which will set up the entire stack including the dashboard and API server:

```bash
# Clone the repository
git clone https://github.com/yourusername/aikit-dashboard.git
cd aikit-dashboard

# Start the application stack
docker-compose up -d
```

The dashboard will be available at http://localhost:3000

### Option 2: Manual Installation

If you prefer to run the dashboard and API server separately:

#### Frontend (Dashboard)

```bash
# Navigate to the project directory
cd aikit-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm run serve
```

#### Backend (API Server)

```bash
# Navigate to the server directory
cd aikit-dashboard/server

# Install dependencies
npm install

# Start the server
npm run start
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Frontend Configuration
VITE_API_BASE_URL=http://localhost:5000/api
VITE_REFRESH_INTERVAL=5000

# Backend Configuration
PORT=5000
DOCKER_SOCKET_PATH=/var/run/docker.sock
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:3000
```

### Docker Configuration

The API server needs access to the Docker socket to manage containers. Ensure your Docker security settings allow this access. When running in Docker, the container is pre-configured to access the host's Docker socket.

## Usage

1. Open your browser and navigate to http://localhost:3000
2. The dashboard will show all available AIKit services
3. Use the control buttons to manage individual services
4. Monitor resource usage in the System Overview panel
5. Receive alerts when services exceed resource thresholds

For detailed usage instructions, see [DOCUMENTATION.md](./docs/DOCUMENTATION.md).

## API Integration

The dashboard connects to a backend API server that communicates with Docker to manage services. The API endpoints include:

- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service details
- `POST /api/services/:id/start` - Start a service
- `POST /api/services/:id/stop` - Stop a service
- `POST /api/services/:id/restart` - Restart a service
- `POST /api/services/:id/update` - Update a service

For a complete API reference, see [API.md](./docs/API.md).

## Development

The project consists of a React frontend dashboard and a Node.js backend API server.

### Frontend Structure

The frontend follows a feature-based organization:

```
src/
  ├── components/         # Reusable UI components
  │   ├── Layout/         # App layout components
  │   ├── ServiceCard/    # Service card display
  │   ├── ServiceControls/# Service control buttons
  │   ├── ServiceDetails/ # Detailed service information
  │   ├── ServiceManagement/ # Service management panel
  │   ├── SystemOverview/ # System-wide statistics
  │   └── shared/         # Shared UI components
  ├── contexts/           # React Context providers
  ├── hooks/              # Custom React hooks
  ├── pages/              # Application pages
  │   ├── Dashboard/      # Main dashboard view
  │   ├── Services/       # Individual service view
  │   └── About/          # About page
  ├── types/              # TypeScript type definitions
  ├── App.tsx             # Main application component
  └── main.tsx            # Application entry point
```

### Backend API Server Structure

The backend API server is organized as follows:

```
server/
  ├── src/
  │   ├── index.ts        # Server entry point
  │   ├── middleware/     # Express middleware
  │   │   ├── errorHandler.ts    # Global error handling
  │   │   └── validateService.ts # Service validation
  │   ├── services/       # Business logic modules
  │   │   └── DockerService.ts   # Docker operations
  │   └── types/          # TypeScript type definitions
  │       ├── api.ts      # API-related types
  │       └── docker.ts   # Docker-related types
  └── package.json        # Server dependencies
```

### Development Workflow

#### Frontend Development

1. Navigate to the project root directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. The dashboard will be available at http://localhost:3000

#### Backend Development

1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. The API will be available at http://localhost:5000/api

### Build Process

#### Frontend Build

```bash
# In the project root
npm run build
```

This creates optimized production files in the `dist` directory.

#### Backend Build

```bash
# In the server directory
cd server
npm run build
```

This compiles TypeScript to JavaScript in the `dist` directory.

### Docker Development

For development with Docker:

```bash
# Build and run all services in development mode
docker-compose -f docker-compose.dev.yml up --build

# Build specific service
docker-compose -f docker-compose.dev.yml build dashboard
docker-compose -f docker-compose.dev.yml build api-server

# Run with hot-reloading
docker-compose -f docker-compose.dev.yml up
```

### Testing

```bash
# Run frontend tests
npm test

# Run backend tests
cd server && npm test

# Run with coverage
npm test -- --coverage
```

### Code Quality

The project uses several tools to maintain code quality:

- **ESLint**: Linting for JavaScript/TypeScript
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks

Run quality checks with:

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run typecheck
```

## Troubleshooting

Common issues and their solutions:

- **API Connection Error**: Verify that the API server is running and that CORS is properly configured
- **Container Access Denied**: Ensure Docker socket permissions are set correctly
- **Resource Metric Missing**: Check that the Docker API version supports stats collection

See [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md) for more details.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## License

MIT
