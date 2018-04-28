var Word = require("./Word.js");
var randomWords = require("random-words");
var words = randomWords({ exactly: 50 });

function WordSelect() {
	this.guessesLeft = 10;
	this.lettersGuessed = [];
	this.newGame = function() {
		this.guessesLeft = 10;
		this.lettersGuessed = [];
		this.word = this.randomWord();
	};

	this.randomWord = function() {
		var randomWord = words[Math.floor(Math.random() * words.length)];
		var newWord = new Word(randomWord);
		return newWord;
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
}	

module.exports = WordSelect;