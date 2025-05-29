const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: [true,"Role Name is required"],
        unique: true
    },
    description:{
        type:String,
        maxLenght: [50,"Cannot be more than 50 Characters"]
    },
    isActive:{
        type:Boolean,
        default:false
    },
    timestamps:true
});

module.exports =mongoose.model("Role",roleSchema);