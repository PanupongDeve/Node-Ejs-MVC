
module.exports = class Model {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        const response = await this.model.find({});
        return response;
    }

    async findWithData(data) {
        const response = await this.model.find(data);
        return response;
    }

    async findById(_id) {
        const response = await this.model.findOne({ _id });
        return response;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async delete(data) {
        const response = await this.model.remove(data);
        return true;
    }

    async updateById(_id,data) {
        let response = await getDBById(_id);
        response = Object.assign(response, data);
        response.save();
        return response;
    }

    async hashMany(_id, collection) {
        const opts = [
            {path: collection}
        ]
        
        const user = await this.model.findOne({ _id });  
        const Collect  = await this.model.populate(user, opts);
        return Collect[collection];
    }
}



