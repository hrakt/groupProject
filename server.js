const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.listen(3030, () => {
    console.log('listening...on port ', 3030);
})