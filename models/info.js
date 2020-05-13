const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    subCategory: {type: String, required: true },
    data: {type: String, required: true}
    
})

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;