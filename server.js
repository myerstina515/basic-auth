'use strict';

// 3rd part libraries
const express = require('express');
const app = express();
require('dotenv').config();

// middleware to parse the body
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// middleware
const signUpRoute = require('./routes/signUp');
app.use(signUpRoute);
const signInRoute = require('./routes/signIn');
app.use(signInRoute);

module.exports = {
    server: app,
    start: port => {
        if (!port){throw new Error('missing port!');}
        app.listen(port, () => console.log(`listening on ${port}`));
    },
};