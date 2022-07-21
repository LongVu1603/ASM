var express = require("express");
var router = express.Router();

const productController = require("../app/controllers/ProductController");

// router.get("/", productController.show);
router.get("/add_product", productController.create);
router.post("/store", productController.store);
router.get("/:slug", productController.show);
router.get("/", productController.index);

module.exports = router;
