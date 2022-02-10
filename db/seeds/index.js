const seedUserEntries = require('./user-entry-seeds')

const sequelize = require('../../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUserEntries();
  process.exit(0);
};

seedAll();