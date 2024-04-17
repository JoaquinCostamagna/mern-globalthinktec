export type Product = { 
    id: number;
    name: string;
    description: string;
    image_url: string;
    price_ammount: number;
    price_currency: 'Dollar' | 'Peso Argentino';
}