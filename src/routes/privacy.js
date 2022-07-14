var express = require("express");
var router = express.Router();

const privacyController = require("../app/controllers/PrivacyController");

router.get("/", privacyController.index);

module.exports = router;
