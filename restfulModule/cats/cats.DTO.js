const DTO = require('../../DesignLayer/DataTransferObject/DTO');

class CatsDTO extends DTO {
    constructor() {
        super();
    }

    getCatsObject(cats) {
        return cats.map((cat) => {
            return this.getCatObject(cat);
        })
    }

    getCatObject(cat) {
        return {
            _id: cat._id,
            name: cat.name,
            age: cat.age,
            owner: cat.owner
        }
    }
}

const catsDTO = new CatsDTO();

module.exports = catsDTO;

