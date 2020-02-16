var express = require('express');
var router = express.Router();
var CartController = require('../controllers/cart');
var middleware = require('../middleware/authmiddleware');
var cc = new CartController();

router.get('/', middleware.userAuth, cc.get.bind(this));
router.get('/:id', middleware.userAuth, cc.getById.bind(this));
router.post('/', middleware.userAuth, cc.createOrUpdate.bind(this));
router.put('/:id', middleware.userAuth, cc.createOrUpdate.bind(this));
router.delete('/:id', middleware.userAuth, cc.deleteById.bind(this));

module.exports = router;