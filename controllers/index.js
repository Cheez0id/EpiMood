const { UserEntries } = require('../models');

const router = require('express').Router();


// BELOW IS ME LEARNING/STUDYING
//this will successfully get all the data from the database and return it as a json when you go to localhost:3001/alldata.  What I want to do is be able to route through the modularized files.
const getAll= () =>{
  router.get('/alldata', async(req, res) => {
    UserEntries.findAll().then((userData) => {
      console.log(userData);
      res.json(userData)
    });    
  })
}

getAll();


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

module.exports = router;