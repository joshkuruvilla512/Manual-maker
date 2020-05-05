const path = require("path");
const router = require("express").Router();
const InfoRoutes = require("./info");
const ManualRoutes = require("./manuals");

// Book routes
router.use("/info", InfoRoutes);

// Google Routes
router.use("/manuals", ManualRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;