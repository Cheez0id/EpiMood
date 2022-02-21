// const express = require('express');
// const app = express();

//creating an onlonad event with a quick alert box
window.onload = function () {
	alert(
		"!WARNING! This is a SAMPLE app! Anything that you submit is CURRENTLY VISIBLE TO THE PUBLIC!"
	);
};

//The radio selection on the form; currently the function will loop through each radio named 'moodtoday' and will take the checked radio, then put the value into the result area below;
//TODO: take the radio value and create a variable-? It needs to be able to go into the post function; moodvariable is already created, let's just use that
function displayRadioValue() {
	// let ele = document.getElementsByName("moodToday");
	// for (i = 0; i < ele.length; i++) {
	// 	if (ele[i].checked)
	// 		document.getElementById("result").innerHTML =
	// 			"MoodToday: " + ele[i].value;
	// 			//this is me trying to export value
	// 	let moodNumber = ele[i].value;
	// }

	document.getElementById("result").innerHTML = "MoodToday: " + selectedMood();
}

//moodInputs = [{checked: false, mood: 1}, {checked: true, mood: 2}, {checked: false, mood: 3}]
	//checkedMood = moodInputs.find(moodInput => moodInput.checked === true);
	// checkedMood is {checked: true, mood: 2}


//the below is not really necessary, it was just to make sure the radio works; however maybe we can use it to quickly show the user's most recent submission to the form instead of making another db call; "you submitted X"
document
	.getElementById("submitMood")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("you clicked the form");
		displayRadioValue();
	});

//Displays all DB entries as 'cards' on the page
const details = document.getElementById("result");
document
	.getElementById("viewAllEntries")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("you gonna see it all!");
		fetch("http://localhost:80/allData")
			.then((response) => response.json())
			// .then((data) => console.log(JSON.stringify(data)))
			.then(function (data) {
				for (let i = 0; i < data.length; i++) {
					let entry = document.createElement("p");
					entry.className = "card";
					entry.innerHTML = `Note: ${data[i].text} <br> Today's Mood: ${data[i].mood} <br> 
				Private? ${data[i].makePrivate}`;
					details.append(entry);
				}

				//  `Today's Mood: ${data[i].mood} <br>
				//  Private? ${data[i].makePrivate}`;
				//  console.log(data[0]);
				console.log(data);
			});
	});

//a test get request to get entries with mood set to '2'
document
	.getElementById("viewAllMoods")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("you gonna see it all!");
		fetch("http://localhost:80/allData/mood")
			.then((response) => response.json())
			// .then((data) => console.log(JSON.stringify(data)))
			.then(function (data) {
				document.getElementById("result").innerHTML = JSON.stringify(data);
			});
	});

//I would very much like to make a post request.
// RESEARCH, DO WE DO A FETCH REQUEST TO POST TO DB

function selectedMood() {
	let ele = document.getElementsByName("moodToday");
	let mood
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked === true){
			mood = ele[i].value
		}}
	return mood;
	}

const hasEpisode = () => {document.getElementById('episodeCheckBox').checked}

document
	.getElementById("createNewEntry")
	.addEventListener("click", async function (event) {
		event.preventDefault();
		await fetch('http://localhost:80/newEntry',
		{ 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
				mood: selectedMood(),
				episode: hasEpisode(),
				text: 'Mary is the BESTEST and SMARTEST!!!',
				makePrivate: false
			})
		})
	});

	

// module.exports = { moodNumber };

// ------------------------------- IGNORE BELOW, IT'S REFERENCE CODE----------------------//

// async function newFormHandler(event) {
//   event.preventDefault();
//   // Send fetch request to add a new dish
//   const response = await fetch(`/api/dish`, {
//     method: 'POST',
//     body: JSON.stringify({
//       dish_name,
//       description,
//       guest_name,
//       has_nuts,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   //if the dish is added, the 'all' template will be rerendered
//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert('Failed to add dish');
//   }
// }

// document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);