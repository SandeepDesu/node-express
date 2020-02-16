var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookModule = mongoose.model('books', new Schema({
    name: String,
    author: [],
    cost: Number,
    currencyIn: String,
    description: String,
    imageUrl: String,
    inStock: { type: Boolean, default: true }
}));

module.exports = BookModule;