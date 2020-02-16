var express = require('express');
var router = express.Router();
var UserModule = require('../controllers/users');
var um = new UserModule();

router.post('/', um.login.bind(this));

module.exports = router;