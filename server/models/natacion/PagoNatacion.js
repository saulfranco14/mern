const mongoose = require('mongoose');

const PagoNatacionSchema = mongoose.Schema({
    created_at : {
        type    : Date,
        default : Date.now(),

    },
    updated_at :{
        type: Date,
    },
    concepto :{
        type : String,
        required : true,
    },
    etiqueta : {
        type : String,
        required : false,
    },
    costo : {
        type : String,
        required : true,
    },
    user: {
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'User',
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

module.exports = mongoose.model('PagoNatacion', PagoNatacionSchema);