import mongoose from 'mongoose';

const connectionString: string = 'mongodb://mongo:27017/mern-globalthinktec';

mongoose.connect(connectionString, {})
    .then(() => { console.log('Conexión a la base de datos establecida') })
    .catch((error) => { console.error(`Error de conexión: ${error}`) });


const db = mongoose.connection;

module.exports = db;