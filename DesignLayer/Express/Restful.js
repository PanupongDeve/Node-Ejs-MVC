const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const passport = require('passport');
const cors = require('cors');
const restfulRoutes = require('../../restfulModule/rootRoutes');
const flash = require('connect-flash');


module.exports = class Restful {
    constructor(app) {
        this.app = app
    }

    setupMiddleware() {
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
        this.app.use( passport.initialize());
        this.app.use( passport.session());
        this.app.use(flash()); // use connect-flash for flash messages stored in session
    
            
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