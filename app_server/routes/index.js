const express = require('express');
const router = express.Router();
const ctrlTraveller = require('../controllers/traveller');

router.get('/travel', ctrlTraveller.travel);

module.exports = router;