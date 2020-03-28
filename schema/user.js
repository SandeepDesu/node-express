var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModule = mongoose.model('users', new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'active' },
    role: { type: String, default: 'user' }
}));

module.exports = UserModule;