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
var userText = [];
var wins = 0;
var loses = 0;
// To verify this code works => It works; This code goes within the function that does the contains the comparison operator(S)
var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 
console.log(compPick); 
// var userPick = event.key;


    // document.addEventListener("keyup", userTxt); 

    // function userTxt(){
        // var userGuess = addEventListener /* change method */ ("keyup", userTxt2);
        // userGuess.value = userGuess.value.toLowerCase();
        // console.log(userGuess);

        // document.getElementById("guess").addEventListener("keyup", userTxt)


   

    //         if (userGuess[i] === compPick) {
                
    //         }
    // }

//    document.onkeyup = function(){
// fire .getElementById first or .addEventListener first?
 //   document.getElementById("guess").addEventListener("keyup", userText);
       
var userPick = document.addEventListener("onkeyup", compare);
 
function compare (compPick, userPick) { 
    var compPick = alphabet[Math.floor(Math.random() * alphabet.length)]; 

  //  for (i = 0; i < 9; i++) {


    }    

//       var letters = document.getElementById("guess");
//     guess.value = guess.toLowerCase();
    


 //   console.log(userGuess[i]);
 //   console.log(userTxt);

//  var userText = event.key; Easier way, will need to add console.log to log user choices 1-9 //
//  var letter = event.key.toLowerCase(); not to be used when grabbing a string from <input> //
 

// Javascript to grab user input into <input> field //
// var userInput = getElementById("selection").innerHTML;




// if (var letter !== compPick) {
//     alert ("This code is working");
// }

// Creates variable to log user input/guess //
// var userGuess = 



// User input //


// var userPick = document.getElementById("userText");


/* Use to update Wins/Losses 
    function newStats (){
        console.log

    }

*/

// Main Process //

/* Notes

"Win" conditional operator should be "==="
function to update Wins/Losses, performed with updating the console.log
Conditional based upon boolean
Loop for multiple user input attempts

*/
 
/* Need to check, but probably not necessary with userText defined
qdocument.onkeyup = function(event){
   var userInput
*/

 // if (userText === compPick) {
     
 // }

// else (userText !=== compPick) {
//     function for losses  1

 