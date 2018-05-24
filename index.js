/* DEPENDENCIES */
const express = require( "express" )
const app = express();
const path = require( "path" );
const deploy = require( './routes' ).deploy
const applyMiddleware = require( './core/middleware' ).applyMiddleware
/* MONGOOSE */

applyMiddleware( app )
deploy( app )

app.listen( 3020 )
console.log( 'Listen 3020' );

/* MIDDLEWARE  */
/* 
app.use( function ( request, response, next ) {
    response.header( "Access-Control-Allow-Origin", "http://localhost:4200" );
    response.header( "Access-Control-Allow-Credentials", true );
    response.header( "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE" );
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
} );

/* PARSERS *//* 
app.use( express.static( path.join( __dirname, "public" ) ) );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( fileUpload() ) */

/* PASSPORT AUTH */
/* 
app.use(
    session( {
        resave: false,
        saveUninitialized: true,
        secret: "secret",
        store: new MongoStore( {
            mongooseConnection: db
        } )
    } )
);
app.use( passport.initialize() );
app.use( passport.session() ); */



/* ROUTES */
// require( './routes' ).deploy( app )

/* RUN SERVER */


// console.log( 'Listen', 3020 );








// const express = require( 'express' );
// const app = express();
// const { deploy } = require( './routes' )
// const { applyMiddleware } = require( './core/middleware' )
// const { PORT } = require( './core/config/constants' )

// applyMiddleware( app )
// deploy( app )

// app.listen( PORT )
// console.log( `Listen ${ PORT }` )