/* Notes:

Main Objective: userPick == compPick
If....else if....else
event.key

*/ 

// Global arrays and variables 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesRemaining = 9;
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 

// onClick toggle event for modal-instructions
var instructModal = document.getElementById("modal-instructions");
var instructBtn = document.getElementById("instructBtn");
instructBtn.onclick = function() {
  if (instructModal.style.display === "none") {
  instructModal.style.display = "block";
  } else {
    instructModal.style.display = "none";
  };
};

// getElementByIds


// Function to compare user input to random generated number
function checkLetter(letter, compPick) {
  if (letter === compPick) {
    wins++;
  } else {
    guessesMade.push(letter);
    losses++;
    guessesRemaining--;
  };
};


document.onkeyup = function(event) {
  console.log(event);

// GENERATE A RANDOM COMPUTER PICK FROM ALPHABET ARRAY
  var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 

//  Store keyup letter in userGuess variable
  var userGuess = event.key.toLowerCase();

// Display most recent guess
  var displayLetter = document.getElementById("userGuess");
  displayLetter.innerHTML = "Previous Guess " + userGuess; 

  // Display guesesMade Array
  var madeGuesses = document.getElementById("pickedLetter");
  madeGuesses.innerHTML = "Guesses Made: " + guessesMade;

// Display guessesRemaining
  var numRemaining = document.getElementById("remaining");
  numRemaining.innerHTML = "Number of Guesses Remaining " + guessesRemaining;

// Display wins counter
  var winsCounter = document.getElementById("winsCount");
  winsCounter.innerHTML = "Wins " + wins;

// Display losses counter
  var lossCounter = document.getElementById("lossCount");
  lossCounter.innerHTML = "Loses " + losses;
 
  checkLetter(userGuess, compPick);
  console.log(compPick);
  console.log(wins);
  console.log(losses);

};  


