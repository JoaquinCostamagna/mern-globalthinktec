/**
 * Express router for handling API routes.
 * @module routes
 */

import express from "express"
import productsRouter from "./products.routes";
import OperationalError from "../utils/OperationalError";
import logsRouter from "./logs.routes";
// Create the Express router
const routes = express.Router();
// Define the routes and their specific internal routers
routes.use("/products", productsRouter);
routes.use("/logs", logsRouter);
// Handle invalid routes
routes.use("*", (req, _res, next) => {
    const error = new OperationalError(`No se encontró la ruta ${req.originalUrl} en el servidor.`, 404);
    next(error);
});

export default routes;