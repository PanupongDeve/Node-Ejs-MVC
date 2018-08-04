const Mongo = require('./Mongo');

let mongoInstance = null;
const getInstance = () => {
    if(mongoInstance === null) {
        mongoInstance = new Mongo();
    }

    return mongoInstance;
}

module.exports = getInstance;