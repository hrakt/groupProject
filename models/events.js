const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: String,
    artists: String,
    date: String,
    venue: String,
    picture: String
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;