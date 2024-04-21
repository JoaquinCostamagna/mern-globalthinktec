import { NextFunction, Request, Response } from 'express';
import { Product } from '../models/products';
import { ProductModel } from '../models/products';
import OperationalError from '../utils/OperationalError';

/**
 * Retrieves all products from the database.
 * 
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */
export const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductModel.find();
        // Product map that excludes timestamps
        const returnProducts = products.map((product) => {
            return {
                _id: product._id,
                name: product.name,
                description: product.description,
                price_ammount: product.price_ammount,
                price_currency: product.price_currency,
                image_url: product.image_url
            }
        });
        res.status(200).send(returnProducts);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
}

/**
 * Updates a product in the database.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product:Product = req.body;
        await ProductModel.updateOne({_id: product._id}, product, {runValidators: true});
        res.status(200).send(await ProductModel.find({_id: product._id}));
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
}
