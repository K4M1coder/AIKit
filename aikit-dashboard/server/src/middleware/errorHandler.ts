import { Request, Response, NextFunction } from 'express';

interface ApiError extends Error {
  statusCode?: number;
  code?: string;
}

export const errorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  const code = error.code || 'INTERNAL_ERROR';

  // Log the error (in production you might want to use proper logging)
  console.error(`[Error] ${code}: ${message}`);

  res.status(statusCode).json({
    error: message,
    code,
    path: req.path,
  });
};