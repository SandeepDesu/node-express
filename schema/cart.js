var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartModule = mongoose.model('carts', new Schema({
    userId: { type: String, required: true },
    totalPrice: Number,
    totalItems: { type: Number, default: 0 },
    orders: [{
        name: { type: String, required: true },
        itemId: { type: String, required: true },
        quantity: { type: Number, required: true },
        cost: { type: Number, required: true },
        currencyIn: { type: String, required: true }
    }],
    status: { type: String, default: 'active' }
}));

module.exports = CartModule;