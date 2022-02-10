const { UserEntries } = require("../../models");

const userEntry = [
  {
    id: 1,
    mood: 3,
    episode: false,
    text: "this is a test note",
    makePrivate: true,
  },
];


const seedUserEntries = () => UserEntries.bulkCreate(userEntry);

module.exports = seedUserEntries;
