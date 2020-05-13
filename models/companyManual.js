const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {type: String, required: true },
    manual_data: [
        {
            type: Schema.Types.ObjectId,
            ref: "Manual"
        }
    ]   
})

const Company = mongoose.model("Company", companySchema);

module.exports = Company;