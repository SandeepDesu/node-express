var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.send('Hello world');
});

router.use('/users', require('./users'));
router.use('/authentication', require('./auth'));
router.use('/book', require('./book'));
router.use('/search', require('./book'));
router.use('/cart', require('./cart'));
router.use('/orders', require('./orders'));

module.exports = router;