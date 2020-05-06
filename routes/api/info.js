const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {


  app.post("/api/info", async ({ body }, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Info.create(body)
    // Send the request back to the front end
    res.send(request)
  });

};