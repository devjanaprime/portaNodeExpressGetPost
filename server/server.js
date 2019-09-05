// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// globals
const port = 5000;
let things = [];
/// - test data - ///
things.push( { name: 'bottle' } );

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) )

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) //end server up

// routes
app.get( '/things', ( req, res )=>{
    console.log( 'in /things GET' );
    res.send( things );
}) //end things GET

app.post( '/things', ( req, res )=>{
    console.log( 'in /things POST:', req.body );
    things.push( req.body );
    res.send( 'woof' );
}) //end things POST