const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {

  //matches "/api/manual"
  app.post("/manual", async ({ body }, res) => {
    console.log("Creating manual")
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
      console.log("Manual.js " + error);
    }
  });

  app.get("/manual", async (req, res) => {
    console.log("Getting manual");
    console.log(req);

    try {
      const request = await db.Manual.find()
      res.send(request)
    } catch (error) {
      console.log("Manual.js " + error);
    }
  })

};