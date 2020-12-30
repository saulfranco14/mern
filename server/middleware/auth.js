const jwt = require('jsonwebtoken');


module.exports = function( request, response, next ){

    // Read Tokem from Header
    const token = request.header('x-auth-token');
    
    //API CORS
    request.header("Access-Control-Allow-Origin", '*');
    request.header("Access-Control-Allow-Credentials", true);
    request.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    request.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

    // Review in the token 
    if( !token ){
        return response.status(401).json({ msg: 'Hay un problema con la auth, intente más tarde'});
    }

    // Validate token 
    try {
        const encryption    = jwt.verify(token, process.env.SECRET);
        request.user        = encryption.user;
        next();
    } catch (error) {
        console.log(error);
        response.status(401).json({ msg: 'Expiro o hubo un problema con el auth.'});
    }

}