const {timeStamp} = require('console');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const productosSchema = new Schema({
    nombre: {type: String, required: [true, 'el nombre del producto es obligatorio'],
        trim: true},
        
    precio: {type: Number, required: [true, 'el precio del producto es obligatorio'],
        min: [0, 'el precio debe ser mayor que 0']},

    categoria: {type: String, required: [true, 'la categoria del producto es obligatoria'],
        trim: true},

    stock: {type: Number, required: [true, 'el stock del producto es obligatorio'],
        min: [0, 'el stock debe ser mayor o igual que 0']},

    codigpro: {type: Number, required: [true, 'el codigo del producto es obligatorio'],
        trim: true,
        unique: true},


    },
    { timeStamp:true,  versionKey: false}

);
module.exports = mongoose.model('productos', productosSchema);