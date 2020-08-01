import axios from "axios";

//grabbing info front front end and making a call to backend to create
export default {
  createManual: function (startManual) {
    console.log("ADD MANUAL");
    return axios.post("/api/manual", startManual);
  },

  getInfo: function (manualType) {
    console.log("GET MANUAL");
    console.log(manualType)
    return axios.get("/api/manual/" + manualType);
  }

};