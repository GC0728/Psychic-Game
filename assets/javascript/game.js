/* Notes:

Main Objective: userPick == compPick
If....else if....else
event.key

*/ 

// <script>

// Alert box to notify welcome the user // For code order, the below needs to go after the variable declarations
alert ("Let's play a game!");
alert ("You have nine attempts per round to guess the same letter as the computer");
alert ("Guess nine letters of the alphabet", "(a, b, c, etc...)");


// Global arrays and variables 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y","z"];
// var userInput = [];
var wins = 0;
var loses = 0;
// To verify this code works => It works; This code goes within the function that does the contains the comparison operator(S)
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(compPick);



document.onkeyup = function(userLetter) {

var userGuess = userLetter.key;
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(compPick);
var alphabet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y","z"];
console.log(userGuess);
    

if (userGuess === compPick) {
    wins++;

}

// for (var i = 0; i < 9; i++){
// console.log(i);
// }

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
var updatePsychic = 
    "<h1> Psychic game + </h1>" +
    "<h3>Wins:" + wins + "</h3>" +
    "<h3>Losses:" + losses + "</h3>" ;
//    "<h3>Guesses Made:" "</h3>" +
  //  "<h3>Guesses Remaining:" "</h3>"
};