const router = require("express").Router();
const arkRoutes = require("./ark");

// Book routes
router.use("/ark", arkRoutes);

module.exports = router;
