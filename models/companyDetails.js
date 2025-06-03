const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "User Name is required"],

    },

    mobile: {
        type: Number


    },

    email: {
        type: String
    },

    address: {
        type: String,
        maxLenght: [50, "Address be more than 50 Characters"]
    },


    ownerDetails: {
        ownerName: {
            type: String
        },

        mobile: {
            type: Number
        },

        email: {
            type: String
        },

        address: {
            type: String,
            maxLenght: [50, "Address be more than 50 Characters"]
        }
    },




    timestamps: true
});

module.exports = mongoose.model("companyDetails", companySchema);