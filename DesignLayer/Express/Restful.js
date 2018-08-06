const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const keys = require('../../config/key');
const restfulRoutes = require('../../restfulModule/rootRoutes');


module.exports = class Restful {
    constructor(app) {
        this.app = app
    }

    setupMiddleware() {
        this.app.use(cors());

        this.app.use(
            cookieSession({
                maxAge: 20 * 24 * 60 * 60 * 1000,
                keys: [keys.cookieKey]
            })
        );
        this.app.use( passport.initialize());
        this.app.use( passport.session());
    
            
        //use static folder
        this.app.use(express.static('public'));
    
    
    
        //config urlencode
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true}));  
        this.app.use(morgan('dev'));
    }

    setupRoutes() {
        restfulRoutes(this.app);
    }
}