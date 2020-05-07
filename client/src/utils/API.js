import axios from "axios";

export default {
  
  saveMe: function(infoData) {
    return axios.post("/api/info", infoData);
  }
};
