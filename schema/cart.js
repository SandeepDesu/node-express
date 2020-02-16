var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartModule = mongoose.model('carts', new Schema({
    userId: String,
    totalPrice: Number,
    orders: [{
        name: String,
        itemId: String,
        quantity: Number,
        cost: Number,
        currencyIn: String
    }],
    status: { type: String, default: 'active' }
}));

module.exports = CartModule;