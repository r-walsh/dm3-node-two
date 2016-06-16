const express = require( 'express' );
const { json } = require( 'body-parser' );
// var json = require( 'body-parser' ).json;
const masterRoutes = require( './server/masterRoutes' );
const movieCtrl = require( './server/movies/movieCtrl' );
const app = express();
const port = 8080;

app.use( json() );
app.use( movieCtrl.checkUser );

masterRoutes( app );

app.listen( port, () => {
	console.log( `Express listening on ${ port }` );
} );
