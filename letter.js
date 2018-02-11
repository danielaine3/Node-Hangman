//Letter constructor
function Letter(char) {
	this.letter = char;
	this.guessed = false;

	this.guess = function() {
		//If the guessed value is true, display the letter guessed
		if (this.guessed === true) {
			console.log("YAY! You guessed a correct letter!");
			console.log(this.letter);
		//If the gussed value is fals, display a blank space in lieu of the letter
		}else {
			console.log("That letter has not been guessed yet.");
			console.log("_ ");
		}
	};

	this.displayLetter = function(char) {
		//If character guessed == a letter in word change guessed value to true
		if (char === this.letter) {
			this.guessed = true;
		} 
	};
};

module.exports = Letter;