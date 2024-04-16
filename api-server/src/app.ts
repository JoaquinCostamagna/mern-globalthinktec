import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.listen(5000, () => {
    console.log('Server corriendo en puerto 5000');
});