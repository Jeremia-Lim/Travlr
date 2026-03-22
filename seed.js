const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// connect to database
require('./app_api/models/db');

const Trip = mongoose.model('Trip');

// read JSON file
const trips = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'trips.json'), 'utf8')
);

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        console.log('Old trips removed');

        await Trip.insertMany(trips);
        console.log('Trips added');

        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
};

seedDB();