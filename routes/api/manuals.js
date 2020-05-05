const router = require("express").Router();
const manualControllers = require("../../controllers/manualControllers");

// Matches with "/api/manuals"
router
  .route("/")
  .get(manualControllers.findAll);

module.exports = router;