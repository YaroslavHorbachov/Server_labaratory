const corsWhiteList = ['http://localhost:3000']
const corsOptions = {
    origin: function ( origin, callback ) {
        if ( corsWhiteList.indexOf( origin ) !== -1 ) {
            callback( null, true )
        } else {
            callback( new Error( 'Not allowed by CORS' ) )
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
module.exports = {
    corsOptions
}