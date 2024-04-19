import { NextFunction, Request, Response } from "express";
import { LogModel } from "../models/logs";

/**
 * Error middleware to capture any unhandled error ocurred while processing the request.
 * @param error Error object
 * @param _req Express HTTP Request
 * @param res Express HTTP Response
 * @param _next Express Next Function
 */
export const errorMiddleware = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  const message = `Error ${error.statusCode}: ${error.message}`;
  console.error(message);
  const newLog = new LogModel({message: message, level: 'error', timestamp: new Date()});
  newLog.save();
  res.status(error.statusCode).send({
    status: error.status,
    message: error.message,
  });
};
