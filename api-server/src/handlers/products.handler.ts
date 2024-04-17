import { Product } from '../models/products';
import { Products } from '../mocks/products';

export const getProducts = async (): Promise<Product[] | null> => {
    // TODO implement connection with database
    return Products;
}
