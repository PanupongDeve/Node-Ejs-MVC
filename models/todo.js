const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: 'Empty Body'
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
