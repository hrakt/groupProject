const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/groupProject';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
})

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected from ', connectionString);
})

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
})