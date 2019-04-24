const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    artist: String,
    date: String,
    venue: String,
    picture: String,
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;