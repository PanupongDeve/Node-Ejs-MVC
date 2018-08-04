const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
    name : String,
    age: Number,
    owner: String
    
    
});

const Cat = mongoose.model('cat', catSchema);
module.exports = Cat;