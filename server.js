const express = require("express");
//connect to db via sequelize
const sequelize = require("./config/connection");

const controllers = require("./controllers");

const path = require("path");
const getAll = require("./controllers/alldata");
//make express the app
const app = express();
//port 80 is for heroku (i believe) but we will keep 3001 for now
const PORT = process.env.PORT || 3001;

//tells express to use the routes set up in controllers!! I figured this out on my owwwwnnnnn!!!
app.use(require("./controllers"));

//adding the copy/paste thing "Middleware for parsing JSON and urlencoded form data" from unit 11:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//first param is the endpoint, second will be the folder
// app.use("/api", controllers);

//to set default root folder to 'public' (dont need this yet)
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'public')));



//Connecting to the database
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`helloooo!!! it's workin ${PORT}`);
	});
});
