var Letter = require ('./Letter.js');

function Word(word) {
	this.letters = [];
	for (var i = 0; i < word.length; i++) {
		this.letters.push(new Letter(word.charAt(i)));
	}
	this.displayWord = function(Letter) {
		var string = "";
		for (var i = 0; i < this.letters.length; i++) {
			string = string.concat(this.letters[i].displayLetter(Letter));
		}
		
		console.log(string);
	}
	this.checkChar = function(Letter) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].guess(Letter);
		}
	}
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
};

var newWord = new Word("hello");

newWord.checkChar("o");
newWord.displayWord();

newWord.checkChar("l");
newWord.displayWord();

// newWord.checkChar("e");
// newWord.checkChar('h');
// newWord.checkChar('l');

module.export = Word;
