import {
  listarTodosProductosQuery,
  listarProductoPorIdQuery,
  crearProductoQuery,
  actualizarProductoQuery,
  eliminarProductoQuery
} from "../../db/productos/productosQueries.js";

/**
 * Obtener todos los productos de la base de datos
 */
const listarTodosProductos = async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const productos = await listarTodosProductosQuery();
    res.json(productos);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Obtener el producto con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const listarProductoPorId = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const producto = await listarProductoPorIdQuery(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un producto
 */
const crearProducto = async (req, res) => {
  console.log(req.body)
  try {
      const datosProducto = req.body;
      const resultado = await crearProductoQuery(datosProducto);
      res.json({ mensaje: 'Producto creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un producto
 */
const actualizarProducto = async (req, res) => {
  try {
      const id = req.params.id;
      const datosProducto = req.body;
      const resultado = await actualizarProductoQuery(id, datosProducto);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto actualizado con éxito', id: id });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un producto
 */
const eliminarProducto = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await eliminarProductoQuery(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'Producto eliminado con éxito' });
      } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el producto', error: error.message });
  }
};

export {
  listarTodosProductos,
  listarProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
