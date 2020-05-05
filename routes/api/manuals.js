const router = require("express").Router();
const manualControllers = require("../../controllers/manualControllers");

// Matches with "/api/google"
router
  .route("/")
  .get(manualControllers.findAll);

module.exports = router;