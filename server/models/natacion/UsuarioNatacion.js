const mongoose = require('mongoose');

const UsuarioNatacionSchema = mongoose.Schema({
    created_at : {
        type    : Date,
        default : Date.now(),

    },
    updated_at :{
        type: Date,
    },
    nombre_usuario : {
        type : String, 
        required : true,
        trim: true,
    },
    apellido_paterno_usuario : {
        type : String, 
        required : true,
        trim: true,
    },
    apellido_materno_usuario : {
        type : String, 
        required : true,
        trim: true,
    },
    telefono_cel_usuario : {
        type : String,
        required : true,
    },
    email_usuario : {
        type : String,
        trim : true,
    },
    peso_usuario : {
        type : String,
    },
    imc_usuario : {
        type : String,
    },
    alergia_usuario : {
        type : String,
    },
    sexo : {
        type : String,
    },
    fecha_nacimiento_usuario : {
        type : Date,
    },
    certificado_usuario : {
        type : Boolean,
    },
    acta_nacimiento_usuario : {
        type : Boolean,
    },
    active : {
        type        : Boolean,
        default     : true,
    }
    
});

module.exports = mongoose.model('UsuarioNatacion', UsuarioNatacionSchema)