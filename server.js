const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db')

const userController = require('./controllers/users');
const eventController = require('./controllers/events');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/users', userController);
app.use('/events', eventController);

app.listen(3030, () => {
    console.log('listening...on port ', 3030);
})