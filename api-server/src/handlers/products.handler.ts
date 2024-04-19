import { Product } from '../models/products';
import { ProductModel } from '../models/products';

export const getProducts = async (): Promise<any[] | null> => {
    const products = await ProductModel.find();
    return products;
}

export const updateProduct = async (product: Product): Promise<Product | undefined> => {
    await ProductModel.updateOne({_id: product._id}, product);
    return await ProductModel.findById(product._id) as Product;
}
