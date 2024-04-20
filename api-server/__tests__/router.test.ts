import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import createServer from '../src/utils/server';

// Create the Express server with no connection to mongo database and not listening to any port
const app = createServer();

describe('Routes', () => {
    // Setup and teardown of the in-memory mock database
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
        await mongoose.connection.createCollection('products');
        await mongoose.connection.createCollection('logs');
    })
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });


    describe('GET /products', () => {
        it('should return status 200', async () => {
            const result = await supertest(app).get('/products');
            expect(result.status).toBe(200);
        });
    });

    describe('GET /logs', () => {
        it('should return status 200', async () => {
            const result = await supertest(app).get('/logs');
            expect(result.status).toBe(200);
        });
    });

    describe('GET invalid route', () => {
        it('should return status 404', async () => {
            const result = await supertest(app).get('/invalid');
            expect(result.status).toBe(404);
        });
    });
});