import { expressjwt } from 'express-jwt';
import { config } from '../config/config.js';

const SECRET_KEY = config.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('No secret key defined in config');
}

export const authMiddleware = expressjwt({
  secret: SECRET_KEY,
  algorithms: ['HS256'],
  getToken: (req) => req.headers.authorization?.split(' ')[1],
});
