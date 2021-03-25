const router = require("express").Router();
const arkRoutes = require("./ark");

// Book routes
router.use("/arks", arkRoutes);

module.exports = router;
