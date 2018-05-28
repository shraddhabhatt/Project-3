var express = require('express');
var router = express.Router();

const subscribeEventsController = require("../../controllers/subscribeEventsController");

router.route("/")
   .post(subscribeEventsController.create);

module.exports = router;