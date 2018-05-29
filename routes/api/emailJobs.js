var express = require('express');
var router = express.Router();

const subscribeJobsController = require("../../controllers/subscribeJobsController");

router.route("/")
   .post(subscribeJobsController.create)
   .get(subscribeJobsController.findAll);

module.exports = router;