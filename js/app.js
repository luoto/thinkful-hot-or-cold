var guess;
var targetNum;
var numGuesses;
var guesses;

$(document).ready(function(){
    newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Start a new game ---*/
    $(".new").click(function() {
        newGame();
    });

    /*--- Process user input ---*/
    $("#guessButton").click(function(e) {
        e.preventDefault();

        // get and validate user input
        guess = $('#userGuess').val();
        if(!validInput(guess)) {
            updateFeedbackMsg('Guess must be between 0 and 100');
            return;
        }

        // check to see if user won
        if(guess == targetNum) {
            updateFeedbackMsg('1000% HOT, Congrats!');
            $('#guessButton').prop('disabled', true);
            return;
        }

        // provide hot || cold feedback
        hotnessLevel();

        // update counter and guess list
        $('#count').text(++numGuesses);
        $('#guessList').append('<li>' + guess + '</li>');
    });

});

/*--- Starts a new game by resetting the fields ---*/
function newGame() {
    console.log('new game started');
    numGuesses = 0;
    targetNum = randNum();
    $('#guessList').html('');
    $('#feedback').text('Make your Guess!');
    $('#count').text('0');
    $('#guessButton').prop('disabled', false);
};

/*--- Generates a random int between 0 and 100 ---*/
function randNum() {
    return Math.floor(Math.random() * 100 + 1);
};

/*--- Checks userinput for a valid numerical input ---*/
function validInput(guess) {

    if(isNaN(+guess)) {
        return false;
    }
    else if(guess < 0 || guess > 100) {
        return false;
    }
    else {
        return true;
    }
};

/*--- Provides feedback to the user ---*/
function hotnessLevel() {
    var diff = Math.abs(targetNum - guess);

    if(diff > 50) {
        updateFeedbackMsg('Ice Cold');
    }
    else if(diff > 30) {
        updateFeedbackMsg('Cold');
    }
    else if(diff > 20) {
        updateFeedbackMsg('Warm');
    }
    else if(diff > 10) {
        updateFeedbackMsg('Hot');
    }
    else {
        updateFeedbackMsg('Very Hot');
    }
};

/*--- Updates text in the feedback box ---*/
function updateFeedbackMsg (msg) {
    $('#feedback').text(msg);
};