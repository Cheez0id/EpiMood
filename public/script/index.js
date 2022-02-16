

//this is just testing connection between this file and the index.html. how do I make this talk to tbe backend?



	function displayRadioValue() {
		var ele = document.getElementsByName('moodToday');
			for(i = 0; i < ele.length; i++) {
				if(ele[i].checked)
				document.getElementById("result").innerHTML
								= "MoodToday: "+ele[i].value;
		}
}


document.getElementById("submitMood").addEventListener("click", function (event) {
	event.preventDefault();
	console.log("you clicked the form");
	displayRadioValue();
	});
