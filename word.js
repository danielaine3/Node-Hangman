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
};
module.exports = Word;

var newWord = new Word("");
newWord.checkChar("o");
newWord.displayWord();
