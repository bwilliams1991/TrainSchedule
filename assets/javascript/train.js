

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCWdgmQV9uNPW0nx80ic11NCiOOJsBp4e4",
	authDomain: "train-455dd.firebaseapp.com",
	databaseURL: "https://train-455dd.firebaseio.com",
	projectId: "train-455dd",
	storageBucket: "train-455dd.appspot.com",
	messagingSenderId: "543870753070"
};


firebase.initializeApp(config);


var database = firebase.database();

var name = '';
var dest = '';
var freq = '';
var start = 0;

$("#submitInfo").on("click", function (event) {
	// Prevent form from submitting
	event.preventDefault();

	// Get the input values
	name = $("#trainName").val().trim();
	dest = $("#trainDest").val().trim();
	freq = $("#trainFreq").val().trim();
	start = $("#trainStart").val().trim();


	// Save the new data in Firebase
	database.ref().push({
		name: name,
		dest: dest,
		freq: freq,
		start: start,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
	// console.log(database.ref());

});

database.ref().on("child_added", function (snapshot) {
	// console.log("I had a child!");
	var tdName = snapshot.val().name;
	var tdDest = snapshot.val().dest;
	var tdFreq = snapshot.val().freq;
	var tdStart = snapshot.val().start;
	// var dateFormat = ("MM/DD/YYYY");
	// var convertedDate = moment(tdStart).format(dateFormat);

	// var tdMonths = moment().diff(moment(convertedDate), "minutes");
	// var tdTotal = tdMonths * tdstart;
	// if (tdMonths <= 0) {
	// 	tdTotal = 0;
	// }
	// var now = moment().format(dateFormat);

	// $("#trainTable").append("<tr><td>" + "tdName" + "</td><td>" + "tdDest" + "</td><td>" + "tdMonths" + "</td><td>$" + "tdStart" + "</td><td>$" + "tdTotal" + "</td></tr>");

	$("#trainTable").append("<tr><td>" + tdName + "</td><td>" + tdDest + "</td><td>" + tdFreq + "</td><td>" + tdStart + "</td><td>");
});