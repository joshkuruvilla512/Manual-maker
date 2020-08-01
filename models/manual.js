const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualSchema = new Schema({
    manualType: { type: String, required: true },
    typeLevel: { type: String, required: true },
    data: { type: String }

})

const Manual = mongoose.model("manual", manualSchema);

module.exports = Manual;