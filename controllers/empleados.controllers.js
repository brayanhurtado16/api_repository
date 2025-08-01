const empleado= require('../models/empleados.model');
const empleadosController = {};


//metodo para obtener los empleados
empleadosController.getEmpleados = async (req, res) => {
        const empleados = await empleado.find();
        res.json(empleados);
};


// metodo para obtener un empleado por id
empleadosController.getEmpleado = async (req, res) => {
    const empleadoId = req.params.id;
    const empleadoEncontrado = await empleado.findById(empleadoId);
    if (!empleadoEncontrado) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json(empleadoEncontrado);
};

// metodo para crear un empleado
empleadosController.createEmpleado = async (req, res) => {
    const nuevoEmpleado = new empleado(req.body);
    
        await nuevoEmpleado.save();
        res.json({status: 'empleado creado'});
};

// metodo para actualizar un empleado
empleadosController.updateEmpleado = async (req, res) => {
    const {id} = req.params;
    const datosActualizados = {
        nombre: req.body.nombre,
        position: req.body.position,
        office: req.body.office,
        salario: req.body.salario
    };
    await empleado.findByIdAndUpdate(id, {$set: datosActualizados}, {new: true});
    res.json({status: 'empleado actualizado'});
}

// metodo para eliminar un empleado
empleadosController.deleteEmpleado = async (req, res) => {
    const empleadoId = req.params.id;
    await empleado.findByIdAndDelete(empleadoId);
    res.json({status: 'empleado eliminado'});
}


//exportamos el controlador
module.exports = empleadosController;