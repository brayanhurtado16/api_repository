const express= require('express');
const router = express.Router();

const productosController = require('../controllers/productos.controllers');

router.get('/', productosController.getProductos); // Obtener todos los productos
router.get('/:id', productosController.getProducto); // Obtener un producto por ID
router.post('/', productosController.createProducto); // Crear un nuevo producto
router.put('/:id', productosController.updateProducto); // Actualizar un producto por ID    
router.delete('/:id', productosController.deleteProducto); // Eliminar un producto por ID


module.exports = router; // Exportar el router para usarlo en la aplicación principal