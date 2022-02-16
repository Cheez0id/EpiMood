const { UserEntries } = require("../models");
const router = require("express").Router();

// Routes for a RESTful API

//shows all of the data in JSON
router.get("/allData", async (req, res) => {
	UserEntries.findAll().then((userData) => {
		console.log("Gotta Catch 'Em All!");
		res.json(userData);
	});
});

//Creates a new entry with specified values (TODO:make it so that the user can put whatever they want)
router.post("/newEntry", async (req, res) => {
	UserEntries.create({
		mood: 3,
		episode: true,
		text: "This is another new entry",
		makePrivate: true,
	}).then((newEntry) => {
		console.log("making a new entry");
	});
});

//Updates a specific entry with a specified value (TODO: make it so that the user can select a specific entry and update different values)
router.put("/editEntry", async (req, res) => {
  UserEntries.update({ 
    text: 'a very different text update RETURNS'
   },
   {
    where: {
      createdAt: "2022-02-15T23:23:28.000Z"
    }
	}).then(
    UserEntries.findAll().then((userData) => {
      console.log("showing them all to you with updates!");
      res.json(userData)})
    );
});

//Destroys a specified entry by ID (TODO: Make it so that the user can specify which entry to destroy)
router.delete("/deleteEntry", async (req, res) => {
	UserEntries.destroy(
   {
    where: {
      id: 2
    }
	}).then(function(){
       console.log('Deleted successfully');
     }, function(err){
      console.log(err); 
  });
});

module.exports = router;
