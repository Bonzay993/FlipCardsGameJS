/**
 * LEVEL1;
 */
const numberOfCardsLevelOne = 12   //declare number of cards
const timerLevelOne = 15;          //declare timer


let isCheckingMatch = false; // Variable to track if checking match
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];




/**
 * Initialise the visual elements 
 */
function boardInit(){
    levelOneBoard()
    updateHighScore();
    
   
    
    document.querySelector(".start-game").addEventListener('click', function(){

        document.querySelector(".button-wrapper").style.display = "none"
        document.querySelector(".menu-container").style["background-image"] = 'url("content/img/level1-background.png")'
        document.querySelector(".menu-container").style.height = "auto"
        document.querySelector(".title-heading").innerHTML = 'Level 1';
        document.querySelector(".game-music-btn").style.display = "block";
        document.querySelector(".score").style.display = "block";
        document.querySelector(".game-area-wrapper").style.display = "flex";
       
        levelOnePop(); // calling the popup message for the level 1
        
        
    });

    // Add event listener for the "Got it!" button
        document.querySelector(".close-link-level1").addEventListener('click', function() {
        // Start the game timer
        gameTimer(timerLevelOne);
        
        // Optionally, hide the popup after starting the timer
        document.querySelector('.popup-level1').style.display = 'none';
    });
}

/**Level 1 board settings as:
 * Number of cards 
 */
function levelOneBoard(){
    shuffleArray(numberOfCardsLevelOne)

}


/**
 * Shuffles the array of cards 
 */
function shuffleArray(){
    gameAssetsLevel13.sort(() => 0.5 - Math.random()) //made the array shuffle random   
    let gameGrid = document.querySelector('.game-grid');
    gameGrid.style.display = 'flex';

    for ( let i = 0; i < numberOfCardsLevelOne; i++ ) {
       let card = document.createElement("img")
        card.setAttribute('src', "content/img/card-back.png");
        card.setAttribute('draggable',"false")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameGrid.appendChild(card);
    }    
}


/**
 * Flipping cards rules .
 * Prevents flipping more cards after the second choosen card.
 * Uses a timer that sets for how long each card is shown
 */
function flipCard(){
    if (isCheckingMatch) return; // Prevent flipping if checking match
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(gameAssetsLevel13[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', gameAssetsLevel13[cardId].path)

    if (cardsChosen.length === 2 ) {
        isCheckingMatch = true; // Set the checking match flag
        
        setTimeout(checkMatch, 500)   //the timer that sets how long the card is shown
    }
}

/**
 * Checking if the two chosen cards match and check when level is complete
 */
function checkMatch() {
    const cards = document.querySelectorAll('.game-grid img');
    const [optionOneId, optionTwoId] = cardsChosenIds;
    const totalPairs = cards.length / 2;  // Calculate total number of pairs
    const isMatch = cardsChosen[0] === cardsChosen[1];
    const isSameCard = optionOneId === optionTwoId;

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

    function resetCards() {
        cards[optionOneId].setAttribute('src', getGeneralAssets("cardBack"));
        cards[optionTwoId].setAttribute('src', getGeneralAssets("cardBack"));
        failedMatchAudio();
    }

    // Prevent matching the same card with itself
    if (isSameCard) {
        resetCards();
    } else if (isMatch) {
        handleMatch();
    } else {
        resetCards();
    }
    
    document.querySelector('.score-value').textContent = cardsWon.length;
    updateHighScore(cardsWon.length); // Update high score if necessary
    resetChosenCards(); // Reset the checking match flag

    // Check if all pairs have been matched
    if (cardsWon.length === totalPairs) {
        levelComplete(); // Call the function to display the success message
    }
    
    // Resets the cards
    function resetChosenCards() {
        cardsChosen = [];
        cardsChosenIds = [];
        isCheckingMatch = false;
    }
}







