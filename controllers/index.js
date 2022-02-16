//express.router allows us to set up initial endpoints and any file/folder attached to it after will have that prefix to the url
const router = require('express').Router();
const express = require('express');
const getAll = require('./entries');
const app = express();
const getAllRoute = require('./entries');
const path=require('path');

//This was the piece we needed! we are using the express method to use the root route and call to the ./alldata file to do the get requests based on the routes specified in those requests over there in ./alldata
router.use('/', getAllRoute)

//very simple get request.
//respond with the static HTML file "index" when a GET request is made to the / route;  
//TODO: well, should we use react next? handlebars?  We need to be able to have a dynamic interface.
router.get('/', function (req, res) {
  res.sendFile('pages/index.html', { root: path.join(__dirname, '../public') })
  console.log("testing this out")
  // next()
  // console.log("what does next do?")
})

module.exports = app;
module.exports = router;


