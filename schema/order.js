var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderModule = mongoose.model('orders', new Schema({
    userId: String,
    shippingAddress: String,
    phoneNumber: String,
    cartId:String,
    totalPrice: Number,
    orders: [{
        name: String,
        itemId:String,
        quantity: Number,
        cost: Number,
        currencyIn: String
    }]
}));

module.exports = OrderModule;