const express= require('express');
const router = express.Router();

const empleadosController = require('../controllers/empleados.controllers');


router.get('/', empleadosController.getEmpleados); // Obtener todos los empleados
router.get('/:id', empleadosController.getEmpleado); // Obtener un empleado por ID
router.post('/', empleadosController.createEmpleado); // Crear un nuevo empleado
router.put('/:id', empleadosController.updateEmpleado); // Actualizar un empleado por ID
router.delete('/:id', empleadosController.deleteEmpleado); // Eliminar un empleado por ID

module.exports = router; // Exportar el router para usarlo en la aplicación principal