const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const auth = require('../config/auth');

router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(auth, ctrlTrips.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindCode)
    .put(auth, ctrlTrips.tripsUpdateTrip)
    .delete(auth, ctrlTrips.tripsDeleteTrip);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;