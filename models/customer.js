const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    }
});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;