//grab the UserEntries model from models for this seed data
const { UserEntries } = require("../../models");

//fake data to seed to the db
const userEntry = [
  {
    mood: 3,
    episode: false,
    text: "this is a test note",
    makePrivate: true,
  },
];

//researching bulkcreate: https://sequelize.org/v5/manual/instances.html
const seedUserEntries = () => UserEntries.bulkCreate(userEntry);

//export to seeds index to call function
module.exports = seedUserEntries;
