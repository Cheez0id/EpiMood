const { UserEntries } = require("../models");
const router = require("express").Router();

// primary Trying to make routes modularized;

router.get("/allData", async (req, res) => {
	UserEntries.findAll().then((userData) => {
		console.log("Gotta Catch 'Em All!");
		res.json(userData);
	});
});

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
