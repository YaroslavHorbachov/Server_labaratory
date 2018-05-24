const deploy = ( app ) => {
    const api = require( './api' ).router
    const auth = require( './auth' ).router
    app.use( '', api )
    app.use( '', auth )
}
exports.deploy = deploy