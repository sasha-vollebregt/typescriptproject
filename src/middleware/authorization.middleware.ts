import { Request, Response, NextFunction } from 'express';
import { expressjwt } from 'express-jwt';
import { config } from '../config/config.js';
import { logger } from '../utils/logger.utils.js';

const SECRET_KEY = config.SECRET_KEY || '';

export const authMiddleware = expressjwt({
  secret: SECRET_KEY,
  algorithms: ['HS256'],
});
