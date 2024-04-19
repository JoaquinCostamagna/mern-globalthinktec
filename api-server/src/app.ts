/**
 * This file represents the main application file for the API server.
 * It sets up the Express server, middleware, routing, and error handling.
 */
import cors from 'cors';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/_index';
import { errorMiddleware } from './middlewares/error.middleware';
import loggerMiddleware from './middlewares/logger.middleware';

// Create the Express server
const app: Express = express();
// Load environment variables
dotenv.config();
const PORT = process.env.PORT;
// Connect to mongoDb database
const db = require('./connections/mongoDb');
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

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
