//Letter constructor
function Letter(char) {
	this.letter = char;
	this.guessed = false;
	this.displayLetter = function() {
		//If the guessed value is true, display the letter guessed
		if (this.guessed === true) {
			return this.letter;
		//If the gussed value is false, display a blank space in lieu of the letter
		} else {
			// console.log("That letter has not been guessed yet."
			return "_ ";
		}
	};
	this.guess = function(guess) {
		//If character guessed == a letter in word change guessed value to true
		if (guess === this.letter) {
			this.guessed = true;
			return true;
		}
	};
}
module.exports = Letter;