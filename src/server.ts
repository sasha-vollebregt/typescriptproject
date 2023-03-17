import express, { Express, Request, Response } from 'express';
import {authMiddleware} from './middleware/authorization.middleware.js';
import {errorHandler} from './middleware/error.middelware.js';
import { config } from './config/config.js';
import { logger } from './utils/logger.utils.js';

const app: Express = express();
const PORT = config.PORT;

app.use(authMiddleware);

app.get('/', (req: Request, res: Response) => {
  console.log('Enter')
  res.send('Express + TypeScript Server');
});

app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});