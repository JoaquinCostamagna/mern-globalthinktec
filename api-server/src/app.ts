import cors from 'cors';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/_index';
import { errorMiddleware } from './middlewares/error.middleware';
import { db } from './connections/mongoDb';


const app: Express = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
    ));


//get all collections from db connections
db.listCollections().then(collections => {
    console.log('Collecciones de la base de datos');
    console.log(collections)
});

// Middleware
app.use(express.json());

app.use("/", routes);

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`);
});
