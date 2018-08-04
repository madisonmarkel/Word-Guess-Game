// how to alert user to pick a letter instead of a number
// how to put a limit on guesses

// Arrays



// User Press
document.addEventListener("DOMContentLoaded", function(event) {

var wins = 0;
var losses = 0;

var guessesLeft;
var wrongGuesses;
var guesses = [];
var wordOptions;
var displayedWord;


//Functions
    //reset the game if you lose or win
function reset() {
    guessesLeft = 10;
    guesses = [];
    wrongGuesses = [];
    wordOptions = ["michelangelo", "monet", "clyfford still", "picasso"];
    displayedWord = "";
    displayedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    //this function makes the artist name into dashes
    for (var i = 0; i < displayedWord.length; i++) {
        if (displayedWord[i] == " ") {
            guesses[i] = " ";
        } else {
            guesses[i] = "-";
        }
    }
}

    reset();
    
    document.onkeyup = function(event) {

        //determines what key is pressed
          var userGuess = event.key;
          var correctGuess = false;
          var alreadyGuessed = false;

        
        // if statement limiting multiple wrong guesses (same letter)
        if (wrongGuesses.indexOf(userGuess) >= 0) {
            alert("You already guessed that dummy");
            alreadyGuessed = true;
        }
        
        //Loop to replace dashes with correct guess -- WORKING
          for (var j = 0; j < displayedWord.length; j++) {
      
              if (displayedWord[j] === userGuess) {
                guesses[j] = userGuess;
                correctGuess = true;
              }
          }
      
          //puts wrong/right guess in the list -- WORKING
          if (!correctGuess && !alreadyGuessed){             
              wrongGuesses.unshift(userGuess);
              guessesLeft--;
            }               
      
          // Limits guesses -- WORKING
          if (guessesLeft === 0){
               alert("loser");
               reset();
          }
      
          // winner winner - NOT WORKING
          if (guesses.every((character, i) => character === displayedWord[i])) {
              wins++;
              alert("winner winner chicken dinner");
              reset();
          }
        
        //HTML Input
                  var html = 
                  "<p>Guess this word: " + guesses.join("") + "</p>" +
                  "<p>Your guesses: " + wrongGuesses.join(", ") + "</p>" +
                  "<p>Guesses Left: " + guessesLeft + "</p>" +
                  "<p> Wins: " + wins + "</p>";
      
      
                  document.querySelector("#game").innerHTML = html;
              
      };

      return true;
});























