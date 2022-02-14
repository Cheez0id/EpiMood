const { UserEntries } = require('../models');
const router = require('express').Router();

// primary Trying to make routes modularized; 

 router.get('/alldata', async(req, res) => {
    UserEntries.findAll().then((userData) => {
      console.log(userData);
      res.json(userData)
    });    
  })

  router.get('/thingy', async(req, res) => {
    UserEntries.findAll().then((userData) => {
      console.log(userData);
      res.json(userData)
    });    
  })



module.exports = router;


