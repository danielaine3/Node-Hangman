var WordSelector = require("./WordSelector.js");
var wordSelect = new WordSelector();
var inquirer = require("inquirer");
// var generateWord = require("");
// function WordSelect() {
// 	this.guessesLeft = 6;
// 	this.lettersGuessed = [];
// 	this.newGame = function() {
// 		this.guessesLeft = 6;
// 		this.lettersGuessed = [];
// 		this.word = this.randomWord();
// 	};
// 	this.randomWord = function() {
// 		var randomWord = words[Math.floor(Math.random() * words.length)];
// 		var newWord = new Word(randomWord);
// 		return newWord;
// 	};
// 	this.printResults = function(str) {
// 		switch(str) {
// 			case "already guessed":
// 				console.log("You already guessed that letter.");
// 				console.log("Letters already guessed: " + this.lettersGuessed);
// 				break;
// 			case "correct":
// 				console.log("CORRECT!");
// 				console.log("Number of guesses remaining: " + this.guessesLeft);
// 				console.log("Letters already guessed: " + this.lettersGuessed);
// 				break;
// 			case "incorrect":
// 				console.log("INCORRECT!");
// 				console.log("Number of guesses remaining: " + this.guessesLeft);
// 				console.log("Letters already guessed: " + this.lettersGuessed);
// 				break;
// 			default:
// 				console.log("error");
// 		}
// 	};
// 	this.endGame = function() {
// 		console.log("Game over.");
// 	}
// };
// var wordSelect = new WordSelect();
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
		// for(var i = 0; i < wordSelect.randomWord().letters.length; i++) {
		// 	if (wordSelect.randomWord().letters[i].guessed === true) {
		// 		winner = true;			
		// 	}
		// }
		var winner = wordSelect.word.displayWord() === wordSelect.word.checkCorrect();

		console.log(winner);//false
		// console.log(wordSelect.word.displayWord);//[function]
		// console.log(wordSelect.word.displayWord());//displays blanks and letters
		// console.log(wordSelect.word.randomWord);//undefinded
		// console.log(wordSelect.randomWord);//[function]
		console.log(wordSelect.randomWord());//displays letter array
		// console.log(wordSelect.randomWord.chekChar);//undefined
		// console.log (wordSelect.Word);//undefined
		// console.log(wordSelect.randomWord.Word);//undefined
		// console.log(wordSelect.newGame.word);//undefined
		// console.log(wordSelect.randomWord.Word);//undefined
		// console.log(wordSelect.randomWord().letters);
		// console.log(wordSelect.randomWord().letters[0].guessed);
		console.log(wordSelect.randomWord().newWord);




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



// var winner = false
// for (var i = 0; i < this.letters.length; i++) {
// 	if (isCorrect = true) {
// 		winner = true;
// 	};




