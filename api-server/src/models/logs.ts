import mongoose, { Document } from 'mongoose';

// Define the schema for the log document
const schema = mongoose.Schema;

/**
 * Represents a log document in the database.
 */
const logSchema = new schema({
    /**
     * The log message.
     */
    message: { type: String, required: true },

    /**
     * The log level.
     * Possible values: 'info', 'error', 'warning'.
     */
    level: { type: String, required: true, enum: ['info', 'error', 'warning'] },

    /**
     * The timestamp of when the log was created.
     */
    timestamp: { type: Date, required: true }
});

// Create the LogModel using the logSchema
export const LogModel = mongoose.model<Log>('Log', logSchema);

/**
 * Represents a log document with additional properties from the Mongoose Document interface.
 */
export interface Log extends Document {
    message: string,
    level: 'info' | 'error' | 'warning',
    timestamp: Date
}