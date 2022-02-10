//import seedUserEntries function
const seedUserEntries = require('./user-entry-seeds')

//connect to the database using the connection.js
const sequelize = require('../../config/connection');

//a function to use sequelize to sync to database then log synced then wait for/call seeduUserentriesFunction to run before exiting.
const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUserEntries();
  process.exit(0);
};

//calls seedAll function
seedAll();

