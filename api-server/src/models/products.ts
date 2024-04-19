import mongoose from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    image_url: { type: String, required: true },
    price_ammount: { type: Number, required: true },
    price_currency: { type: String, required: true, enum: ['Dollar', 'Peso Argentino'] }
});

export const ProductModel = mongoose.model('Product', productSchema);

export type Product = { 
    id: number;
    name: string;
    description: string;
    image_url: string;
    price_ammount: number;
    price_currency: 'Dollar' | 'Peso Argentino';
}