/*

function newFunction() {
    if (wrongGuesses = 15) {
        alert("loser.");
    }
}
/*
// Arrays
var words = ["van gogh", "monet", "clyfford still", "picasso"];
var wins = 0;
var losses = 0;
var lettersGuessed = userPress;
var userPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesLeft = 10;
var guesses= [];

// If statements
    if ()





/* if a user presses a key that matches an index letter in the hangManWord then the blank space is replaced with that key.
    lettersGuessed does not change
    number of guesses goes down
else if a user presses a key that does not match an index letter in the hangManWord then that guess is listed in lettersGuessed

if lettersGuessed = 0 then loses goes up by one.
    game resets;

if full hangManWord is guessed than win goes up by 1 */
/*
// Arrays
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var lettersGuessed = "";
    var hangmanWords = ["van gogh", "monet", "clyfford still", "picasso"];
    var vanGoghBlankSpaces = ["_", "_", "_", "_", "_", "_", "_",];
//Functions
    //this function makes the artist name into dashes
    for (var i = 0; i < words.length; i++) {
        guesses[i] = "-";
    }

    //this function replaces dash with correct guess letter
    for (var j = 0; j < randomComposer.length; j++) {

        if (randomComposer[j] === userGuess) {
            guessComposer[j] = userGuess;
        }
    }

// Calling on functions
    // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {

        // Determines which key was pressed.
            var userGuess = event.key.toLowerCase();

            // Code for Van Gogh
        if ((userGuess === "v") || (userGuess === "a") || (userGuess === "n") || (userGuess === "g") || (userGuess === "o") || (userGuess === "h")) {
            //Specific Letters
                if (userGuess ==="v") {
                    vanGoghBlankSpaces.indexOf(0).replaceWith("v");
                }
                if (userGuess === "a") {
                    vanGoghBlankSpaces.indexOf(1).replaceWith("a");
                }
                if (userGuess === "n") {
                    vanGoghBlankSpaces.indexOf(2).replaceWith("n");
                }
                if (userGuess === "g") {
                    vanGoghBlankSpaces.indexOf(3, 5).replaceWith("g");
                }
                if (userGuess === "o") {
                    vanGoghBlankSpaces.indexOf(4).replaceWith("o");
                }

            else {
                document.write(lettersGuessed);
                guessesLeft--;
            };
            
            if (guessesLeft = 0) {
                alert("You lose");
            }

            if (userGuess == hangmanWords) {
                win++;
                // function starting new word (with random math generator)
            }
        var html =
            "<p>" + vanGoghBlankSpaces + "</p>" +
            "<p> You chose: " + lettersGuessed + "</p>" +
            "<p> Wins: " + wins + "</p>" + 
            "<p> Guesses left: " + lettersGuessed + "</p>";

        document.querySelector("#game").innerHTML = html;
        }
    };




/*
// Arrays
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var vanGoghLetters = ["v", "a", "n", "g", "o", "h"];



//Actual code
    // This function is run whenever the user presses a key.
        document.onkeyup = function(event) {
            var userGuess = event.key;

            if (userGuess === vanGoghLetters ) {
                guessesLeft--;
                replaceWithRightLetter;
            } else {
                listOfChosenLetters;
                guessesLeft--;
            }
            if (guessesLeft = 0) {
                alert("you lost");
            }

    // Creating a variable to hold our new HTML.
            var html = 
                "<p>You chose: " + userGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses left: " + guessesLeft + "</p>";
    // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#game").innerHTML = html;
    };






























/*
// Arrays
    //The words
        var hangmanWords = ["van gogh", "monet", "clyfford still", "picasso"];
        var vanGoghLetters = ["v", "a", "n", "g", "o", "h"];
    //Picks a random word
        var hangmanWords = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    // The blank spaces that match the length of the hangmanWords
        var answer = [];
        for (var i = 0; i < hangmanWords.length; i++) {
            answer[i] = "_";
        }
    // The users guess
        var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Variables
    var win = 0;
    var losses = 1;
    var guessesLeft = 6;
    var lettersAlreadyGuessed = hangmanWords.length;

//Functions
    //replaces _ with user guess
        function replaceWithRightLetter() {
            answer.replace("_", userGuess);
        }
    // puts guess in letters already chosen
        function listOfChosenLetters() {
            answer.document.write(userGuess);
        }

    // this function is run whenever the user presses a key
        document.onkeyup = function(event) {
            var userGuess = event.key;

    // If statements
        if ((userGuessVanGogh === "v") || (userGuessVanGogh === "a") || (userGuessVanGogh === "n") || (userGuessVanGogh === "g") || (userGuessVanGogh === "o") || (userGuessVanGogh === "h")) {

            if (userGuessVanGogh === vanGoghLetters) {
                //  a function that replaces _ with correct user guess ;
                replaceWithRightLetter;
            }
        else {
            guessesLeft--;
            listOfChosenLetters;
        }

    //Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html = 
        "<p>Wins: " + win + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "<p>" +
        "<p>Letters Already Guessed: " + lettersAlreadyGuessed + "</p>";

    // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#game").innerHTML = html;
        }
        };







    // Function Loops
/*while (lettersAlreadyGuessed > 0) {
    document.write(answer);

}




// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
// Determines which key was pressed.
    var userGuess = event.key;
// Only run the following code block if the user presses "r" or "p" or "s".
    if ((userGuessVanGogh === "v") || (userGuessVanGogh === "a") || (userGuessVanGogh === "n") || (userGuessVanGogh === "g") || (userGuessVanGogh === "o") || (userGuessVanGogh === "h")) {

        if (userGuessVanGogh === vanGoghLetters) {
            // write a function that replaces _ here ;
        }
    else {
        guessesLeft--;
        // function putting lettersAlreadyGuessed
    }

    var html = 
        "<p>Wins: " + win + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "<p>" +
        "<p>Letters Already Guessed: " + lettersAlreadyGuessed + "</p>";

// Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };


//    if 
//    user presses keys v, a, n, g, o, or h, then
//     the correspoding blank section is filled,
//      guesses left goes down by 1, and letters
//     guessed goes up by 1.
//   else if
//    guessesLeft goes down by one;
//  else
// guessesLeft === 0 then losses goes up by 1 and
//  game resets
*/







