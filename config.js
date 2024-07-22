import {createPool} from 'mysql2';

const configBase = createPool({
    host: 'mariadb', // localhost en cada PC / mariadb
    user: 'cswni',
    password: 'cswni',
    database: 'api_ventas',
    port: 3306,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true,
})

configBase.getConnection((err, connection) => {
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
})

const config = {
    ...configBase,
    query: (sql, params, callback) => {
        // Log the SQL query and its parameters
        console.log(`Executing query: ${sql} with parameters: ${JSON.stringify(params)}`);

        // Call the original query function
        configBase.query(sql, params, callback);
    }
};

export default config;
