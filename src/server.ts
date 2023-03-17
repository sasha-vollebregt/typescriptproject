import express, { Express, Request, Response } from 'express';
import {authMiddleware} from './middleware/authorization.middleware.js';
import {errorHandler} from './middleware/error.middelware.js';
import { config } from './config/config.js';
import { logger } from './utils/logger.utils.js';

// Create the Express app
const app: Express = express();
const PORT = config.PORT;

// Use the authorization middleware for all routes
app.use(authMiddleware);

// Define a route for the root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Use the error middleware for all routes
app.use(errorHandler);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});