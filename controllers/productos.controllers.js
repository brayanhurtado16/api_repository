const producto= require('../models/productos.model');
const productosController = {};

//metodo para obtener los productos
productosController.getProductos = async (req, res) => {
    const productos = await producto.find();
    res.json(productos);
}

// metodo para obtener un producto por id
productosController.getProducto = async (req, res) => {
    const productoId = req.params.id;
    const productoEncontrado = await producto.findById(productoId);
    if (!productoEncontrado) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(productoEncontrado);
};

// metodo para crear un producto
productosController.createProducto = async (req, res) => {
    const nuevoProducto = new producto(req.body);
    
    await nuevoProducto.save();
    res.json({status: 'producto creado'});
}

// metodo para actualizar un producto
productosController.updateProducto = async (req, res) => {
    const {id} = req.params;
    const datosActualizados = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        stock: req.body.stock,
        codigpro: req.body.codigpro
    };
    await producto.findByIdAndUpdate(id, {$set: datosActualizados}, {new: true});
    res.json({status: 'producto actualizado'});
}

// metodo para eliminar un producto
productosController.deleteProducto = async (req, res) => {
    const productoId = req.params.id;
    await producto.findByIdAndDelete(productoId);
    res.json({status: 'producto eliminado'});
}

//exportamos el controlador
module.exports = productosController;