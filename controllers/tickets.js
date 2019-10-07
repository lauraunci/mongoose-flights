const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

const create = (req, res) => {
  console.log(req.body);
  const ticket = new Ticket(req.body);
  console.log(ticket)
  ticket.flight = req.params.id;
  console.log(ticket)
  ticket.save((err, ticket) => {
    return res.redirect(`/flights/${req.params.id}`)
  })
};

const newTicket = (req, res) => {
  res.render('tickets/new', { title: 'New Ticket', flight_id: req.params.id });
};


module.exports = {
  create,
  new: newTicket
};