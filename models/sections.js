const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    category: { type: String, required: true },
    section: { type: String, required: true },
    data: { type: String, required: true },  

})

const Section = mongoose.model("section", sectionSchema);

module.exports = Section;