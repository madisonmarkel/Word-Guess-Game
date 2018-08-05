// next goals
// how to alert user to pick a letter instead of a number??
// display specific image when user wins specific word

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
        for (var i = 0; i < displayedWord.length; i++) {
            if (displayedWord[i] === userGuess) {
                guesses[i] = userGuess;
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
      
        // winner winner - WORKING
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
});