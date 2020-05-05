const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualSchema = new Schema({
    title: {type: String, required: true },
    subtitle: { type: String },
    companyName: { type: String, required: true }    
})

const Manual = mongoose.model("Manual", manualSchema);

module.exports = Manual;