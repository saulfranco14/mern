const mongoose = require('mongoose');

const ClaseUsuarioSchema = mongoose.Schema({
    created_at : {
        type    : Date,
        default : Date.now(),

    },
    updated_at :{
        type: Date,
    },
    clase : {
        type : Date,
        required : true,
    },
    profesor_id :{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'ProfesorNatacion',
    },
    user_id :{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'UsuarioNatacion',
    },
    active : {
        type        : Boolean,
        default     : true
    }
});

module.exports = mongoose.model('ClaseUsuario',ClaseUsuarioSchema);