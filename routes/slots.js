const express = require ("express");
const router = express.Router();


const {getSlots} = require ("../controllers/slot");


router.route('./').get(getSlots);

module.exports = router;

