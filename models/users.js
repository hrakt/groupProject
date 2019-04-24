const mongoose = require('mongoose');
const Events = require('./events');

const userSchema = new mongoose.Schema({
    email:      {type: String, required: true, unique: true},
    firstName:  {type: String, required: true},
    lastName:   String,
    password:   {type: String, required: true},
    events:     [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;