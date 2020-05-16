const db = require("../../models");
const axios = require("axios");

module.exports = function (app) {

  //matches "/api/section"
  app.post("/section", async ({ body }, res) => {
    console.log("Creating Section")
    //checking what we are sending
    console.log(body)
    //try catch => creating a new object for our DB => grabbing this info from front end. find client utils/api folder for axios call
    try {
      const request = await db.Section.create({
        category: body.category,
        section: body.section,
        data: body.data
      })
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log("Section.js " + error);
    }
  });

  app.get("/section", async (req, res) => {
    console.log("Getting Section");
    console.log(req);

    try {
      const request = await db.Section.find()
      res.send(request)
    } catch (error) {
      console.log("Section.js " + error);
    }
  })

};