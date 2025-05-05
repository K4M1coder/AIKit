import { Request, Response, NextFunction } from 'express';
import { DockerService } from '../services/DockerService';

export const validateService = (dockerService: DockerService) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const service = await dockerService.getService(id);
      
      if (!service) {
        return res.status(404).json({
          error: `Service '${id}' not found`,
          code: 'SERVICE_NOT_FOUND'
        });
      }

      // Attach the service to the request for use in route handlers
      req.service = service;
      next();
    } catch (error) {
      next(error);
    }
  };
};