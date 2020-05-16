import axios from "axios";

//grabbing info front front end and making a call to backend to create
export default {
  addInfo: function (startManual) {
    console.log("ADDINFO");
    return axios.post("/api/manual", startManual);
  },

  getInfo: function () {
    console.log("GETINFO");
    return axios.get("/api/manual");
  }


};