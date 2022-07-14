var express = require("express");
// var multer  = require('multer');

var usersController = require("./app/controllers/UserController");
// var userMiddleware = require('../middleware/auth.middleware');

// var upload = multer({ dest: './public/uploads/' })

var router = express.Router();

router.get("/", usersController.index);

// router.get("/create", usersController.create);

router.get("/search", usersController.search);

router.get("/:id", usersController.views);

// router.post('/create', upload.single('avatar'), usersController.createUser);

// router.post('/create', usersController.createUser);

// router.post('/:id', usersController.delete)

// router.get('/edit/:id', usersController.update);

// router.post('/edit/:id', usersController.updateUser)

module.exports = router;
