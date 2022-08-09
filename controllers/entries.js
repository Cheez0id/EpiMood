const { UserEntries } = require("../models");
const router = require("express").Router();
const sequelize = require("sequelize");

//--------------------
// Routes for a RESTful API!!

//shows all of the userentries data in JSON
router.get("/allEntries", async (req, res) => {
  UserEntries.findAll().then((entryData) => {
    console.log("Gotta Catch 'Em All!");
    res.json(entryData);
  });
});

//shows a list of entries with episodes
router.get("/allEntries/episodes", async (req, res) => {
  UserEntries.findAll(episodes).then((entryData) => {
    console.log("Found episodes!");
    res.json(entryData);
  });
});

//shows a list of entries with moods
router.get("/allEntries/mood/", async (req, res) => {
  UserEntries.findAll(mood).then((entryData) => {
    console.log("Found moods!");
    res.json(entryData);
  });
});

//Creates a new entry with specified values (TODO:make it so that the user can put whatever they want;RIGHT NOW THE REQ.BODY.INPUTS AREN'T ANYTHING, AND YEAH. NEED TO MAKE THEM THINGS.)
router.post("/newEntry", async (req, res) => {
  console.log("yoooooooooooo ", req.body);
  UserEntries.create({
    mood: req.body.mood,
    episode: req.body.episode,
    text: req.body.text,
    makePrivate: req.body.makePrivate,
  }).then((newEntry) => {
    console.log("making a new entry");
    res.status(200).send("a new entry was created");
  });
});

// let variablee= `2022-02-15T23:23:28.000Z`;

//Updates a specific entry with a specified value (TODO: make it so that the user can select a specific entry and update different values)
router.put("/editEntry", async (req, res) => {
  let variablee = "2022-02-15" + "T23:23:28.000Z";
  UserEntries.update(
    {
      text: "a very different text update RETURNS THE SEQUELBOB MAKES HIS ESCAPE WITH SANTA",
    },
    {
      where: {
        createdAt: `${variablee}`,
      },
    }
  );
  UserEntries.findAll().then((userData) => {
    console.log("showing them all to you with updates!");
    res.json(userData);
  });
});

//Destroys all entries
router.delete("/deleteAll", async (req, res) => {
  UserEntries.destroy(
    {
      where: {},
      truncate: true,
    },
    res.json([])
  ).then(
    function () {
      console.log("Deleted successfully");
    },
    function (err) {
      console.log(err);
    }
  );
});

//Destroys a specified entry by ID (TODO: Make it so that the user can specify which entry to destroy)
router.delete("/deleteEntry/:id", async (req, res) => {
  UserEntries.destroy(
    {
      where: {
        id:1
      }
    },
    res.json([])
  ).then(
    function () {
      console.log("Deleted successfully");
    },
    function (err) {
      console.log(err);
    }
  );
});

module.exports = router;
