import { NextFunction, Request, Response } from "express";
import { LogModel } from "../models/logs";
import OperationalError from "../utils/OperationalError";

/**
 * Error middleware to capture any unhandled error ocurred while processing the request.
 * @param error Error object
 * @param _req Express HTTP Request
 * @param res Express HTTP Response
 * @param _next Express Next Function
 */
const errorMiddleware = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  /*
    Here more error handling logic, like sending an email to the development team, could be added
  */

  // Create message for logging
  const message = `Error ${error.statusCode}: ${error.message}`;
  // Log error on console
  console.error(message);
  // Save error log on database
  const newLog = new LogModel({message: message, level: 'error', timestamp: new Date()});
  newLog.save();

  res.status(error.statusCode).send({
    status: error.status,
    message: error.message,
  });
};

export default errorMiddleware;