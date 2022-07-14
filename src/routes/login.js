var express = require("express");
var router = express.Router();

const loginController = require("../app/controllers/LoginController");

router.get("/", loginController.index);
router.post("/", loginController.loginUser);

module.exports = router;
