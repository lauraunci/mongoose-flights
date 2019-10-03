const Flight = require('../models/flight');

const newFlight =  (req, res) => {
    res.render('flights/new');
  };
  
function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights/new');
  });
}

module.exports = {
    new: newFlight,
    create
};