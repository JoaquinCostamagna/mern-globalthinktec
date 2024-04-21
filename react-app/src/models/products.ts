// Definition of the Product type
export type Product = { 
    _id: string,
    name: string;
    description: string;
    image_url: string;
    price_ammount: number;
    price_currency: CURRENCY_OPTIONS;
}

enum CURRENCY_OPTIONS {
    Dollar = 'Dollar',
    'Peso Argentino' = 'Peso Argentino'
}

export const getCurrencyOptions = () => Object.values(CURRENCY_OPTIONS);
