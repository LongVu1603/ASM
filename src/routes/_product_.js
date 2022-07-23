var express = require('express');
var router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/:slug', productController.show);

module.exports = router;
