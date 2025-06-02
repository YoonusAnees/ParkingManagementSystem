const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema({
    roleName: {
        type: String,
        required: [true,"User Name is required"],
        unique: true
    },

    mobile:{
        type:Number,
        required: [true,"Mobile Number is required"],
        unique: true
    },

    dataOfJoining:{
        // type:Date,
        // default:Date.now
        type:String
    },

    address:{
        type:String,
        maxLenght: [50,"Address be more than 50 Characters"]
    },

   role:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Role"
   },

   identiyProof:{
    type:String,
    required:true
   },

   isProfileCompleted:{
    type:Boolean,
    default:false
   },

    isActive:{
        type:Boolean,
        default:false
    },
    timestamps:true
});

module.exports =mongoose.model("Parking",parkingSchema);