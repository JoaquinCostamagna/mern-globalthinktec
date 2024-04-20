import supertest from 'supertest';
import { ProductModel } from '../src/models/products';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import createServer from '../src/utils/server';

// Create the Express server with no connection to mongo database and not listening to any port
const app = createServer();

// Mock ObjectId for inserting test product data and updating test product data
const mockObjectId = new mongoose.Types.ObjectId();

// Mock product data for testing
const productsMock = [{
    _id: mockObjectId,
    name: 'Product 1',
    description: 'Description 1',
    price_ammount: 10,
    price_currency: 'Dollar',
    image_url: 'image1.jpg'
}]

/**
 * Test suite for the Products API endpoints.
 */
describe('Products', () => {
    // Setup and teardown of the in-memory mock database
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
        await mongoose.connection.createCollection('products');
    })
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    /**
     * Test suite for the GET /products endpoint.
     */
    describe('GET /products', () => {
        /**
         * Test case for the scenario when there are no products.
         */
        describe('given there are no products', () => {
            it('should return an empty list', async () => {
                const result = await supertest(app).get('/products');
                expect(result.body).toBeInstanceOf(Array);
                expect(result.body).toHaveLength(0);
                expect(result.status).toBe(200);
            });
        });

        /**
         * Test case for the scenario when there are products.
         */
        describe('given there are products', () => {
            it('should return a list of products', async () => {
                await ProductModel.create(productsMock);
                const result = await supertest(app).get('/products');
                expect(result.body).toBeInstanceOf(Array);
                expect(result.body).toHaveLength(1);
                expect(result.status).toBe(200);
            });
        });
    });

    /**
     * Test suite for the PUT /products endpoint.
     */
    describe('PUT /products', () => {
        /**
         * Test case for the scenario when a valid product is provided.
         */
        describe('given a valid product', () => {
            it('should update a product', async () => {
                const product = {
                    _id: mockObjectId,
                    name: 'Product 1',
                    description: 'Description 1',
                    price_ammount: 10,
                    price_currency: 'Dollar',
                    image_url: 'image1.jpg'
                };
                const result = await supertest(app).put('/products').send(product);
                expect(result.status).toBe(200);
            });
        });

        /**
         * Test case for the scenario when an invalid product is provided.
         */
        describe('given an invalid product', () => {
            it('should return an error: name is required', async () => {
                const invalidProduct = { ...productsMock, name: null };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/name/);
                expect(result.text).toMatch(/required/);
            });
            it('should return an error: name length < 3', async () => {
                const invalidProduct = { ...productsMock, name: 'Ai' };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/name/);
                expect(result.text).toMatch(/minimum/);
                expect(result.text).toMatch(/length/);
                expect(result.text).toMatch(/3/);
            });
            it('should return an error: name length > 100', async () => {
                const invalidProduct = { ...productsMock, name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies a, proin himenaeos diam ultrices no.' };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/name/);
                expect(result.text).toMatch(/maximum/);
                expect(result.text).toMatch(/length/);
                expect(result.text).toMatch(/100/);
            });
            it('should return an error: description length > 500', async () => {
                const invalidProduct = { ...productsMock, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit massa felis aenean, varius suspendisse arcu dis morbi aptent potenti dapibus scelerisque, fringilla rutrum lacinia volutpat integer praesent dignissim lectus luctus. Condimentum habitasse duis ad maecenas purus laoreet nec, enim sollicitudin auctor praesent pellentesque per velit, sagittis mollis dis risus dictumst tincidunt. A facilisi cursus sollicitudin convallis dui laoreet nisi aptent libero magnis gravida rutrum, nostra erat parturient.' };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/description/);
                expect(result.text).toMatch(/maximum/);
                expect(result.text).toMatch(/length/);
                expect(result.text).toMatch(/500/);
            });
            it('should return an error: price_ammount is required', async () => {
                const invalidProduct = { ...productsMock, price_ammount: null };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/price_ammount/);
                expect(result.text).toMatch(/required/);
            });
            it('should return an error: price_ammount not a number', async () => {
                const invalidProduct = { ...productsMock, price_ammount: 'US$ 5.000' };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/price_ammount/);
                expect(result.text).toMatch(/Number/);
            });
            it('should return an error: price_currency not supported', async () => {
                const invalidProduct = { ...productsMock, price_currency: 'USD' };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/price_currency/);
                expect(result.text).toMatch(/enum/);
            });
            it('should return an error: price_currency is required', async () => {
                const invalidProduct = { ...productsMock, price_currency: null };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/price_currency/);
                expect(result.text).toMatch(/required/);
            });
            it('should return an error: image_url is required', async () => {
                const invalidProduct = { ...productsMock, image_url: null };
                const result = await supertest(app).put('/products').send(invalidProduct);
                expect(result.status).toBe(400);
                expect(result.error).toBeTruthy();
                expect(result.text).toMatch(/image_url/);
                expect(result.text).toMatch(/required/);
            });

        });
    });
});