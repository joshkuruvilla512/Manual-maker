const path = require("path");
const router = require("express").Router();
const infoRoutes = require("./info");
const ManualRoutes = require("./manuals");


infoRoutes(router);
// For anything else, render the html page
module.exports = router;