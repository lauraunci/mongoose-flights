const Flight = require('../models/flight');

const index = (req, res) => {
  Flight.find({}).exec(function(err, flights) {
    if (err) {
      
    }
    return res.render('flights/index', { flights });  
  });
};

const newFlight =  (req, res) => {
    res.render('flights/new');
  };
  
const create = (req, res) => {

  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
};

module.exports = {
    new: newFlight,
    create,
    index
};