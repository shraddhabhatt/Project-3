// Node Dependencies
var express = require('express');
var router = express.Router();
const jobController = require("../../controllers/jobController");

router.route("/")
   .post(jobController.create);

module.exports = router;