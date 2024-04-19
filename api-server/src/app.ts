import cors from 'cors';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/_index';
import { errorMiddleware } from './middlewares/error.middleware';
import loggerMiddleware from './middlewares/logger.middleware';


const app: Express = express();
dotenv.config();
const PORT = process.env.PORT;
const db = require('./connections/mongoDb');

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
    console.log(`Server corriendo en puerto ${PORT}`);
});
