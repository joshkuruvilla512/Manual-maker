const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {


  app.post("/info", async ({ body }, res) => {
    console.log("ARE YOU ALIVE")
    console.log(body)
    // Create an empty workout object ready for exercises to get put into it
    try {
      const request = await db.Info.create({
        title: body.title
      })
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log("LOSER" + error);
    }
  });

};