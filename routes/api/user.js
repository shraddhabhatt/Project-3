// Node Dependencies
var express = require('express');
var router = express.Router();
const userController = require("../../controllers/userController");

router.route("/")
   .post(userController.create)

module.exports = router;