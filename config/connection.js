//require the sequelize npm, it's a Class here?
const Sequelize = require("sequelize");

//use the .env values to pass in
require("dotenv").config();

//Set-up for Jaws which will be used when deploying to Heroku (remove if not needed)
//create new Sequelize object? with the params/values from .env so as to connect to the app database
//dialectOptions are passed directly into the MySQL connection constructor - can provide custom options https://www.npmjs.com/package/mysql#connection-options
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
			process.env.DB_TITLE,
			process.env.DB_USER,
			process.env.DB_PW,
			{
				host: "localhost",
				dialect: "mysql",
				port: 3306,
				dialectOptions: {
					timezone: "local",
				},
			}
	  );

		//just to confirm connected to the app database
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the App Database!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
    


module.exports = sequelize;
