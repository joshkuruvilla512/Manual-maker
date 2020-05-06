import axios from "axios";

export default {
    //gets info user wanted 
    getInfo: function(q) {
        return axios.get("/api/info", {params: { q: "title:" + q} });
    },
    //creating info to put in db
    saveInfo: function(infoData) {
        return axios.post("/api/info", infoData);

    }
}