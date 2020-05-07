const db = require("../models");
const axios = require("axios");
const mongojs = require("mongojs");

module.exports = function(app) {

  //testing connection
  app.post("/api/info", async (req, res) => {   
    console.log({ "apiRoutes.js": req.body });

    const request = await db.Info.create({
      title: req.body.title
    })
    res.send(request);
  })

}