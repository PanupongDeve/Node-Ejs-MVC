

module.exports = {
    index(req, res, next) {
        let hello = "Hello World";
        res.render('index', { hello });
    },
    async create(req, res) {
        
    },
    async show(req,res) {
        
    },
    async showById(req, res) {
        
    },

    async updateById(req, res) {
        
    },
    async deleteById(req, res) {
        
    }
};