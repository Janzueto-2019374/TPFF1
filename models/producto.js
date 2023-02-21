const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria' ]
    },
    precio: {
        type: String,
        required: [true, 'El precio es obligatorio' ]
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Producto', ProductoSchema);