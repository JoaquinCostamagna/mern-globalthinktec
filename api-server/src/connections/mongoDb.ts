import mongoose from 'mongoose';

const connectionString: string = process.env.MONGODB_URI || 'mongodb://mongo/mern-globalthinktec';

console.log('Conectando a la Base de Datos');
mongoose.connect(connectionString, {})
    .then((db) => { console.log(`Conexión a la base de datos establecida con ${db.connection.host}`) })
    .catch((error) => { console.error(`Error de conexión: ${error}`) });


export const db = mongoose.connection;