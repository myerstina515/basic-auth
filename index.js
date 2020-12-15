'use strict';

const server = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();

server.start(process.env.PORT);

// const MONGOOSE_URI = 'mongodb://localhost:27017/auth';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGODB_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('I am connected to the db');
});
