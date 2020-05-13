const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualSchema = new Schema({
    Category: {type: String, required: true },
    subCategory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Info"
        }
    ]   
})

const Manual = mongoose.model("Manual", manualSchema);

module.exports = Manual;