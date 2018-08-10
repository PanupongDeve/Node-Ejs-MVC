const express = require('express');
const app = express();

const Server = require('./DesignLayer/Server/Server');
const getMongoInstance = require('./DesignLayer/Database/mongo/getInstance');
const getRestfulInstance = require('./DesignLayer/Express/getInstance');

const server = new Server(app, 3000);
//const io = server.getIO();
const mongoDb = getMongoInstance();
const expressRestful = getRestfulInstance(app);

mongoDb.setup();
expressRestful.setupMiddleware();
expressRestful.setupRoutes();
server.start();



//SocketMiddlewares(io);


/*io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

   SocketRootRoutes(io, socket);
});*/







