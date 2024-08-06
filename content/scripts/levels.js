/**
 * LEVEL1;
 */

//Loading the assets
function levelOne(){
    levelOneBoard()
    
    document.querySelector(".start-game").addEventListener('click', function(){

        document.querySelector(".button-wrapper").style.display = "none"
        document.querySelector(".menu-container").style["background-image"] = 'url("content/img/level1-background.png")'
        document.querySelector(".title-heading").innerHTML = 'Level 1';
        document.querySelector(".game-music-btn").style.display = "block";
        document.querySelector(".score").style.display = "block";
        document.querySelector(".game-area-wrapper").style.display = "flex";
       
        levelOnePop(); // calling the popup message for the level 1
        
    });
    
}


function levelOneBoard(){
    gameAssetsLevel13.sort(() => 0.5 - Math.random()) //made the array shuffle random   
    const gameGrid = document.querySelector('.game-grid');
    const result = document.querySelector('.score-value');
    gameGrid.style.display = 'flex';
    let cardsChosen = [];
    let cardsChosenIds = [];
    const cardsWon = [];
    let isCheckingMatch = false; // Variable to track if checking match
    
    for ( let i = 0; i < 12; i++ ) {
       const card = document.createElement("img")
        card.setAttribute('src', "content/img/card-back.png");
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameGrid.appendChild(card);
    }

    // Disable all card clicks
    function disableCards() {
        const cards = document.querySelectorAll('.game-grid img');
        cards.forEach(card => card.removeEventListener('click', flipCard));
    }

    // Enable all card clicks
    function enableCards() {
        const cards = document.querySelectorAll('.game-grid img');
        cards.forEach(card => card.addEventListener('click', flipCard));
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
            cards[optionOneid].removeEventListener('click',flipCard);
            cards[optionTwoid].removeEventListener('click',flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneid].setAttribute('src', "content/img/card-back.png");
            cards[optionTwoid].setAttribute('src', "content/img/card-back.png");
            failedMatchAudio();
        }

        result.textContent = cardsWon.length
        cardsChosen = [];
        cardsChosenIds = [];
        isCheckingMatch = false; // Reset the checking match flag
        enableCards(); // Re-enable card clicks
    }

    
    
    function flipCard(){
        if (isCheckingMatch) return; // Prevent flipping if checking match
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(gameAssetsLevel13[cardId].name);
        cardsChosenIds.push(cardId);

        this.setAttribute('src', gameAssetsLevel13[cardId].path)

        if (cardsChosen.length === 2 ) {
            isCheckingMatch = true; // Set the checking match flag
            disableCards(); // Disable card clicks
            setTimeout(checkMatch, 500)
        }
    }
    
}



