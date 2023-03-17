import { expressjwt } from 'express-jwt';
import { config } from '../config/config.js';

const SECRET_KEY = config.SECRET_KEY || '';

export const authMiddleware = expressjwt({
  secret: SECRET_KEY,
  algorithms: ['HS256'],
});
