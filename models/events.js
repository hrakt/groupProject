const mongoose = require('mongoose');
const Users = require('./users')

const eventSchema = mongoose.Schema({
    name: String,
    artists: [{}],
    date: Date,
    venue: String,
    picture: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }]
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;