const gameContainer = document.querySelector(".game-board");
const restartButton = document.getElementById ("restart-button");

const cardPicture = ['🍎', '🍓', '🍒', '🍉', '🍌', '🥝', '🍍', '🍇'];
let cards = [...cardPicture, ...cardPicture];
let matchedCards = 0;

let flippedCards = [];
let lockBoard = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createBoard(){
    gameContainer.innerHTML = "";
    shuffle(cards);

    cards.forEach(cardPicture => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.cardPicture = cardPicture;

        card.innerHTML =`
                <div class="card-face card-back">
                    <img src="assets/card_back.png">
                </div>
                <div class="card-face card-front">${cardPicture}</div>
            `;

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
        });
};

function flipCard(){
    if (lockBoard) return;
    if (this === flippedCards [0]) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2){
        checkForMatch();
    }
}

function checkForMatch(){
    lockBoard = true;
    const [card1, card2] = flippedCards;

    switch (true){
        case (card1.dataset.cardPicture === card2.dataset.cardPicture) :
            disableCards();
            break;
        default:
            unflipCards();
            break;
    }
}

function disableCards(){
    flippedCards.forEach(card => {
        card.removeEventListener(`click`, flipCard);
        card.classList.add(`matched`);
    });

    matchedCards++;
    resetBoard();
    
    if (matchedCards === symbols.length) {
        setTimeout(() => alert('Selamat! Anda memenangkan permainan!'), 500);
    }
    
}

function unflipCards(){
    setTimeout(() => {
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
            resetBoard();
        });
    } ,1000)
}

function resetBoard() {
    [flippedCards, lockBoard] = [[], false];
}

function restartGame(){
    resetBoard();
    createBoard();
}

restartButton.addEventListener('click', restartGame);

createBoard();

