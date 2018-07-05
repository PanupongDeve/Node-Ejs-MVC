const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

const ExpressMiddlewares = require('./middlewares/ExpressMiddlewares');
const SocketMiddlewares = require('./middlewares/SocketMiddlewares');
const SocketRootRoutes = require('./routes/socketRoutes/rootRoutes');
const ResfulRoutes = require('./routes/restfulRoutes/rootRoutes');


const db = require('./config/db');
mongoose.connect(db.mongoURI);
const dbConnection = mongoose.connection;

// if ERROR
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => {
    console.log('Database connection!!');
});



ExpressMiddlewares(app);
//SocketMiddlewares(io);


io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

   SocketRootRoutes(io, socket);
});


//---- Route------------

ResfulRoutes(app);

const PORT = process.env.PORT || 5000;


http.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

