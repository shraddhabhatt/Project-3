const router = require("express").Router();
const eventRoutes = require("./events");
const jobRoutes = require("./jobs");
const emailEventsRoutes = require("./emailEvents");
const emailJobsRoutes = require("./emailJobs");

// Book routes
router.use("/events", eventRoutes);

router.use("/jobs", jobRoutes);

router.use("/emailEvents", emailEventsRoutes);

router.use("/emailJobs", emailJobsRoutes);


module.exports = router;