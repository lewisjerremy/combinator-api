import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/error.util';

export function errorMiddleware(
  err: APIError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { code, message } = err;
  res.status(code).json({ error: message });
  next();
}
