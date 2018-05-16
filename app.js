require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RootsRoutes = require('@routes/Roots_routes');
const Middlewares = require('./middlewares/middlewares');
const app = express();



//--------------------SETUP App express MIDDLEWARE -----------------------------

Middlewares(app);

//--------------------SETUP App express Routes -----------------------------
RootsRoutes(app);


module.exports = app;



