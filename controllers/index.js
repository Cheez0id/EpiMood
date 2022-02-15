//express.router allows us to set up initial endpoints and any file/folder attached to it after will have that prefix to the url
const router = require('express').Router();
const express = require('express');
const getAll = require('./entries');
const app = express();
const getAllRoute = require('./entries');


//This was the piece we needed! we are using the express method to use the root route and call to the ./alldata file to do the get requests based on the routes specified in those requests over there in ./alldata
router.use('/', getAllRoute)



//very simple get request.
//respond with "hello world" when a GET request is made to the /test route
router.get('/', function (req, res) {
  res.send('hello world')
  console.log("testing this out")
  // next()
  // console.log("what does next do?")
})



module.exports = app;
module.exports = router;




// __________________________IGNORE BELOW____________________________//



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


// POST method route
// app.post('/test', function (req, res) {
//   res.send('POST request to the homepage')
// })