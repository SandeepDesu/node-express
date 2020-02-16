var express = require('express');
var router = express.Router();
var BookController = require('../controllers/books');
var middleware = require('../middleware/authmiddleware');
var bc = new BookController();

router.get('/', middleware, bc.search.bind(this));

module.exports = router;