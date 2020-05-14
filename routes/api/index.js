const path = require("path");
const router = require("express").Router();
const infoRoutes = require("./section");
const ManualRoutes = require("./manual");
const CategoryRoutes = require("./category");

//needed to send the info API calls thru express router
infoRoutes(router);
// For anything else, render the html page
module.exports = router;