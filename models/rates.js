const mongoose = require("mongoose");
const rateSchema = new mongoose.Schema({
    rateName: {
        type: String,
        required: [true, "Rate Name is required"],

    },


    rateCode: {
        type: String,
        required: [true, "Rate Code is required"],
        unique: true

    },
    category: {
        type: Array
    },

    type: {
        type: Array
    },

    rate: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: false
    },
    timestamps: true
});

module.exports = mongoose.model("Rates", rateSchema);