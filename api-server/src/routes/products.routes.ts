import express from "express";
import { getProducts, updateProduct } from "../handlers/products.handler";
import { Product } from "../models/products";

const productsRouter = express.Router();

productsRouter.get("/getAll", async (_req, res, next) => {
    try {
        const products = await getProducts();
        res.status(200).send(products);
    } catch (error) {
        console.log(error)
        next();
    }
});

productsRouter.post("/updateProduct",  async (req, res, next) => {
    try {
        const product: Product = req.body;
        await updateProduct(product);
        res.status(200).send("Product updated");
    } catch (error) {
        next();
    }
});

export default productsRouter;