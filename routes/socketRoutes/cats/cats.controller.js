const catsServices = require('./cats.services');

const findAll = (io, socket) => {
    return async (data) => {
        try {
            switch (data) {
                case 'fetch_cats':
                    io.emit('/api/cats', await catsServices.findAll());
                    break;
                default:
                    io.emit('/api/cat', await catsServices.findById('5b3dc37c913d109260bd6ffc'));
                    break;
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