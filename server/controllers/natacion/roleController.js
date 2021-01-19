const Role = require('../../models/natacion/RoleNatacion');

// GET
exports.getRoles = async( request,response ) => {
    // try {
    //     await Role.find().then(  response.json( { roleGet: roles  } ) );
    // } catch (error) {
    //     console.log(error);
    //     response.status(500).send('Hubo un problema - (get errores) ');
    // }

    Role.find().then( role => {
        response.json(role);
    }).catch(error =>{
        console.log(error);
        response.status(500).send('Hubo un problema - (get errores) ');
    });
}

// POST

exports.createRole = async( request, response ) =>{

    // const errors                = validationResult(request);
    // if( !errors.isEmpty() ) return response.status( 400 ).json( { errors: errors.array() } )
    
    try {
        
        const role    = new Role(request.body);
        await role.save();
        response.json(role);

    } catch (error) {
        console.log(error);
        response.status(400).send('Hubo un error - (post role) ');
    }
}