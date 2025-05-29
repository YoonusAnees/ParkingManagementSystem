const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: [true,"User Name is required"],
       
    },

   

    discription:{
        type:String,
        maxLenght: [50,"Discription be more than 50 Characters"]
    },

   role:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Role"
   },
   isAccessible:{
    type:Boolean,
    default:false
   },

    isActive:{
        type:Boolean,
        default:false
    },
    timestamps:true
});

module.exports =mongoose.model("Permission",permissionSchema);