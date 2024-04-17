import express from "express"

import productsRouter from "./products.routes";

const routes = express.Router();

routes.use("/products", productsRouter);

export default routes;