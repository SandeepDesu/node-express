var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookModule = mongoose.model('books', new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: Array,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    currencyIn: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    inStock: { type: Boolean, default: true }
}));

module.exports = BookModule;