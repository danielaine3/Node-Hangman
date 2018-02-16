var Word = require("./Word.js");
var words = ['cat', 'dog', 'hello', 'goodbye', 'home', 'love'];
var inquirer = require("inquirer");
// var generateWord = require("");
function WordSelect() {
	this.guessesLeft = 6;
	this.lettersGuessed = [];
	this.newGame = function() {
		this.guessesLeft = 6;
		this.lettersGuessed = [];
		this.word = this.randomWord();
	};
	this.randomWord = function() {
		var randomWord = words[Math.floor(Math.random() * words.length)];
		return new Word(randomWord);
	};
	this.printResults = function(str) {
		switch(str) {
			case "already guessed":
				console.log("You already guessed that letter.");
				console.log("Letters already guessed: " + this.lettersGuessed);
				break;
			case "correct":
				console.log("CORRECT!");
				console.log("Number of guesses remaining: " + this.guessesLeft);
				console.log("Letters already guessed: " + this.lettersGuessed);
				break;
			case "incorrect":
				console.log("INCORRECT!");
				console.log("Number of guesses remaining: " + this.guessesLeft);
				console.log("Letters already guessed: " + this.lettersGuessed);
				break;
			default:
				console.log("error");
		}
	};
	this.endGame = function() {
		console.log("Game over.");
	}
};
var wordSelect = new WordSelect();
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
			// promptPlayer();
		};

		var winner = wordSelect.word.displayWord() === wordSelect.randomWord;

		console.log(winner);

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
		console.log("CONGRATULATIONS! YOU WIN!");
	} else if (str === "You lost.") {
		console.log("Sorry, you lost.");
		console.log("The word was " + wordSelect.word.randomWord);
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

			// validate: function(value) {
			// 	var alpha = /[a-z]+/;
			// 	if (value.length > 1) {
			// 		return "Please select one letter only.";
			// 	} else if (value.match(alpha)) {
			// 		return true;
			// 	} else {
			// 		return "Invalid letter.";
			// 	}
			// }