const path = require("path");
const router = require("express").Router();
const InfoRoutes = require("./info");
const ManualRoutes = require("./manuals");

// Info routes
router.use("/info", InfoRoutes);

// Manual Routes
router.use("/manuals", ManualRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;