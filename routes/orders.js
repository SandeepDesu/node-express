var express = require('express');
var router = express.Router();
var OrdersController = require('../controllers/orders');
var middleware = require('../middleware/authmiddleware');
var oc = new OrdersController();

router.get('/', middleware.userAuth, oc.get.bind(this));
router.get('/:id', middleware.userAuth, oc.getById.bind(this));
router.post('/', middleware.userAuth, oc.createOrUpdate.bind(this));
router.put('/:id', middleware.userAuth, oc.createOrUpdate.bind(this));
router.delete('/:id', middleware.userAuth, oc.deleteById.bind(this));

module.exports = router;