/**
 * LEVEL1;
 */
const numberOfCardsLevelOne = 12
const timerLevelOne = 60;





let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let isCheckingMatch = false; // Variable to track if checking match


//Loading the assets
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
    
}



function levelOneBoard(){
    shuffleArray(numberOfCardsLevelOne)
}


function shuffleArray(){
    gameAssetsLevel13.sort(() => 0.5 - Math.random()) //made the array shuffle random   
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.style.display = 'flex';

    for ( let i = 0; i < numberOfCardsLevelOne; i++ ) {
       const card = document.createElement("img")
        card.setAttribute('src', "content/img/card-back.png");
        card.setAttribute('draggable',"false")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameGrid.appendChild(card);
    }    
}

function resetBoard(){
    const img = document.querySelector('.game-grid img');
    for ( let i = 0; i < img.length; i++ ) {
        img[i].parentNode.removeChild(images[i]);
    }
}


 //check if cards are a match
function checkMatch(){
    const cards = document.querySelectorAll('.game-grid img');
    const optionOneid = cardsChosenIds[0];
    const optionTwoid = cardsChosenIds[1];
   
     
    if (optionOneid == optionTwoid){
         successMatchAudio();
         cards[optionOneid].setAttribute('src', "content/img/empty-card.png");
         cards[optionTwoid].setAttribute('src', "content/img/empty-card.png");
    }    
    
    else if (cardsChosen[0] === cardsChosen[1]) {
         successMatchAudio();
         cards[optionOneid].setAttribute('src', "content/img/empty-card.png");
         cards[optionTwoid].setAttribute('src', "content/img/empty-card.png");
         cards[optionOneid].removeEventListener('click',flipCard());
         cards[optionTwoid].removeEventListener('click',flipCard());
         cardsWon.push(cardsChosen);
     } else {
         cards[optionOneid].setAttribute('src', "content/img/card-back.png");
         cards[optionTwoid].setAttribute('src', "content/img/card-back.png");
         failedMatchAudio();
     }

    document.querySelector('.score-value').textContent = cardsWon.length;
    updateHighScore(cardsWon.length); // Update high score if necessary
     cardsChosen = [];
     cardsChosenIds = [];
     isCheckingMatch = false; // Reset the checking match flag
     enableCards(); // Re-enable card clicks
}

// Update the high score if the current score is higher
function updateHighScore(currentScore) {
    // Initialize high score from local storage
    let highScore = localStorage.getItem('highScore') || 0;
    document.querySelector('.high-score-value').textContent = highScore;
    
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
        document.querySelector('.high-score-value').textContent = highScore;
    }
}






