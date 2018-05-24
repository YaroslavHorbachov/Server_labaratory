const passport = require('passport'),
    bcrypt = require('bcryptjs')
LocalStrategy = require('passport-local').Strategy;


/* LOCAL */
passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    function (username, password, done) {
        User.findOne({
            email: username
        }, (err, doc) => {

        })
    }))

/* SERIALIZE */
passport.serializeUser(function (user, done) {
    done(null, user.id)
});

/* DESERIALIZE */
passport.deserializeUser(function (id, done) {

});

module.exports = passport;