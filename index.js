const express = require("express")
const app = express();
const path = require("path");
const deploy = require('./routes').deploy
const applyMiddleware = require('./core/middleware').applyMiddleware


applyMiddleware(app)
deploy(app)

app.listen(3020)
console.log('Listen 3020');

