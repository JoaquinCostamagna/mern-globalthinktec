import { NextFunction, Request, Response } from 'express';
import OperationalError from '../utils/OperationalError';
import { LogModel } from '../models/logs';

/**
 * Retrieves last logs from the database.
 * 
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */
export const getLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fetchCount = Number(req.query.count) || 20;
        const logs = await LogModel.find().sort({ timestamp: -1 }).limit(fetchCount);
        res.status(200).send(logs);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
}