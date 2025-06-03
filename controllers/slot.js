const Slots = require("../models/slote")

exports.getSlots = async (req,res)=>{
   const slots = await Slots.find();
   res.status(200).json({success:true,data:slots})
   
}