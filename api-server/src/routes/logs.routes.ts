
import express from "express";
import OperationalError from "../utils/OperationalError";
import { LogModel } from "../models/logs";

/**
 * Express router for logs endpoints.
 */
const logsRouter = express.Router();

/**
 * GET / - Get all logs.
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 * @returns A Promise that resolves to an array of logs.
 */
logsRouter.get("/", async (_req, res, next) => {
    try {
        const logs = await LogModel.find();
        res.status(200).send(logs);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
});

export default logsRouter;