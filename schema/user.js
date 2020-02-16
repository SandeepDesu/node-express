var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModule = mongoose.model('users', new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    username: String,
    password: String,
    address: String,
    status: { type: String, default: 'active' },
    role: { type: String, default: 'user' }
}));

module.exports = UserModule;