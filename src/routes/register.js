var express = require("express");
var router = express.Router();

const registerController = require("../app/controllers/RegisterController");

router.get("/", registerController.index);
router.post("/", registerController.registerUser);

module.exports = router;
