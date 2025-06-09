const Slots = require("../models/slote")

exports.getSlots = async (req, res) => {

   try {

      const slots = await Slots.find();
      res.status(200).json({ success: true, data: slots })

   } catch (error) {
      res.status(400).json({ success: false, error: error.message })
   }


}

exports.createSlot = async (req, res) => {
   try {
      const slot = await Slots.create(req.body);
      res.status(201).json({ success: true, data: slot })
   } catch (error) {
      res.status(400).json({ success: false, error: error.message })

   }
}

exports.getSlotID = async (req, res) => {

   try {

      const slots = await Slots.findById({ _id: req.params.id });
      if (!slot) {
         return res.status(400).json({
            success: false,
            data: `Slot not found for id ${req.params.id}`
         })
      }
      res.status(200).json({ success: true, data: slots })

   } catch (error) {
      res.status(400).json({ success: false, error: error.message })
   }
}

exports.updatedSlot = async (req, res) => {
   try {
      let UpdatedSlot = await Slots.find({ _id: req.params.id })
      if (!UpdatedSlot) {
         return res.status(400).json({
            success: false,
            data: `Slot not found for Id ${req.params.id}`
         })
      }

         updatedSlot = await Slots.findByIdAndUpdate(req.params.id, req.body,{
         new: true,
         runValidators: true,
      })
      res.status(200).json({success:true,data:updatedSlot})
   } catch (error) {

      res.status(400).json({success : false, error:message})

   }
}

exports.deleteSlot = async (req,res) => {
   let deleteSlot = await Slots.find({_id:req.params.id})
   if(!this.deleteSlot){
      return-res.status(400).json({
         success: false,
         data: `Slot not found for Id ${req.params.id}`
      })
   }

      deleteSlot = await Slots.findByIdAndDelete(req.params.id);
      res.status(200).json({success:true,data:deleteSlot})


}

