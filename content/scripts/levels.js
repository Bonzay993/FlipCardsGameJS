
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
 * Background picture
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
    let [optionOneId, optionTwoId] = cardsChosenIds;
    
    if (isSameCard(optionOneId, optionTwoId)) {
        handleSameCard(optionOneId, optionTwoId);
    } else if (isMatch(optionOneId, optionTwoId)) {
        handleMatch(optionOneId, optionTwoId);
    } else {
        handleNoMatch(optionOneId, optionTwoId);
    }
    
    resetChosenCards();
    
    if (checkLevelComplete()) {
        levelComplete();
    }
}

/**
 * Sets the card to an "empty" state (after a successful match)
 */
function setCardToEmpty(cardId) {
    let cards = document.querySelectorAll('.game-grid img');
    cards[cardId].setAttribute('src', getGeneralAssets("emptyCard"));
}

/**
 * Check if the selected cards are the same card
 */
function isSameCard(cardId1, cardId2) {
    return cardId1 === cardId2;
}

/**
 * Handles logic if the same card is clicked twice
 */
function handleSameCard(cardId1, cardId2) {
    resetCards(cardId1, cardId2);
}

/**
 * Check if two chosen cards are a match
 */
function isMatch(cardId1, cardId2) {
    return cardsChosen[0] === cardsChosen[1];
}

/**
 * Handles the logic when two cards match
 */
function handleMatch(cardId1, cardId2) {
    successMatchAudio();
    setCardToEmpty(cardId1);
    setCardToEmpty(cardId2);
    removeCardListeners(cardId1, cardId2);
    cardsWon.push(cardsChosen);
}

/**
 * Handles logic when two cards do not match
 */
function handleNoMatch(cardId1, cardId2) {
    resetCards(cardId1, cardId2);
    failedMatchAudio();
}

/**
 * Resets the chosen cards to show the back side
 */
function resetCards(cardId1, cardId2) {
    let cards = document.querySelectorAll('.game-grid img');
    cards[cardId1].setAttribute('src', getGeneralAssets("cardBack"));
    cards[cardId2].setAttribute('src', getGeneralAssets("cardBack"));
}

/**
 * Removes the event listeners after a successful match
 */
function removeCardListeners(cardId1, cardId2) {
    let cards = document.querySelectorAll('.game-grid img');
    cards[cardId1].removeEventListener('click', flipCard);
    cards[cardId2].removeEventListener('click', flipCard);
}

/**
 * Resets the selected cards and clears the match check flag
 */
function resetChosenCards() {
    cardsChosen = [];
    cardsChosenIds = [];
    isCheckingMatch = false;
}

/**
 * Check if all pairs have been matched
 */
function checkLevelComplete() {
    let totalPairs = document.querySelectorAll('.game-grid img').length / 2;
    return cardsWon.length === totalPairs;
}








