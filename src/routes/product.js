var express = require("express");
var router = express.Router();

const productController = require("../app/controllers/ProductController");

router.get("/", productController.show);

module.exports = router;
