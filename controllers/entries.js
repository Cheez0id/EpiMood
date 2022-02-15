const { UserEntries } = require('../models');
const router = require('express').Router();

// primary Trying to make routes modularized; 

 router.get('/alldata', async(req, res) => {
    UserEntries.findAll().then((userData) => {
      console.log("Gotta Catch 'Em All!");
      res.json(userData)
    });    
  })



  router.post('/thingy', async(req, res) => {
    UserEntries.create({
      mood: 3,
      episode: true,
      text: 'This is a new entry',
      makePrivate: true
    }).then((newEntry) => {
      console.log("making a new entry");
      res.json(newEntry)
    });    
  })



module.exports = router;


