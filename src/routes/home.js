var express = require("express");
var router = express.Router();

const homeController = require("../app/controllers/HomeController");

router.get("/search", homeController.search);
router.get("/", homeController.index);

module.exports = router;
