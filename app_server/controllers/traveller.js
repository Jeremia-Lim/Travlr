const trips = require('../../data/trips.json');

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        pageHeader: {
            title: 'Travel',
            strapline: 'Choose your trip'
        },
        trips: trips
    });
};

module.exports = {
    travel
};