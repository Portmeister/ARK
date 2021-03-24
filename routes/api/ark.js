const router = require("express").Router();
const arkController = require("../../controllers/arkController");

// Matches with "/api/ark"
router.route("/")
  .get(arkController.findAll)
  .post(arkController.create);

// Matches with "/api/ark/:id"
router
  .route("/:id")
  .get(arkController.findById)
  .put(arkController.update)
  .delete(arkController.remove);

module.exports = router;
