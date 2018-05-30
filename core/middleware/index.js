const express = require('express');
const path = require('path')
const fileUpload = require('express-fileupload');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const db = require('../db').db
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
const { corsOptions } = require('./cors.config')
const passport = require('../passport')

const applyMiddleware = (app) => {

    app.use(cors(corsOptions))
    app.use(fileUpload())
    app.use(express.static(path.join(__dirname, "public")))
    app.use(cookieParser())
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: "secret",
        store: new MongoStore({
            mongooseConnection: db
        })
    }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(passport.initialize());
    app.use(passport.session());

}

module.exports = {
    applyMiddleware
}

