/*
var dayofWeek = prompt("What is today?")
console.log("Your password is: " + password)

if (dayofWeek == "Monday") {
	alert("Go to Design");
}
else if (dayofWeek == "Tuesday") {
	alert("Go to Math!");
}
else if (dayofWeek == "Wednesday") {
	alert ("Go to Programming!");
}

else{
	alert("Go Home!");
}



for (var  = 0; bank<=100; bank++){
	console.log(bank);
	if (bank == 70){
		console.log(You can buy a bike!)
	}
}
*/

var today = new Date ();
var hourNow = today.getHours ();
var greeting;
if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}
document.write('<h1>' + greeting + '</h1>');
