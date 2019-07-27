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

// Display userGuessLower
var displayLetter = document.getElementById("pickedLetter");

// Function to compare user input to random generated number
function checkLetter(letter, compPick) {
  if (letter === compPick) {
    wins++;
  } else {
    losses++;
  };
};

document.onkeyup = function(event) {
  console.log(event);
// GENERATE A RANDOM COMPUTER PICK FROM ALPHABET ARRAY
  var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 

//  Store keyup letter in userGuess variable
  var userGuess = event.key.toLowerCase();

// Display last letter guess
  displayLetter.innerHTML = "Guesses Made: " + userGuess;
 
//
  checkLetter(userGuess, compPick);
  console.log(compPick);
  console.log(wins);
  console.log(losses);
};  


