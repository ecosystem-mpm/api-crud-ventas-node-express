import { Router } from 'express';

import {
    listarTodosProductos,
    listarProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from '../../controllers/productos/productosController.js';

const productosRouter = Router();

productosRouter.get('/', listarTodosProductos);
productosRouter.get('/:id', listarProductoPorId);

productosRouter.post('/', crearProducto);
productosRouter.put('/:id', actualizarProducto);
productosRouter.delete('/:id', eliminarProducto);

export default productosRouter;