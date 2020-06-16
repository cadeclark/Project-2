const router = require("express").Router();
const eventsRoutes = require("./events");
// routes
router.use("/events", eventsRoutes);

module.exports = router;