const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {

  //matches "/api/info"
  app.post("/info", async ({ body }, res) => {
    console.log("DEBUG INFO.JS")
    //checking what we are sending
    console.log(body)
    //try catch => creating a new object for our DB => grabbing this info from front end. find client utils/api folder for axios call
    try {
      const request = await db.Manual.create({
        company_name: body.company_name,
        category: body.category,
        sections: []
      })
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log("LOSER" + error);
    }
  });

  app.get("/info", async (req, res) => {
    console.log("DEBUG INFO");
    console.log(req);

    try {
      const request = await db.Manual.find()
      res.send(request)
    } catch (error) {
      console.log("DIDN'T WORK" + error);
    }
  })

};