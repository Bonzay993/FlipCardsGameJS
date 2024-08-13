/**
 * LEVEL1;
 */
const numberOfCardsLevelOne = 12
const timerLevelOne = 30;


let isCheckingMatch = false; // Variable to track if checking match
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];





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

    // Add event listener for the "Got it!" button
    document.getElementById("close-link-level1").addEventListener('click', function() {
        // Start the game timer
        gameTimer(timerLevelOne);
        
        // Optionally, hide the popup after starting the timer
        document.querySelector('.popup-level1').style.display = 'none';
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
         cards[optionOneid].setAttribute('src', getGeneralAssets("emptyCard"));
         cards[optionTwoid].setAttribute('src', getGeneralAssets("emptyCard"));
         
    }    
    
    else if (cardsChosen[0] === cardsChosen[1]) {
         successMatchAudio();
         cards[optionOneid].setAttribute('src', getGeneralAssets("emptyCard"));
         cards[optionTwoid].setAttribute('src', getGeneralAssets("emptyCard"));
         cards[optionOneid].removeEventListener('click',flipCard);
         cards[optionTwoid].removeEventListener('click',flipCard);
         cardsWon.push(cardsChosen);
     } else {
         cards[optionOneid].setAttribute('src', getGeneralAssets("cardBack"));
         cards[optionTwoid].setAttribute('src', getGeneralAssets("cardBack"));
      
         failedMatchAudio();
     }

    document.querySelector('.score-value').textContent = cardsWon.length;
    updateHighScore(cardsWon.length); // Update high score if necessary
     cardsChosen = [];
     cardsChosenIds = [];
     isCheckingMatch = false; // Reset the checking match flag
     
    
}


function flipCard(){
    if (isCheckingMatch) return; // Prevent flipping if checking match
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(gameAssetsLevel13[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', gameAssetsLevel13[cardId].path)

    if (cardsChosen.length === 2 ) {
        isCheckingMatch = true; // Set the checking match flag
        
        setTimeout(checkMatch, 500)
    }
}




