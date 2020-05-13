const db = require("../../models");
const axios = require("axios");


// const infoSchema = new Schema({
//   subCategory: {type: String, required: true },
//   data: {type: String, required: true}
  
// })

module.exports = function (app) {

  //matches "/api/info"
  app.post("/info", async ({ body }, res) => {
    console.log("DEBUG INFO.JS")
    //checking what we are sending
    console.log(body)
    //try catch => creating a new object for our DB => grabbing this info from front end. find client utils/api folder for axios call
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

  app.get("/info", async (req, res) => {
    console.log("DEBUG INFO");
    console.log(req);

    try {
      const request = await db.Info.find()
      res.send(request)
    } catch (error) {
      console.log("DIDN'T WORK" + error);
    }
  })

};