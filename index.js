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

function start() {
	new WordSelect().newGame();
	promptPlayer();
}

function promptPlayer() {
	inquirer.prompt([
			{type:"input", 
			message: "Guess a letter!",
			name:"prompt"
		}
	]).then(function(answer) {
		var guess = answer.guess.toLowerCase();
		if (WordSelect().lettersGuessed.indexOf(guess) === -1) {
			wordSelect().lettersGuessed.push(guess);
			var correct = wordSelect.word.checkChar(guess);
			if (correct) {
				wordSelect().printResults("correct");
			} else {
				wordSelect().guessesLeft--;
				wordSelect().printResults("incorrect");
			}
		} else {
			wordSelect().printResults("already guessed");
			promptPlayer();
		}
		var winner = wordSelect().word.guessedWord() === wordSelect().word.randomWord;

		if (winner) {
			results('YOU WIN!');
		} else if (wordSelect().guessesLeft > 0) {
			promptPlayer();
		} else {
			results ("You lost.");
		}
	});
};


function results(str) {
	if (str === "YOU WIN!") {
		console.log("YOU WIN!");
	} else if (str === "You lost.") {
		console.log("You lost.");
		console.log("The word was " + wordSelect.word.randomWord);
	}

	inquirer.prompt([
	{
		type: 'list',
		message: 'Play again?',
		choices: ['yes', 'no'],
		name: 'play again'
	}
	]).then(function(choice){
		if (choice.repononse == 'yes') {
			start();
		} else if (choice.response == 'no') {
			wordSelect.endGame();
		}
	});
}

start();




		// if(word.checkChar(answer.letter, letters) == true) {
		// 	console.log("CORRECT!");
		// } else {
		// 	guessesLeft--;
		// 	if (guessesLeft > 0) {
		// 		console.log("INCORRECT!");
		// 		console.log(guessesLeft + "guesses remaining.");
		// 	} else {
		// 		console.log("INCORRECT! GAME OVER!");
		// 	}
		// }
		// if(word.solved(letters) == false) {
		// 	if (guessesLeft > 0) {
		// 		makeGuess();
		// 	}
		// } else {
		// 	displayWord;
		// 	console.log("YOU WIN!");
		// }
		// });





// this.solved = function(letters) {
// 	var solved = true;
// 	for (var i = 0; i < word.length; i++) {
// 		if (letters[i].shown == '_ ') {
// 			solved = false;
// 		} else {
// 			console.log("Congratulations! You won!")
// 			//Display new word
// 		}
// 	}
// };