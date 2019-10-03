const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNo: Number,
    departs: Date
});

module.exports = mongoose.model('Flight', flightSchema);