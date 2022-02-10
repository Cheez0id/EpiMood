// const { UserEntries } = require('../models');

const router = require('express').Router();

// primary Trying to make routes modularized; 
// const testGet= () =>{
//   router.get('/', async(req, res) => {
//     UserEntries.findAll().then((userData) => {
//       console.log(userData);
//       res.json(userData)
//     });
//     res.render('all')  
//   })
// }

// testGet();

// BELOW IS ME LEARNING/STUDYING

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