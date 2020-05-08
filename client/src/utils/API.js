import axios from "axios";

//grabbing info front front end and making a call to backend to create
export default {
  addInfo: function (infoData) {
    console.log(infoData);
    return axios.post("/api/info", infoData);
  }
};