const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/signos.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

const corsOptions = {
    origin: '*',  // Permitir acceso desde cualquier origen, pero en producción, ajusta a los dominios permitidos
    methods: ['GET', 'HEAD', 'PATCH', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Aplicamos CORS con las opciones definidas
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("hola mundo");
});

// Rutas
app.use('/api', router);

// Servidor en escucha
app.listen(4001, () => {
    console.log('Listening at port 4001');
});
