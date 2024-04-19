import { NextFunction, Request, Response } from "express";

/**
 * Error middleware to capture any unhandled error ocurred while processing the request.
 * @param error Error object
 * @param _req Express HTTP Request
 * @param res Express HTTP Response
 * @param _next Express Next Function
 */
export const errorMiddleware = async (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { statusCode, data } = processUnhandledError(error);
  res.status(statusCode).send(data);
};

const processUnhandledError = (error: any) => {
  // TODO implement error handling
  console.log(error);
  let statusCode = 500;
  let data = {
    message: "Internal Server Error",
  };

  if (error instanceof Error) {
    data = {
      message: error.message,
    };
  }

  return { statusCode, data };
}
