import express from "express"
import productsRouter from "./products.routes";
import OperationalError from "../utils/OperationalError";
import logsRouter from "./logs.routes";

const routes = express.Router();

routes.use("/products", productsRouter);
routes.use("/logs", logsRouter);

routes.use("*", (req, res, next) => {
    const error = new OperationalError(`No se encontró la ruta ${req.originalUrl} en el servidor.`, 404);
    next(error);
});

export default routes;