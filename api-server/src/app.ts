/**
 * This file represents the main application file for the API server.
 * It sets up the Express server, middleware, routing, and error handling.
 */
import dotenv from 'dotenv';
import createServer from './utils/server';

// Create the Express server
const app = createServer();
// Load environment variables
dotenv.config();
const PORT = process.env.PORT;
// Connect to mongoDb database
require('./connections/mongoDb');

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
