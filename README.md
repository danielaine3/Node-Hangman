# Node Hangman
## A command-line Hangman game using constructor functions
## Instructions
1. Enter the folder where the game files are stored on the computer
2. Input the command to pull up the game "Node index.js"
3. Follow the directions and input a letter
4. Continue to follow the prompts for a letter until you've completed the word, or you've run out of guesses
5. If you've won- celebrate a job well done.
6. If you lost- no big deal, it's just a game!
7. To play again select yes, if you don't, select no.

## How It Works
1. There are four files at work in this game:
    1. Letter.js
        * This file contains the letter constructor, meaning it determines when to display a letter or blank space. It defines a string value to store the underlying character for the letter, a boolean value that stores if the letter has been guessed or not, a function that returned the underlying character if it has been guessed. A function that takes the user guess and checks it against the underlying character and updates the boolean value to true if the letter has been guessed.
    2. Word.js--> requires Letter.js
        * This file contains the word constructor, meaning it creates an object for the currect selected word. It defines an array of a new letter object representing the letters of the underlying word, a function that returns a string representing the word, a function that checks if the user guess letter is in the word, and a function to check if the word has been completed.
    3. WordSelector.js --> requires Word.js
        * This file uses the random-words NPM to generate the word the user has to guess and holds the print results function which uses a swtich case that runs when the user submits a guess and let's them know if it is correct, incorrect or an already guessed letter. This also contains the end game function.
    4. Index.js--> requires WordSelector.js
        * This file contains the logic for the game and depends on WordSelector.js. It prompts the user for the guess and keeps track of their reamining guesses.
    
2. The following NPMs are used:
    1. Random-Words--> generates a set of 50 random words to select from. Used in the WordSelector.js file.
    2. Inquirer--> Allows the game to prompt the user for a letter and to play again at the end of rounds. Used in the index.js file.

    
