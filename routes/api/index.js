const router = require("express").Router();
const eventRoutes = require("./events");
const jobRoutes = require("./jobs");

// Book routes
router.use("/events", eventRoutes);

router.use("/jobs", jobRoutes);

module.exports = router;