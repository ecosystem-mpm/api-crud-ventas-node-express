//Crear la instancia de express
const express = require('express');

//Cargar la configuracion de la base de datos
const config = require('./config');

//Crear la app de express
const app = express();

//Configurar el puerto
const port = 3000;

//Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});