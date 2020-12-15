'use strict';

const server = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();


// const MONGOOSE_URI = 'mongodb://localhost:27017/auth';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGODB_URI, options);


server.start(process.env.PORT);