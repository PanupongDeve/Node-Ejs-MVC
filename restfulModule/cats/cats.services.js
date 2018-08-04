const Cat = require('./cats.model');
const Model = require('../../DesignLayer/Database/mongo/Model');

class CatModel extends Model {
    constructor(model) {
        super(model)
    }
}

const catModel = new CatModel(Cat);
module.exports = catModel;