const mysql = require('mysql2');

const config = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'carlos2024',
    database: 'ventas_api',
    port: 3306
})

//Validar la conexión a la base de datos
config.connect(function (err) {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa con el id ' + config.threadId);
})


module.exports = config;