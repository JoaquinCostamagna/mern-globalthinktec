import express from "express";
import { getProducts, updateProduct } from "../handlers/products.handler";

const productsRouter = express.Router();

productsRouter
    .get("/", getProducts)
    .put("/", updateProduct)

export default productsRouter;