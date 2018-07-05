const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const keys = require('../../config/key');

// expires Cookies with Login
const expiresIn = 60 * 60 * 24 * 5 * 1000;


module.exports = (app) => {

    app.use(cors());

    app.use(
        cookieSession({
            maxAge: 20 * 24 * 60 * 60 * 1000,
            keys: [keys.cookieKey]
        })
    );
    app.use( passport.initialize());
    app.use( passport.session());

        
    //use static folder
    app.use(express.static('public'));



    //config urlencode
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

}