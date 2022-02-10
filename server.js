//require express 
const express = require ('express');
//connect to db via sequelize
const sequelize = require('./config/connection');

const path = require('path');
//make express the app
const app = express();
//port 80 is for heroku (i believe) but we will keep 3001 for now
const PORT = process.env.PORT || 3001;

//tells express to use the routes set up in controllers!! I figured this out on my owwwwnnnnn!!! 
app.use(require('./controllers'));


//setting default root folder to 'public'
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'public')));

//Connecting to the database


sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});