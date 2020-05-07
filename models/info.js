const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    title: {type: String, required: true },
    
})

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;