import mongoose, {Document} from 'mongoose';

const schema = mongoose.Schema;

const logSchema = new schema({
    message: { type: String, required: true },
    level: { type: String, required: true, enum: ['info', 'error', 'warning'] },
    timestamp: { type: Date, required: true }
});


export const LogModel = mongoose.model<Log>('Log', logSchema);

export interface Log extends Document  { 
    message: string,
    level: 'info' | 'error' | 'warning',
    timestamp: Date
}