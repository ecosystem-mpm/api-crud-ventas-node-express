import {createConnection, createPool} from 'mysql2';

// Create a pool to avoid the overhead of creating a new connection every time one is needed


const config = createPool({
    host: 'mariadb', // localhost en cada PC
    user: 'cswni',
    password: 'cswni',
    database: 'api_ventas',
    port: 3306,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true,
})

// Validate the connection

config.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
    return;
})


export default config;
