const path = require("path");
const router = require("express").Router();
const infoRoutes = require("./info");
const ManualRoutes = require("./manuals");

//needed to send the info API calls thru express router
infoRoutes(router);
// For anything else, render the html page
module.exports = router;