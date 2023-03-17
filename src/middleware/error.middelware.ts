import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.utils.js';
import { CustomError } from 'utils/error.utils.js';

/**
 * This function is an error middleware that catches custom errors and sends a JSON response to the client.
 * @param {CustomError} err - The error object passed to the middleware.
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction object.
 */
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