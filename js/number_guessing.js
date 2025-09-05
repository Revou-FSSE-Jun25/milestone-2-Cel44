let result = "";
let numberOfGuesses = 10;
let numberGuessed = [];
let computerNumber = Math.floor((Math.random() * 100) + 1); 

//  DOM

const gameContainer = document.getElementById ("game-container")

const title = document.createElement ("h1");
title.textContent = ("Number Guessing Game");

const textContent = document.createElement ("h3");
textContent.textContent = "I'm thinking of a number between 1-100";

const triesLeft = document.createElement ("p");
triesLeft.classList.add ("guesses-left");
triesLeft.textContent = `You have ${numberOfGuesses} tries left`

const input = document.createElement ("input");
input.type = "number";
input.id = "guess-input";
input.classList.add ("guess-input");

const guesser = document.createElement("div")
guesser.classList.add ("guesser")

const button = document.createElement ("button");
button.textContent = "guess";
button.id = "guess-button";

const guessedNumber = document.createElement("p");
guessedNumber.classList.add("guessed-number");
guessedNumber.textContent = "Guessed Number: "

const resetButton = document.createElement ("button")
resetButton.classList.add ("reset-button");
resetButton.id = "reset-button";
resetButton.textContent = "Reset";

const resultDisplay = document.createElement ("p");
resultDisplay.id = "result-display";
resultDisplay.classList.add ("result-display")
resultDisplay.textContent = "";

gameContainer.appendChild (title);
gameContainer.appendChild (textContent);
gameContainer.appendChild (triesLeft);
gameContainer.appendChild (guesser);
guesser.appendChild (input);
guesser.appendChild (button);
gameContainer.appendChild (guessedNumber)
gameContainer.appendChild (resetButton)
gameContainer.appendChild(resultDisplay);

// game functions

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById ("guess-button");

guessButton.addEventListener("click", () => {

    const playerGuess = Number(guessInput.value);

    if (playerGuess < 1 || playerGuess > 100){
        result = "only 1-100";
        numberOfGuesses++;
        return;
    }

    if (numberGuessed.includes(playerGuess)){
        result = `You have already tried this number!`;
        resultDisplay.textContent = result;
        return;
    }

    if (playerGuess === computerNumber) {
        result = "You've win, please reset to play again~!";
        numberOfGuesses--;
        guessButton.disabled = true;
        guessInput.disabled = true;
    } else if (playerGuess < computerNumber) {
        result = "Too Low!";
        numberOfGuesses--;
    } else {
        result = "Too High!";
        numberOfGuesses--;
    }
    
    triesLeft.textContent = `You have ${numberOfGuesses} tries left`

    numberGuessed.push(playerGuess);
    guessedNumber.textContent = "Guessed Number: " + numberGuessed.join(", ");

    resultDisplay.textContent = result;

    if (numberOfGuesses === 0 && playerGuess !== computerNumber) {
        resultDisplay.textContent = "You're out of tries, please try again!"
        guessButton.disabled = true;
        guessInput.disabled = true;
    };
});

resetButton.addEventListener ("click", resetGame);

function resetGame() {
    numberOfGuesses = 10;
    numberGuessed = [];
    computerNumber = Math.floor((Math.random() * 100) + 1);
    result = "";
    
    guessInput.value = "";
    guessedNumber.textContent = "Guessed Number: ";

    guessButton.disabled = false;
    guessInput.disabled = false;
    resultDisplay.textContent = "";
    triesLeft.textContent = `You have ${numberOfGuesses} tries left`
}

