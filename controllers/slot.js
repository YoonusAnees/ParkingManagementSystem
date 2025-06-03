const Slots = require ("../models/slote")

exports.getSlots = async (req,res)=>{

   try {

       const slots = await Slots.find();
   res.status(200).json({success:true,data:slots})
      
   } catch (error) {
      res.status(400).json({success:false,error:error.message})
   }
  
   
}

exports.createSlot = async(req,res)=>{
   try {
      const slot = await Slots.create(req.body);
      res.status(201).json({success:true,data:slot})
   } catch (error) {
      res.status(400).json({success:false,error:error.message})
      
   }
}

exports.getSlotID = async (req,res)=>{
   
}