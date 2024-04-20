import mongoose, {Document} from 'mongoose';

const schema = mongoose.Schema;

/**
 * Represents the schema for a product.
 */
const productSchema = new schema({
        name: { type: String, required: true, minLength: 3, maxLength: 100},
        description: { type: String, required: false, maxLength: 500},
        image_url: { type: String, required: true },
        price_ammount: { type: Number, required: true },
        price_currency: { type: String, required: true, enum: ['Dollar', 'Peso Argentino'] }
    },
    {
        timestamps: true,
        collection: 'products',
        runValidators: true       
    },
);

// Create the ProductModel using the productSchema
export const ProductModel = mongoose.model<Product>('Product', productSchema);

/**
 * Represents a product with additional mongoose Document properties.
 */
export interface Product extends Document {
    name: string;
    description: string;
    image_url: string;
    price_ammount: number;
    price_currency: 'Dollar' | 'Peso Argentino';
}