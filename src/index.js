const express = require( "express" );
const app = express();
const port = 8080; // default port to listen

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

