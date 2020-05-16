const path = require("path");
const router = require("express").Router();
const infoRoutes = require("./section");
const ManualRoutes = require("./manual");

//needed to send the info API calls thru express router
ManualRoutes(router);
// For anything else, render the html page
module.exports = router;