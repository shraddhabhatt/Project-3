const router = require("express").Router();
const eventRoutes = require("./events");
const jobRoutes = require("./jobs");
const emailEventsRoutes = require("./emailEvents");
const emailJobsRoutes = require("./emailJobs");
const userRoutes = require("./user");


// Book routes
router.use("/events", eventRoutes);

router.use("/jobs", jobRoutes);

router.use("/emailEvents", emailEventsRoutes);

router.use("/emailJobs", emailJobsRoutes);

router.use("/user", userRoutes);


module.exports = router;