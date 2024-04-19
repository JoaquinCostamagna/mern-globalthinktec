import mongoose from 'mongoose';

/**
 * The connection string for MongoDB.
 */
const connectionString: string = process.env.ME_CONFIG_MONGODB_URL as string;

console.log('Connecting to DataBase...');
mongoose.connect(connectionString, {})
    .then((db) => { 
        console.log(`DataBase conenction established with ${db.connection.host}`);
    })
    .catch((error) => { console.error(`Connection Error: ${error}`) });

export const db = mongoose.connection;