import cors from 'cors';
import express, { Express } from 'express';
import routes from '../routes/_index';
import errorMiddleware from '../middlewares/error.middleware';
import loggerMiddleware from '../middlewares/logger.middleware';

/**
 * Creates and configures the Express server.
 * @returns {Express} The configured Express server.
 */
const createServer = () => {
    const app: Express = express();
    // Enable CORS
    app.use(
        cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        })
    );

    // Middleware
    app.use(express.json());
    app.use(loggerMiddleware);

    // Routing
    app.use("/", routes);

    // Error middleware
    app.use(errorMiddleware)
    return app;
}

export default createServer;