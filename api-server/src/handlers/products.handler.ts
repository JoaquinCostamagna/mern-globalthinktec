import { NextFunction, Request, Response } from 'express';
import { Product } from '../models/products';
import { ProductModel } from '../models/products';
import OperationalError from '../utils/OperationalError';

export const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product:Product = req.body;
        await ProductModel.updateOne({_id: product._id}, product);
        res.status(200).send(await ProductModel.find());
    } catch (err: any) {
        const error = new OperationalError(err.message, 400);
        next(error);
    }
}
