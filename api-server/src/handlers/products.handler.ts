import { Product } from '../models/products';
import { Products } from '../mocks/products';
import { ProductModel } from '../models/products';

export const getProducts = async (): Promise<any[] | null> => {
    // TODO implement connection with database
    console.log('entra')
    try{
        const products = await ProductModel.find();
        return products;
    } catch (error) {
        console.log(error)
        return null;
    }
}


export const updateProduct = async (product: Product): Promise<Product | undefined> => {
    // TODO implement connection with database
    console.log(product)
    const productModel = new ProductModel(product);
    // productModel.save((err: any) => {
    //     if (err) {
    //         throw new Error(err.message);
    //     }
    //     return product;
    // });
    return product;
}
