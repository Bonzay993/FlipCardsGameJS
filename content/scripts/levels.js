
/**
 * LEVEL1;
 */
const NUMBER_OF_CARDS_LEVEL_ONE = 12; //declare number of cards
const TIMER_LEVEL_ONE = 60; //declare timer


let isCheckingMatch = false; // Variable to track if checking match
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let levelOneBackground = getBackgroundImages("level1Bg");

/**Level 1 board settings as:
 * Number of cards 
*/
function levelOneBoard() {
    shuffleArray(NUMBER_OF_CARDS_LEVEL_ONE);
    assignBackground(levelOneBackground);
}


/**
 * Shuffles the array of cards 
*/
function shuffleArray() {
    GAME_ASSETS_LEVEL_1TO3.sort(() => 0.5 - Math.random()); //made the array shuffle random   
    let gameGrid = document.querySelector('.game-grid');
    gameGrid.style.display = 'flex';

    for (let i = 0; i < NUMBER_OF_CARDS_LEVEL_ONE; i++) {
        let card = document.createElement("img");
        card.setAttribute('src', "content/img/card-back.webp");
        card.setAttribute('draggable', "false");
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gameGrid.appendChild(card);
    }
}


/**
 * Flipping cards rules .
 * Prevents flipping more cards after the second choosen card.
 * Uses a timer that sets for how long each card is shown
*/
function flipCard() {
    if (isCheckingMatch) return; // Prevent flipping if checking match
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(GAME_ASSETS_LEVEL_1TO3[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', GAME_ASSETS_LEVEL_1TO3[cardId].path);

    if (cardsChosen.length === 2) {
        isCheckingMatch = true; // Set the checking match flag

        setTimeout(checkMatch, 500); //the timer that sets how long the card is shown
    }
}

/**
 * Checking if the two chosen cards match and check when level is complete
*/
function checkMatch() {
    let cards = document.querySelectorAll('.game-grid img');
    let [optionOneId, optionTwoId] = cardsChosenIds;
    let totalPairs = cards.length / 2; // Calculate total number of pairs
    let isMatch = cardsChosen[0] === cardsChosen[1];
    let isSameCard = optionOneId === optionTwoId;
    
    // Prevent matching the same card with itself
    if (isSameCard) {
        resetCards();
    } else if (isMatch) {
        handleMatch();
    } else {
        resetCards();
    }

    resetChosenCards(); // Reset the checking match flag

    // Check if all pairs have been matched
    if (cardsWon.length === totalPairs) {
        levelComplete(); // Call the function to display the success message
    }

    function resetCards() {
        cards[optionOneId].setAttribute('src', getGeneralAssets("cardBack"));
        cards[optionTwoId].setAttribute('src', getGeneralAssets("cardBack"));
        failedMatchAudio();
    }

    function handleMatch() {
        successMatchAudio();
        setCardToEmpty(optionOneId);
        setCardToEmpty(optionTwoId);
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    
    function setCardToEmpty(cardId) {
        cards[cardId].setAttribute('src', getGeneralAssets("emptyCard"));
    }
    
    // Resets the cards
    function resetChosenCards() {
        cardsChosen = [];
        cardsChosenIds = [];
        isCheckingMatch = false;
    }
}








