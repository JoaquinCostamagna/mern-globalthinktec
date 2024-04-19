import express from "express";
import { getProducts, updateProduct } from "../handlers/products.handler";
import { Product } from "../models/products";
import OperationalError from "../utils/OperationalError";

const productsRouter = express.Router();

productsRouter.get("/getAll", async (_req, res, next) => {
    try {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
});

productsRouter.post("/updateProduct",  async (req, res, next) => {
    try {
        const product: Product = req.body;
        const newProduct = await updateProduct(product);
        res.status(200).send(newProduct);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
});

export default productsRouter;