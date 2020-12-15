'use strict';

const express = require('express');
const User = require('../model/signin');
const router = express.Router();
// const base64 = require('base-64');
const bcrypt = require('bcrypt');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/signup', async (req, res) => {
    console.log(req.body);
    // req.body = { username: 'bob', password: 'foo' }
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // req.body = { username: 'bob', password: 'afoiapj84p0a349tq0afiaapw40j8apg4e0' }
      const user = new User(req.body);
      const record = await user.save(req.body);
      res.status(201).json(record);
    } catch (error) { res.status(403).send('error creating user'); }
  });


  module.exports = router;
