const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    title: {type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    image: { type: String }
})

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;