
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ProductModel } from '../models/products';
import mongoose from 'mongoose';

// Products Mock Data
const Products = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        description: "Potente laptop con pantalla InfinityEdge y procesador Intel Core i7.",
        image_url: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg",
        price_ammount: 1200,
        price_currency: 'Dollar'
    },
    {
        id: 2,
        name: "Smartphone iPhone 13 Pro",
        description: "Último modelo de iPhone con pantalla ProMotion y triple cámara.",
        image_url: "https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg",
        price_ammount: 1100,
        price_currency: 'Dollar'
    },
    {
        id: 3,
        name: "Zapatillas Nike Air Max",
        description: "Zapatillas deportivas con tecnología Air Max para una máxima comodidad.",
        image_url: "https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-moda-hierba-cesped-estilo.jpeg",
        price_ammount: 150000,
        price_currency: 'Peso Argentino'
    },
    {
        id: 4,
        name: "Libro: El Alquimista",
        description: "Una inspiradora novela de Paulo Coelho sobre el viaje de autodescubrimiento.",
        image_url: "https://tienda.planetadelibros.com.ar/cdn/shop/files/Elalquimista.TD_Fte.jpg?v=1698274498",
        price_ammount: 20000,
        price_currency: 'Peso Argentino'
    },
    {
        id: 5,
        name: "Cámara Canon EOS Rebel T7i",
        description: "Cámara réflex digital con sensor CMOS de 24.2 megapíxeles y Wi-Fi integrado.",
        image_url: "https://images.pexels.com/photos/15253216/pexels-photo-15253216/free-photo-of-camara-canon-artilugio-eos.jpeg",
        price_ammount: 600,
        price_currency: 'Dollar'
    },
    {
        id: 6,
        name: "TV Samsung QLED 4K 55 Pulgadas",
        description: "Televisor con tecnología QLED y resolución 4K para una experiencia de visualización excepcional.",
        image_url: "https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg",
        price_ammount: 800000,
        price_currency: 'Peso Argentino'
    },
    {
        id: 7,
        name: "Cafetera Nespresso VertuoPlus",
        description: "Máquina de café con tecnología Centrifusion para preparar café espresso y lungo con un solo toque.",
        image_url: "https://images.pexels.com/photos/8271926/pexels-photo-8271926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price_ammount: 150000,
        price_currency: 'Peso Argentino'
    },
    {
        id: 8,
        name: "Juego de Sartenes Antiadherentes",
        description: "Set de sartenes con revestimiento antiadherente para una cocina sin complicaciones.",
        image_url: "https://images.pexels.com/photos/21077136/pexels-photo-21077136/free-photo-of-llamas-en-la-cocina.jpeg",
        price_ammount: 50000,
        price_currency: 'Peso Argentino'
    },
    {
        id: 9,
        name: "Bicicleta de Montaña Trek Marlin 5",
        description: "Bicicleta versátil para senderos y aventuras en la montaña con cuadro de aluminio ligero.",
        image_url: "https://images.pexels.com/photos/18929348/pexels-photo-18929348/free-photo-of-vehiculo-parque-pasarela-gigante.jpeg",
        price_ammount: 450,
        price_currency: 'Dollar'
    },
    {
        id: 10,
        name: "Altavoz Bluetooth JBL Flip 5",
        description: "Altavoz portátil resistente al agua con sonido potente para tus fiestas al aire libre.",
        image_url: "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg",
        price_ammount: 120000,
        price_currency: 'Peso Argentino'
    },
];

export const connectToLocalMongo = async () => {
    const mongoServer = await MongoMemoryServer.create();
    const db = await mongoose.connect(mongoServer.getUri());
    await mongoose.connection.createCollection('products');
    await ProductModel.create(Products)
    console.log(`Connected to local MongoDB: ${db.connection.host}`);
};

