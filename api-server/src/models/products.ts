import mongoose, {Document} from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    image_url: { type: String, required: true },
    price_ammount: { type: Number, required: true },
    price_currency: { type: String, required: true, enum: ['Dollar', 'Peso Argentino'] }
});


export const ProductModel = mongoose.model<Product>('Product', productSchema);

export interface Product extends Document  { 
    name: string;
    description: string;
    image_url: string;
    price_ammount: number;
    price_currency: 'Dollar' | 'Peso Argentino';
}