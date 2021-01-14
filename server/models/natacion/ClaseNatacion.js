const mongoose = require('mongoose');

const ClaseNatacionSchema = mongoose.Schema({
    created_at : {
        type    : Date,
        default : Date.now(),

    },
    updated_at :{
        type: Date,
    },
    horario_clase: {
        type        : Date,
        required    : true,
    },
    descripcion_clase : {
        type : String,
        required : false
    },
    capacidad_clase : {
        type : String, 
        required : true
    },
    profesor_id :{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'ProfesorNatacion',
    },
    active : {
        type        : Boolean,
        default     : true
    }

});


module.exports = mongoose.model('ClaseNatacion', ClaseNatacionSchema);
