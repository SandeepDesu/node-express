var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderModule = mongoose.model('orders', new Schema({
    userId: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    cartId: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    orders: [{
        name: { type: String, required: true },
        itemId: { type: String, required: true },
        quantity: { type: Number, required: true },
        cost: { type: Number, required: true },
        currencyIn: { type: String, required: true }
    }]
}));

module.exports = OrderModule;