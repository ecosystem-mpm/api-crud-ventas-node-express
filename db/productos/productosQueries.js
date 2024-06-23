import config from '../../config.js';

/**
 * Carga la lista de productos (en este ejemplo solo 10 productos)
 */
const listarTodosProductosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM productos LIMIT 0,10', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un producto por su ID (llave primaria)
 * @param {number} id
 * @returns 
 */
const listarProductoPorIdQuery = (id) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM productos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};


/**
 * Guardar un nuevo producto
 * @param {datos del producto} producto 
 * @returns 
 */
const crearProductoQuery = async (producto) => {
    const { nombre, codigo, precio, disponible } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO productos (nombre, codigo, precio, disponible) VALUES (?, ?, ?, ?)';
        config.query(sql, [nombre, codigo, precio, disponible], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * 
 * @param {id del producto a modificar} id 
 * @param {datos del producto actualizados } producto 
 * @returns 
 */
const actualizarProductoQuery = (id, producto) => {
    const { nombre, codigo, precio, disponible } = producto;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE productos SET nombre = ?, codigo = ?, precio = ?, disponible = ? WHERE id = ?';
        config.query(sql, [nombre, codigo, precio, disponible, id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un producto por su ID
 * @param {id del producto a eliminar} id 
 * @returns 
 */
const eliminarProductoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM productos WHERE id = ?';
        config.query(sql, [id], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosProductosQuery,
    listarProductoPorIdQuery,
    crearProductoQuery,
    actualizarProductoQuery,
    eliminarProductoQuery   
}
