//this is just testing connection between this file and the index.html. how do I make this talk to tbe backend?

function displayRadioValue() {
	let ele = document.getElementsByName("moodToday");
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			document.getElementById("result").innerHTML =
				"MoodToday: " + ele[i].value;
	}
}

document
	.getElementById("submitMood")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("you clicked the form");
		displayRadioValue();
	});


//attempting to put all entries	
const details =	document.getElementById("result")
document
	.getElementById("viewAllEntries")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log("you gonna see it all!");
		fetch("http://localhost:80/allData")
			.then((response) => response.json())
			// .then((data) => console.log(JSON.stringify(data)))
			.then (function(data){
				for (let i = 0; i < data.length; i++){
					let entry = document.createElement("p")
				entry.innerHTML= `Note: ${data[i].text} <br>`
				 details.append(entry)}

				//  `Today's Mood: ${data[i].mood} <br> 
				 //  Private? ${data[i].makePrivate}`;
				//  console.log(data[0]);
				 console.log(data)
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
			.then (function(data){document.getElementById("result").innerHTML
			= (JSON.stringify(data))})
	});

//I would very much like to make a post request.
	// document
	// .getElementById("createNewEntry")
	// .addEventListener("click", function (event) {
	// 	event.preventDefault();
	// 	console.log("We'll try and post something");
	// 	fetch("http://localhost:80/newEntry")
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// });
