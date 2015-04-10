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

    $(".new").click(function() {
        newGame();
    });

    $("#guessButton").click(function(e) {
        e.preventDefault();

        //get and validate user input
        guess = $('#userGuess').val();
        if(!validInput(guess)) {
            updateFeedbackMsg('Guess must be between 0 and 100');
            return;
        }

        if(guess == targetNum) {
            updateFeedbackMsg('1000% HOT, Congrats!');
            $('#guessButton').prop('disabled', true);
        }

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

function randNum() {
    return Math.floor(Math.random() * 100 + 1);
};

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
}

function updateFeedbackMsg (msg) {
    $('#feedback').text(msg);
}
