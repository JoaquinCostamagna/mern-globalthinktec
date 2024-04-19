import express from "express";
import { getProducts, updateProduct } from "../handlers/products.handler";

/**
 * Express router for handling product routes.
 */
const productsRouter = express.Router();

productsRouter
    /**
     * GET request handler for retrieving products.
     * @route GET /
     * @returns {void}
     */
    .get("/", getProducts)
    /**
     * PUT request handler for updating a product.
     * @route PUT /
     * @returns {void}
     */
    .put("/", updateProduct)

export default productsRouter;