const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualSchema = new Schema({
    company_name: {type: String, required: true },
    category: {type: String, required: true},
    sections : [ {
        type: Schema.Types.ObjectId,
        ref: "sections"
    }]
    
})

const Manual = mongoose.model("manual", manualSchema);

module.exports = Manual;