var express = require('express');
var router = express.Router();

const subscribeEventsController = require("../../controllers/subscribeEventsController");

router.route("/")
   .post(subscribeEventsController.create)
   .get(subscribeEventsController.findAll);

module.exports = router;