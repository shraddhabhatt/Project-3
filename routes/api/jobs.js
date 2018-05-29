// Node Dependencies
var express = require('express');
var router = express.Router();
const jobController = require("../../controllers/jobController");

router.route("/")
   .post(jobController.create)
   .get(jobController.findAll);

// Matches with "/api/jobs/sendjobemail"
router.route("/sendjobemail")
   .post(jobController.sendjobemail)

module.exports = router;