import { Request, Response, NextFunction } from 'express';
import { Service } from '../types/service';

// Extend the Express Request type to include the service property
declare global {
  namespace Express {
    interface Request {
      service?: Service;
    }
  }
}

export const validateService = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  // Since we don't have direct access to DockerService here (to avoid circular dependencies),
  // we'll just validate that the ID is provided and let the controller handle the actual service lookup
  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Service ID is required',
      code: 'SERVICE_ID_REQUIRED'
    });
  }

  next();
};