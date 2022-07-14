var express = require("express");
var router = express.Router();

const cartController = require("../app/controllers/CartController");

router.get("/", cartController.index);

module.exports = router;
