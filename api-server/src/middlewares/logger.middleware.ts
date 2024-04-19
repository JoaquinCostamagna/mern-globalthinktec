/**
 * Middleware function that logs information about incoming requests and saves the log to the database.
 * @param req - The Express Request object.
 * @param _res - The Express Response object.
 * @param next - The next middleware function.
 */
import { NextFunction, Request, Response } from "express";
import { LogModel } from "../models/logs";

const loggerMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    // Create message for logging
    let message = `[${new Date().toLocaleTimeString()}] | METHOD: ${req.method} | URL: ${req.url}`;
    if (Object.keys(req.body).length) message += ` | BODY: ${JSON.stringify(req.body)}`;
    if (Object.keys(req.params).length) message += ` | PARAMS: ${JSON.stringify(req.params)}`;
    // Log message on console
    console.log(message);
    // Save log to database
    const newLog = new LogModel({message: message, level: 'info', timestamp: new Date()});
    newLog.save();
    // Call the next middleware function
    next();
}

export default loggerMiddleware;