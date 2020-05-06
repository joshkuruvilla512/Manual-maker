import axios from "axios";

export default {
    addInfo: function (infoData) {
        return axios.post("/api/info", infoData);
      }
};