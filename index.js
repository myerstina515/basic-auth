'use strict';

const server = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();


const MONGOOSE_URI = 'mongodb://localhost:27017/auth';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGOOSE_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('I am connected to the db');
});

server.start(process.env.PORT);