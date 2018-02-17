var WordSelector = require("./WordSelector.js");
var wordSelect = new WordSelector();
var inquirer = require("inquirer");
function start() {
	wordSelect.newGame();
	promptPlayer();
}
function promptPlayer() {
	console.log(wordSelect.word.displayWord());
	inquirer.prompt([
		{
			type:"input", 
			message: "Guess a letter!",
			name:"userGuess",
			validate: function(value) {
				var alpha = /[a-z]+/;
				if (value.length > 1) {
					return "Please select one letter only.";
				} else if (value.match(alpha)) {
					return true;
				} else {
					return "Invalid letter.";
				}
			}
		}
	]).then(function(answer) {
		var userGuess = answer.userGuess.toLowerCase();
		if (wordSelect.lettersGuessed.indexOf(userGuess) === -1) {
			wordSelect.lettersGuessed.push(userGuess);
			var correct = wordSelect.word.checkChar(userGuess);
			if (correct) {
				wordSelect.printResults("correct");
			} else {
				wordSelect.guessesLeft--;
				wordSelect.printResults("incorrect");	
			}
		} else {
			wordSelect.printResults("already guessed");
		};
		var winner = false;
		if (wordSelect.word.checkCorrect()) {
		winner = true;
		} else {
		winner = false;
		}

		if (winner) {
			results('YOU WIN!');
		} else if (wordSelect.guessesLeft > 0) {
			promptPlayer();
		} else {
			results ("You lost.");
		}
	});
};
function results(str) {
	if (str === "YOU WIN!") {
		console.log(wordSelect.word.displayWord());
		console.log("CONGRATULATIONS! YOU WIN!");
	} else if (str === "You lost.") {
		console.log("Sorry, you lost.");
	}
	inquirer.prompt([
		{
			type: 'list',
			message: 'Play again?',
			choices: ['yes', 'no'],
			name: 'again'
		}
		]).then(function(choice){
			if (choice.again == 'yes') {
				start();
			} else if (choice.again == 'no') {
				wordSelect.endGame();
			}
		}
	);
}
start();