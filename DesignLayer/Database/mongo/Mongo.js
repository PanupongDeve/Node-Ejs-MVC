const mongoose = require('mongoose');

const mongoURI = 'mongodb://mongo:27017/cats';
const mongoTestURI = ''

module.exports = class Mongo {
    constructor() {
        this.mongoURI = mongoURI;
        this.mongoTestURI = mongoTestURI;
    }

    rootSetup(URI) {
        mongoose.connect(URI);
        const dbConnection = mongoose.connection;

        // if ERROR
        dbConnection.on('error', console.error.bind(console, 'connection error:'));
        dbConnection.once('open', () => {
            console.log('Database connection!!');
        });
    }

    setup() {
        this.rootSetup(this.mongoURI);
    }

    setupTest() {
        this.rootSetup(this.mongoTestURI);
    }
}
