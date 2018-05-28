const router = require("express").Router();
const eventRoutes = require("./events");
const jobRoutes = require("./jobs");
const userRoutes = require("./user");

// Book routes
router.use("/events", eventRoutes);

router.use("/jobs", jobRoutes);

router.use("/users", userRoutes);

module.exports = router;