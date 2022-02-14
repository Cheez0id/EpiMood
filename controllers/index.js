// const { UserEntries } = require('../models');


//express.router allows us to set up initial endpoints and any file/folder attached to it after will have that prefix to the url
const router = require('express').Router();
const express = require('express');
const getAll = require('./alldata');
const app = express();
const getAllRoute = require('./alldata');
// a route to get localhost:3001/api/alldata
// app.use('/api/alldata', getAllRoute);


// console.log(getAllRoute)




router.use('/', getAllRoute)
// BELOW IS ME LEARNING/STUDYING
//this will successfully get all the data from the database and return it as a json when you go to localhost:3001/alldata.  What I want to do is be able to route through the modularized files.
// const getAll= () =>{
//   router.get('/alldata', async(req, res) => {
//     UserEntries.findAll().then((userData) => {
//       console.log(userData);
//       res.json(userData)
//     });    
//   })
// }




//very simple get request.
//respond with "hello world" when a GET request is made to the /test route
router.get('/', function (req, res) {
  res.send('hello world')
  console.log("testing this out")
  // next()
  // console.log("what does next do?")
})

// POST method route
// app.post('/test', function (req, res) {
//   res.send('POST request to the homepage')
// })

module.exports = app;
module.exports = router;