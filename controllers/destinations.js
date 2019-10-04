const Flight = require('../models/flight');

const create = (req, res) => {
    Flight.findById(req.params.id, function(err, flight) {
        if (!flight) {
            return res.redirect('/flights');
        }

        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight.id}`);
        });
    });
};

module.exports = {
    create
};