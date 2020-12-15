'use strict';

// 3rd part libraries
const express = require('express');
const app = express();
// const base64 = require('base-64');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
require('dotenv').config();

// middleware to parse the body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// create our Mongoose Model
// const userSchema = mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('users', userSchema);

// Signup route -- create a new user
// app.post('/signup', async (req, res) => {
//   console.log(req.body);
//   // req.body = { username: 'bob', password: 'foo' }
//   try {
//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     // req.body = { username: 'bob', password: 'afoiapj84p0a349tq0afiaapw40j8apg4e0' }
//     const user = new User(req.body);
//     const record = await user.save(req.body);
//     res.status(201).json(record);
//   } catch (error) { res.status(403).send('error creating user'); }
// });

// middleware
const signUpRoute = require('./routes/signUp');
app.use(signUpRoute);
const signInRoute = require('./routes/signIn');
app.use(signInRoute);
//   console.log(req.headers);

//   // 1. turn the string into an array by splitting on the space (' ')
//   // 2. Pop off the last value
//   // 3. Decode that encoded string (return user:password)
//   // 4. Split on the ':'
//   // 5. Pull the username and password from that array

//   let basicHeaderParts = req.headers.authorization.split(' ');
//   console.log('step 1', basicHeaderParts);
//   // step 1 [ 'Basic', 'Ym9iOmZvbw==' ]

//   let encodedString = basicHeaderParts.pop();
//   console.log('step 2', encodedString);
//   // step 2 Ym9iOmZvbw==

//   let decodedString = base64.decode(encodedString);
//   console.log('step 3', decodedString);
//   // step 3 bob:foo

//   let [username, password] = decodedString.split(':');
//   // step 4. [ 'bob', 'foo' ]
//   console.log('step 4.', [username, password])

//   try {
//     // 1. find the user in the database by the username
//     const user = await User.findOne({ username });

//     // 2. compare the plaintext password that we now have with the one in the database
//     const valid = await bcrypt.compare(password, user.password);

//     // 3. either its valid or we throw an error
//     if( valid ){
//       res.status(200).json(`hi ${user.username}`);
//     } else {
//       throw new Error('Invalid User');
//     }

//   }
//   catch (e){ res.status(403).send('you are not allowed')}


// })
module.exports = {
    server: app,
    start: port => {
        if (!port){throw new Error('missing port!');}
        app.listen(port, () => console.log(`listening on ${port}`));
    },
};
