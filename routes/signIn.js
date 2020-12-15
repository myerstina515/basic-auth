'use strict';

const express = require('express');
const User = require('../model/signin');
const router = express.Router();
const base64 = require('base-64');
const bcrypt = require('bcrypt');

router.post('/signin', async (req, res) => {
    console.log(req.headers);
    // 1. turn the string into an array by splitting on the space (' ')
    // 2. Pop off the last value
    // 3. Decode that encoded string (return user:password)
    // 4. Split on the ':'
    // 5. Pull the username and password from that array
  
    let basicHeaderParts = req.headers.authorization.split(' ');
    console.log('step 1', basicHeaderParts);
    // step 1 [ 'Basic', 'Ym9iOmZvbw==' ]
  
    let encodedString = basicHeaderParts.pop();
    console.log('step 2', encodedString);
    // step 2 Ym9iOmZvbw==
  
    let decodedString = base64.decode(encodedString);
    console.log('step 3', decodedString);
    // step 3 bob:foo
  
    let [username, password] = decodedString.split(':');
    // step 4. [ 'bob', 'foo' ]
    console.log('step 4.', [username, password])
  
    try {
      // 1. find the user in the database by the username
      const user = await User.findOne({ username });
  
      // 2. compare the plaintext password that we now have with the one in the database
      const valid = await bcrypt.compare(password, user.password);
  
      // 3. either its valid or we throw an error
      if( valid ){
        res.status(200).json(`hi ${user.username}`);
      } else {
        throw new Error('Invalid User');
      }
    }
    catch (e){ res.status(403).send('Invalid Login')}
  })
  module.exports = router;