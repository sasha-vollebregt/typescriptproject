import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.utils.js';
import { CustomError } from 'utils/error.utils.js';

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Error middleware ${err}`)
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ error: message });
  next(err)
};