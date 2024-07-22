import { Router } from 'express';
import verifyToken from '../middleware.js';
import {
    listarTodosProductos,
    listarProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from '../../controllers/productos/productosController.js';

const productosRouter = Router();

productosRouter.use(verifyToken);

productosRouter.get('/', listarTodosProductos);
productosRouter.get('/:id', listarProductoPorId);

productosRouter.post('/', crearProducto);
productosRouter.put('/:id', actualizarProducto);
productosRouter.delete('/:id', eliminarProducto);

export default productosRouter;
