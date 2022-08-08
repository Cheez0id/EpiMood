// Dependencies
const express = require("express");
const path = require("path");
const createDB = require('./util/createDB');
const makeDB = createDB.dropBuildDB;

makeDB();

//make express the app
const app = express();

//port 80 is for heroku (i believe) but we will keep 3001 for now
const PORT = process.env.PORT || 80;

//adding the copy/paste thing "Middleware for parsing JSON and urlencoded form data" from unit 11:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to set default root folder to 'public' (dont need this yet)
app.use(express.static(path.join(__dirname,'public')));

//tells express to use the routes set up in controllers!! I figured this out on my owwwwnnnnn!!!

//first param is the endpoint, second will be the folder
// app.use("/api", controllers);
app.use(require("./controllers"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connecting to the database
const sequelize = require("./config/connection");
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`helloooo!!! it's workin ${PORT}`, __dirname);
	});
});

//note update