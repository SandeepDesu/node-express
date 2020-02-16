var express = require('express');
var router = express.Router();
var UsersControls = require('../controllers/users');
var middleware = require('../middleware/authmiddleware');
var uc = new UsersControls();

router.get('/', middleware.userAuth, uc.get.bind(this));
router.get('/:id', middleware.userAuth, uc.getById.bind(this));
router.post('/', uc.createOrUpdate.bind(this));
router.put('/:id', middleware.userAuth, uc.createOrUpdate.bind(this));
router.delete('/:id', middleware.adminAuth, uc.deleteById.bind(this));

module.exports = router;