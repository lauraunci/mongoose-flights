const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

const index = (req, res) => {
  Flight.find({}).exec(function(err, flights) {
    if (err) {
      
    }
    return res.render('flights/index', { flights });  
  });
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    if (!flight) {
      return res.redirect('/flights');
    }
    
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    });
  });
}

const newFlight =  (req, res) => {
    res.render('flights/new', { title: 'Add Flight' });
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
    index,
    show,
    new: newFlight,
    create
};