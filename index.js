
// var submitButton = document.getElementById("submitButton");
var recommendation = document.getElementById("recommendation");
var user = document.getElementById("user");
var button = document.getElementById("submitButton");
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var sleep = document.getElementById("sleepbook");


function Book(user,recommendation) {
	this.recommendation = recommendation.value;
	this.user = user.value;
	this.getInfo = getInfo;
}

function getInfo() {
	return '' + this.user + ' recommends ' + this.recommendation;
}

function submitClicked() {
	var firebaseRef = firebase.database().ref();
	// var recommendationText = recommendation.value;
	// var userName = user.value;
	// firebaseRef.push().set(recommendationText);
	// firebaseRef.push().set(userName);
	// firebaseRef.child("Hello").set("hi");

	var bookRec = new Book(user, recommendation)
	var result = bookRec.getInfo()
	firebaseRef.push().set(result)
	// firebaseRef.child(user.value).set(recommendation.value);
	button.value = "DONE";
    modal.style.display = "block";
}

function clearField() {
	document.getElementById("recommendation").value = ""
	document.getElementById("user").value = ""
}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}