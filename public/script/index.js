// const express = require('express');
// const app = express();

//creating an onlonad event with a quick alert box
window.onload = function () {
  alert(
    "!WARNING! This is a SAMPLE app! Anything that you submit is CURRENTLY VISIBLE TO THE PUBLIC!"
  );
};

let allRoute = "";
let allLocalData = "http://localhost:80/allEntries";
let allDeployedData = "https://epimoodtracker.herokuapp.com/allEntries";
console.log(window.location.href);
if (window.location.href == "http://localhost/") {
  allRoute = allLocalData;
} else {
  allRoute = allDeployedData;
}

//Displays all DB entries as 'cards' on the page
const details = document.getElementById("result");

function allEntries() {
  fetch(allRoute)
    .then((response) => response.json())
       .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("p");
        entry.className = "card";
        entry.innerHTML = ` 
    Entry ID# ${data[i].id} Created on ${data[i].createdAt}<br>
    Note: ${data[i].text} <br> Today's Mood: ${data[i].mood} <br> Episode Today?: ${data[i].episode} <br> 
  Private? ${data[i].makePrivate}`;
        details.append(entry);
        
      }

      //  `Today's Mood: ${data[i].mood} <br>
      //  Private? ${data[i].makePrivate}`;
      //  console.log(data[0]);
      });
      console.log('yay!')
}

function detailsLoop(){
  console.log(details.children.length);
    
  for (let i=0; i < details.children.length; i++){
    console.log(details.children[i]);
     details.children[i].remove()
  }
  
}

async function allDetails(){
await detailsLoop()
}

document
  .getElementById("viewAllEntries")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (details.children.length !== 0)
    allDetails().then
    allEntries();
 });

function selectedMood() {
  let ele = document.getElementsByName("moodToday");
  let mood;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked === true) {
      mood = ele[i].value;
    }
  }
  return mood;
}

const hasEpisode = () => {
  return document.getElementById("episodeCheckBox").checked;
};

const makePrivate = () => {
  return document.getElementById("makePrivateCheckBox").checked;
};

const todayNote = () => {
  return document.getElementById("noteToday").value;
};

let newEntryRoute = "";
let newLocalEntry = "http://localhost:80/newEntry";
let newDeployedEntry = "https://epimoodtracker.herokuapp.com/newEntry";
if (window.location.href == "http://localhost/") {
  newDeployedEntry = newLocalEntry;
} else {
  newDeployedEntry = newDeployedEntry;
}

document
  .getElementById("createNewEntry")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    await fetch(newDeployedEntry, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mood: selectedMood(),
        episode: hasEpisode(),
        text: todayNote(),
        makePrivate: makePrivate(),
      }),
    });
  });

// this will refresh the page
document
  .getElementById("refreshPage")
  .addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
  });

// delete all incluiding a warning prompt
let deleteRoute = "";
let deleteLocalData = "http://localhost:80/deleteAll";
let deleteDeployedData = "https://epimoodtracker.herokuapp.com/deleteAll";
if (window.location.href == "http://localhost/") {
  deleteRoute = deleteLocalData;
} else {
  deleteRoute = deleteDeployedData;
}

document
  .getElementById("deleteAll")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (confirm("!WARNING! THIS WILL PERMANENTLY DELETE ALL ENTRIES!")) {
      fetch(deleteRoute, { method: "DELETE" }).then;
      console.log("deletedEverything");
      location.reload();
    }
  });

// delete one including a prompt
let deletOneRoute = "";
let idInput = document.getElementById("idInput").value;

document
  .getElementById("deleteOne")
  .addEventListener("click", function (event) {
    let idInput = document.getElementById("idInput").value;
    let deleteLocalOne = `http://localhost:80/deleteEntry/${idInput}`;
    let deleteDeployedOne = `https://epimoodtracker.herokuapp.com/deleteEntry/${idInput}`;
    if (window.location.href == "http://localhost/") {
      deleteOneRoute = deleteLocalOne;
    } else {
      deleteOneRoute = deleteDeployedOne;
    }

    event.preventDefault();
    fetch(deleteOneRoute, { method: "DELETE" }).then;
    console.log(`deleted ${idInput}`);
  });

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

//something about showing moods
// //The radio selection on the form; currently the function will loop through each radio named 'moodtoday' and will take the checked radio, then put the value into the result area below;
// //TODO: take the radio value and create a variable-? It needs to be able to go into the post function; moodvariable is already created, let's just use that
// function displayRadioValue() {
// 	// let ele = document.getElementsByName("moodToday");
// 	// for (i = 0; i < ele.length; i++) {
// 	// 	if (ele[i].checked)
// 	// 		document.getElementById("result").innerHTML =
// 	// 			"MoodToday: " + ele[i].value;
// 	// 			//this is me trying to export value
// 	// 	let moodNumber = ele[i].value;
// 	// }

// 	document.getElementById("result").innerHTML = "MoodToday: " + selectedMood();
// }

//moodInputs = [{checked: false, mood: 1}, {checked: true, mood: 2}, {checked: false, mood: 3}]
//checkedMood = moodInputs.find(moodInput => moodInput.checked === true);
// checkedMood is {checked: true, mood: 2}
// module.exports = { moodNumber };
