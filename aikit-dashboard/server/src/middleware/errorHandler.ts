import { Request, Response, NextFunction } from 'express';

// Enhanced error handler with detailed error information
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('API Error:', {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: err.stack
  });
  
  // Send detailed error information in development, less in production
  res.status(500).json({
    success: false,
    message: err.message,
    path: req.path,
    method: req.method,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};