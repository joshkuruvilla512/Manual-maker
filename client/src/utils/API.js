import axios from "axios";

//grabbing info front front end and making a call to backend to create
export default {
  createManual: function (startManual) {
    console.log("ADD MANUAL");
    return axios.post("/api/manual", startManual);
  },

  getInfo: function () {
    console.log("GET MANUAL");
    return axios.get("/api/manual");
  },

  createSection : function(sectionData) {
    console.log("Adding Section");
    return axios.post("/api/section", sectionData);
  },

  getSection : function() {
    console.log("Getting Section");
    return axios.get("/api/section");
  }


};