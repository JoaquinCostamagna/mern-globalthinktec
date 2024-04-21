
import express from "express";
import OperationalError from "../utils/OperationalError";
import { LogModel } from "../models/logs";
import { getLogs } from "../handlers/logs.handler";

/**
 * Express router for logs endpoints.
 */
const logsRouter = express.Router();

/**
 * GET / - Get logs.
 */
logsRouter.get("/", getLogs);

export default logsRouter;