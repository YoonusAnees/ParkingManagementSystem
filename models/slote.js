const mongoose = require("mongoose");


const slotNameSchema = mongoose.Schema({
    slotName: {
        type: String,
        unique:true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    timestamps: true

});

const capacitySchema = mongoose.Schema({
    vehicleType: {
        type: String,
        required: [true, "vehicleType is required"]
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    timestamps: true

});


const sloteSchema = new mongoose.Schema({
    floorName: {
        type: String,
        required: [true, "Floor Name is required"],

    },
     wingName: {
        type: String,
        required: [true, "wingName  is required"]

    },
    slots:[slotNameSchema],
    capacity:[capacitySchema],

    isFullyOccupied : {
        type: Boolean,
        default: false
    },
    
    isActive: {
        type: Boolean,
        default: false
    },
    timestamps: true
});

module.exports = mongoose.model("Slotes", sloteSchema);