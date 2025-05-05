# Changelog - AIKit Self-hosted AI Toolkit

All notable changes to the AIKit project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-05-06

### Added
- New n8n workflow templates for AI agent automation
- Added configuration examples for multi-GPU setups
- Sample Jupyter notebooks for AI toolkit integration

### Improved
- Repository structure with better organization of components
- Updated GitHub repository references
- Optimized Docker Compose configuration for better stability
- Enhanced startup sequence for dependent services

### Fixed
- Resolved conflicts between services during initialization
- Fixed inconsistent GitHub repository references
- Improved error handling during service startup
- Addressed compatibility issues with latest Docker versions

## [1.3.0] - 2025-03-20

### Added
- Support for AMD GPUs with the `gpu-amd` profile
- Integration with ElasticSearch/Kibana/Logstash for centralized logging
- Example Jupyter notebooks for AI model integration
- Added dashboard service for monitoring AIKit components

### Improved
- Updated Ollama to the latest version with Llama 3.2 support
- Performance optimizations for resource-constrained instances
- Better Docker volume management for persistent data
- Enhanced service discovery between containers

### Fixed
- Resolved n8n connection issue with Postgres database
- Fixed access rights for shared volumes
- Fixed Qdrant initialization issue
- Improved environment variable handling across platforms

## [1.2.0] - 2025-02-15

### Added
- Integration of CrewAI Studio for AI agent orchestration
- Support for GitIngest for code analysis and vectorization
- Added ComfyUI for image and video generation
- Support for docker compose profiles for different hardware configurations

### Improved
- Updated core components to the latest versions
- Optimized Docker volumes for better persistence
- Enhanced container networking for more reliable connections
- Improved service startup order dependencies

### Fixed
- Resolved connectivity issues between Ollama and Open WebUI
- Fixed environment variables for cross-platform compatibility
- Improved startup sequences for interdependent services
- Fixed volume mount issues on certain host systems

## [1.1.0] - 2025-01-25

### Added
- Support for workflow automation with n8n custom tools
- Additional Flowise example workflows
- Extended Jupyter notebook examples
- Added service documentation for each component

### Improved
- Updated core components to the latest versions
- More comprehensive user documentation
- Better integration between n8n and Ollama
- Optimized container resource limits

### Fixed
- Resolved connectivity issues between services
- Fixed environment variables for cross-platform compatibility
- Improved container restart policies
- Fixed network routing between containers

## [1.0.0] - 2025-01-10

### Added
- Initial fork of the repository
- Added additional AI services to the stack: Ollama, Flowise, Qdrant
- Updated README with comprehensive setup instructions
- Docker Compose configuration for easy deployment
- Initial user documentation

### Fixed
- Stabilized inter-service connections
- Resolved startup issues on different platforms
- Fixed volume permissions for data persistence
- Improved Docker network configuration