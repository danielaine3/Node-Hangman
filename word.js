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
		return(string);
	}
	this.checkChar = function(Letter) {
		var isCorrect = false;
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].guess(Letter)) {
				isCorrect = true;
			}
		}
		return isCorrect;
	}

	this.checkCorrect = function() {
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].guessed === false) {
				return false;
			}	else {
				return true;
			}
		}
	}
};
module.exports = Word;