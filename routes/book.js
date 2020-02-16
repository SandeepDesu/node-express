var express = require('express');
var router = express.Router();
var BookController = require('../controllers/books');
var middleware = require('../middleware/authmiddleware');
var bc = new BookController();

router.get('/', middleware.userAuth, bc.get.bind(this));
router.get('/:id', middleware.userAuth, bc.getById.bind(this));
router.post('/', middleware.adminAuth, bc.createOrUpdate.bind(this));
router.put('/:id', middleware.adminAuth, bc.createOrUpdate.bind(this));
router.delete('/:id', middleware.adminAuth, bc.deleteById.bind(this));

module.exports = router;