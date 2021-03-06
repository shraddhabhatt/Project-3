// Node Dependencies
var express = require('express');
var router = express.Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events/"
router.route("/")
   .post(eventController.create)
   .get(eventController.findAll);

// Matches with "/api/events/:id"
router.route("/:id/:userid")
   .get(eventController.findById)
   .delete(eventController.remove);

// Matches with "/api/events/sendeventemail"
router.route("/sendeventemail")
   .post(eventController.sendeventemail)
 
module.exports = router;