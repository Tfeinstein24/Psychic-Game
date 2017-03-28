// Create Array of Letters

var alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];

// Set Counters to Zero

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Computer Generates Random Letter

var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	
console.log(getRandomLetter);






// Create User On-Click Event

document.onkeyup = function(event) {
    console.log(event.key);

// Update User Guesses so far
var UserGuess = event.key;
guessedLetters.push(UserGuess);
document.getElementById('sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");

// Update Guesses Left

document.getElementById('guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
guessesLeft--;


// Reset Function
var reset = function() {
	wins = 0;
	losses = 0;
	guessesLeft = 9;
	guessedLetters = [];
	
}




	

// Create Wins and Losses
	
	if (event.key == getRandomLetter) {
		wins++;
		console.log(wins);
		getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		alert("Damn, son!");
		
		
	}


	else {
		losses++;
		console.log(losses);
		document.querySelector('#losses').innerHTML = "Losses: " + losses; 
		alert("You suck!");

		}

	if (guessesLeft == 0) {
		reset();
	}

	

	

	
	
};