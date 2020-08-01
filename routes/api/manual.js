const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {

  app.get("/manual/:manualType", async (req, res) => {
    console.log("Getting manual");
    console.log(req.params.manualType)


    try {
      const request = await db.Manual.find({ manualType: req.params.manualType })
      res.send(request)
    } catch (error) {

      console.log("manual.js " + error);
    }
  })

};