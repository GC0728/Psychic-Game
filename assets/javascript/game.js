/* Notes:

Main Objective: userPick == compPick
If....else if....else
event.key

*/ 

// Global arrays and variables 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y","z"];
var wins = 0;
// var losses = 0; losses < 10; THIS DOESN'T WORK
var losses = 0;
// TO HOLD USER KEY EVENTS (9 MAX)
var guessMade = [];
// To verify this code works => It works; This code goes within the function that does the contains the comparison operator(S)
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(compPick);

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
console.log(displayLetter);



document.onkeyup = function(userLetter) {

//  TO LOG THE USER KEYUP AND CONVERT IT TO LOWERCASE
var userGuess = userLetter.key;
var userGuessLower = userGuess.toLowerCase();
console.log(userLetter);
displayLetter.innerHTML = "Guesses Made: " + userGuessLower;

// GENERATE A RANDOM COMPUTER PICK FROM ALPHABET ARRAY
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(compPick);
console.log(userGuess);
console.log(userGuessLower);
 
// -1 NOT WORKING
if (alphabet.indexOf(userGuessLower) > -1) {

// -----------DOES THIS WORK BETTER ALL IN ONE FUNCTION? --------------------------------------
if (userGuess === compPick) {
// THIS IS NOT WORKING    
  var winsCounter = wins++;
  console.log(winsCounter);
////////////////////////////////////////////////
}

// 03/02/2019: lossesCount not working; THIS MAY REQUIRE FUNCTION WITHIN A FUNCTION TO OUTPUT/WRITE TO THE HTML
// 03/03/2019: issue may be that the correct array is not being referenced
// 03/03/2019: THIS WORKS, BUT IT'S lossess++ is not stopping at 9
// else if (userGuess != compPick) {
// 
else {
      guessMade.push(userGuessLower);
      console.log(guessMade);
      console.log(losses);
      losses++;
  };
//  [i] and ["i"] both throw undefined; 
//  var lossesCount = losses.length; LOOP NOT REQUIRED
 //   for (var i = 0; i < 9; i++);
    // losses++;
  };
};  

////////////////////////////////////////////////    

//   document.getElementById("lossCount").innerHTML.append(lossesCount);

////////////////////////////////////////////////////////////////////////////////////

// else
//   alert ("NOPE!");
  // restart psychic game code goes here



// THIS IS CAUSING var userGuess to fail to execute
// for (var i = 0; i < lossesCount; i++){
// console.log(i);
// }
///////////////////

/* var compPickLower = compPick.toLowerCase(); Arrays is in lower. "toLowerCase();" needs to be done to userInput
console.log(compPickLower); */

// document.addEventListener("onkeyup", userInput);
// function userInput {
//     var userText = document.addEventListener("onkeyup", guesses);
//     var guesses = event.key;
// }
    
// var guesses = document.addEventListener("onkeyup", );
//     console.log(guesses);

// rewrite html
// 03/03/2019: this may not be working b/c the correct array is not being referenced
// var updatePsychic = 
// "<h1> Psychic game + </h1>" +
    // "<h3>Wins:" + wins + "</h3>" +
    // "<h3>Losses:" + losses + "</h3>" ;
// THESE TWO ELEMENTS NEED TO BE UPDATED AFTER EVERY KEYUP  
//  "<h3>Guesses Made:" "</h3>" +;
//  "<h3>Guesses Remaining:" "</h3>";
