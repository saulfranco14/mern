const express       = require('express');
const http          = require('http');
const connectionDB  = require('./config/db');
const cors          = require('cors');

//crea el servidor
const app           = express();
const server    = http.createServer(app);


//conectar a la BD
connectionDB();

// CORS
server.use( cors() );

// Habilitar express.json
server.use( express.json({
    extended : true
}));

// puerto Server
const port = process.env.port || 4000;

/***************** USERS ************************/
app.use('/api/users', require('./routes/users') );
/***************** AUTH ************************/
app.use('/api/auth', require('./routes/auth') );
/***************** PROJECTS ************************/
app.use('/api/projects', require('./routes/projects') );
/***************** PROJECTS ************************/
app.use('/api/tasks', require('./routes/tasks') );

// start server 
server.listen(port,'0.0.0.0', ()=>{
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
})


server.get('/', ( req, res ) =>{ 
    res.send("Página principal de server")
});