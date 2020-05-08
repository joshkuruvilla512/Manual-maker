import axios from "axios";

export default {
  addInfo: function (infoData) {
    console.log(infoData);
    return axios.post("/api/info", infoData);
  }
};