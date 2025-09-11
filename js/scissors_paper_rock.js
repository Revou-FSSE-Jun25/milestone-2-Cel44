const playerDisplay = document.getElementById ("playerChoice");
const computerDisplay = document.getElementById ("computerChoice");
const resultDisplay = document.getElementById ("resultDisplay");
const restartButton = document.getElementById("restartButton");


const choices = ["scissors", "paper", "rock"];

let lockGame = false;

let result = "";

function game(playerChoice){

    if (lockGame) return;
    
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    const determineResult = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice){
            result = "tie";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) { 
           result = "win";
        } else {
           result = "lose";
            }
    }

    determineResult (playerChoice, computerChoice);

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `CPU: ${computerChoice}`;
    resultDisplay.textContent = `Result: you ${result.toUpperCase()}`;

    if (result === "win"){
        resultDisplay.classList.add("win");
    }

    if (result === "lose"){
        resultDisplay.classList.add("lose");
    }

    if (result === "tie"){
        resultDisplay.classList.add("tie");
    }

    lockGame = true;

    restartButton.classList.remove('hidden');
}

function restartGame() {
    lockGame = false;
    result = "";

    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "CPU: ";
    resultDisplay.textContent = "RESULT";

    resultDisplay.classList.remove("win", "lose", "tie");

    restartButton.classList.add('hidden');
}

    