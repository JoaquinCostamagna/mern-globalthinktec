import express from "express";
import { getProducts } from "../handlers/products.handler";

const productsRouter = express.Router();

productsRouter.get("/", async (_req, res, next) => {
    try {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (error) {
        next();
    }
});

export default productsRouter;