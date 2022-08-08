

const mysql = require("mysql2");

exports.dropBuildDB = function () {
  // Open the connection to MySQL server
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
  });
  //drop previous
  connection.query(
    `DROP DATABASE epiMood_db`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  ).then
  connection.query(
    `SHOW DATABASES`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  );
  // Run create database statement
  connection.query(
    `CREATE DATABASE epiMood_db`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  ).then
  connection.query(
    `SHOW DATABASES`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  );
  // Close the connection
  connection.end();
  }


