
import express from "express";
import OperationalError from "../utils/OperationalError";
import { LogModel } from "../models/logs";

const logsRouter = express.Router();

logsRouter.get("/getAll", async (_req, res, next) => {
    try {
        const logs = await LogModel.find();;
        res.status(200).send(logs);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
});

export default logsRouter;