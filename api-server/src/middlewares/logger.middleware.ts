import { NextFunction, Request, Response } from "express";
import { LogModel } from "../models/logs";

const loggerMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    let message = `[${new Date().toLocaleTimeString()}] | METHOD: ${req.method} | URL: ${req.url}`;
    if (Object.keys(req.body).length) message += ` | BODY: ${JSON.stringify(req.body)}`;
    if (Object.keys(req.params).length) message += ` | PARAMS: ${JSON.stringify(req.params)}`;
    console.log(message);
    const newLog = new LogModel({message: message, level: 'info', timestamp: new Date()});
    newLog.save();
    next();
}

export default loggerMiddleware;