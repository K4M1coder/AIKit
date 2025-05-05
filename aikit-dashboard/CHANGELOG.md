# Changelog - AIKit Dashboard React

All notable changes to the modern React dashboard (aikit-dashboard) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-05-06

### Added
- Comprehensive documentation in `/docs` directory
- Detailed installation and configuration guides
- API Reference with complete endpoint documentation
- Troubleshooting guide with common solutions
- Backend server structure documentation
- Table of Contents in README for better navigation
- Cross-linking between React dashboard and classic dashboard implementations
- Direct links to comprehensive documentation

### Improved
- README structure with clear sections and examples
- Component organization documentation
- Development setup instructions for both frontend and backend
- Environment variables documentation
- Docker development workflow documentation
- Updated navigation for better cross-service access
- Optimized dashboard cards for clearer service status

### Fixed
- Corrected GitHub repository references
- Fixed documentation inconsistencies
- Improved documentation formatting for better readability
- Fixed service availability detection
- Improved error handling for unavailable services

## [0.2.0] - 2025-04-15

### Added
- Resource monitoring and threshold alerts for all services
- Concurrent request queue management system
- Error handling with backoff strategies for API calls
- Visual indicators for critical resource levels
- Integration with notification system for resource alerts
- New details page for each service with comprehensive metrics
- Real-time alerts integration for service status changes
- New "About" page with project information
- Advanced container management features

### Improved
- Service monitoring resilience with request queuing
- Resource usage visualization in ServiceStats component
- ServiceCard component with resource status indicators
- Performance for handling multiple service monitoring requests
- Enhanced user interface with Material UI v5.14
- Better management of loading and error states
- Refactored components for better reusability
- Support for switching between simple and advanced views

### Fixed
- Prevented system overload when monitoring many services
- Fixed concurrent request management
- Resolved notification issues for threshold alerts
- Improved error handling during API failures
- Fixed system statistics display
- Resolved auto-refresh issues

## [0.1.0] - 2025-03-25

### Added
- Basic React application architecture with TypeScript
- Core components for service display and management
- Custom hooks for API management and auto-refresh
- Support for real-time resource monitoring of containers
- Controls for managing services (start, stop, restart)
- Initial backend server with Docker socket integration
- Docker configuration for development and production
- Integration with Docker API for container management
- Full React component support for all services in the AIKit stack
- Modern advanced container management capabilities

### Fixed
- Resolved CORS issues with API server
- Fixed memory leaks in auto-refresh hooks
- Improved error handling for Docker API communication
- Resolved intermittent API connection issue