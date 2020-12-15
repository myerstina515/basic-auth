'use strict';

const server = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();

server.start(process.env.PORT);

// const MONGOOSE_URI = 'mongodb://localhost:27017/auth';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGODB_URI, options);

