const catsServices = require('./cats.services');

const findAll = (io, socket) => {
    return async (data) => {
        try {
            if(false) {
                // middleware
              throw "msg is must object"
            } else {
                const test = {
                    cats: await catsServices.findAll()
                }
              io.emit('/api/cats', test);
            }
        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('/api/cats', error);
        }
    }
  }

  module.exports = {
    findAll
  }