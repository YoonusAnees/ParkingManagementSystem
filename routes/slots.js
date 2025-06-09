const express = require ("express");
const router = express.Router();


const {getSlots, getSlotID, createSlot, updatedSlot, deleteSlot} = require ("../controllers/slot");



router.route('/').get(getSlots).post(createSlot);
router.route('/:id').get(getSlotID).put(updatedSlot).delete(deleteSlot);


module.exports = router;

