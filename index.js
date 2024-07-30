// importar librerias
const express = require('express');
const knex = require('./db');
const routes = require('./routes'); // Asegúrate de que tu archivo de rutas se llame routes.js

const app = express();
const port = 3100;

app.use(express.json()); // Configurar tipo de dato JSON
app.use('/api', routes); // Configurar la URL base y rutas

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`); // Corregir mensaje de console.log
});
