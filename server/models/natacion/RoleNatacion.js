const mongoose = require('mongoose');

const RoleNatacionSchema = mongoose.Schema({
    created_at : {
        type    : Date,
        default : Date.now(),

    },
    updated_at :{
        type: Date,
    },
    nombre_rol :{
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : false,
    },
    active : {
        type        : Boolean,
        default     : true,
    }
});

module.exports = mongoose.model('RoleNatacion', RoleNatacionSchema);