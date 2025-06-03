const mongoose = require("mongoose");

// Subdocument Schema
const slotNameSchema = new mongoose.Schema({
    slotName: {
        type: String,
        unique: true
    },
    vehicleType: {
        type: String,
        required: [true, "vehicleType is required"]
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    capacity: {
        type: Number
    }
}, {
    timestamps: true  // ✅ Correctly placed as second argument
});

// Parent Schema
const sloteSchema = new mongoose.Schema({
    floorName: {
        type: String,
        required: [true, "Floor Name is required"],
    },
    wingName: {
        type: String,
        required: [true, "wingName is required"]
    },
    slots: [slotNameSchema],
    isFullyOccupied: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Slotes", sloteSchema);
