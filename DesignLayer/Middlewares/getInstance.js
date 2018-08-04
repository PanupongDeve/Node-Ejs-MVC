const ExpressMiddle = require('./ExpressMiddle');

let expressMiddle = null;
const getInstance = (app) => {
    if(expressMiddle === null) {
        expressMiddle = new ExpressMiddle(app);
    }

    return expressMiddle;
}
module.exports = getInstance;