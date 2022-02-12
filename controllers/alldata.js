var express = require('express');
var router = express.Router();

// primary Trying to make routes modularized; 
const getAll= () =>{
  router.get('/alldata', async(req, res) => {
    UserEntries.findAll().then((userData) => {
      console.log(userData);
      res.json(userData)
    });    
  })
}

getAll();


module.exports = router;