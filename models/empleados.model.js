const { timeStamp } = require('console');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const empleadosSchema = new Schema({
    nombre: {type: String, required: [true,'el nombre es obligatorio'],
        trim:true
    },
    position: {type: String, required: [true,'la posicion es obligatoria']
        , trim:true
    },
    office: {type: String, required: [true,'el office es obligatorio']
        , trim:true
    },

    salario: {type: Number, required: [true,'el salario es obligatorio'], 
        min: [0, 'el salario debe ser mayor que 0']}

}, 

{ timeStamp:true,  versionKey: false}
);
 module.exports = mongoose.model('empleados', empleadosSchema);