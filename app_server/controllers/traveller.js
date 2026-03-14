const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        pageHeader: {
            title: 'Travlr Getaways',
            strapline: 'Let us plan your next adventure'
        }
    });
};

module.exports = {
    travel
};