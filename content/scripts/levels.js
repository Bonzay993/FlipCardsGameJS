/**
 * LEVEL1;
 */

//Loading the assets
function levelOne(){
    
    document.querySelector(".start-game").addEventListener('click', function(){

        document.querySelector(".button-wrapper").style.display = "none"
        document.querySelector(".menu-container").style["background-image"] = 'url("./content/img/level1-background.png")'
        document.querySelector(".title-heading").innerHTML = 'Level 1';
        document.querySelector(".game-music-btn").style.display = "block";
        document.querySelector(".score").style.display = "block";
        document.querySelector(".game-area-wrapper").style.display = "flex";
       
        levelOnePop(); // calling the popup message for the level 1
        levelOneBoard();
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
    
    for ( let i = 0; i < 12; i++ ) {
       const card = document.createElement("img")
        card.setAttribute('src', '/content/img/card-back.png');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameGrid.appendChild(card);
    }

    
    //check if cards are a match
    function checkMatch(){
       const cards = document.querySelectorAll('.game-grid img');
       const optionOneid = cardsChosenIds[0];
       const optionTwoid = cardsChosenIds[1];
      
        
       if (optionOneid == optionTwoid){
            successMatchAudio();
            cards[optionOneid].setAttribute('src', '/content/img/empty-card.png');
            cards[optionTwoid].setAttribute('src', '/content/img/empty-card.png');
       }    
       else if (cardsChosen[0] === cardsChosen[1]) {
            successMatchAudio();
            cards[optionOneid].setAttribute('src', '/content/img/empty-card.png');
            cards[optionTwoid].setAttribute('src', '/content/img/empty-card.png');
            cards[optionOneid].removeEventListener('click',flipCard);
            cards[optionTwoid].removeEventListener('click',flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneid].setAttribute('src', '/content/img/card-back.png');
            cards[optionTwoid].setAttribute('src', '/content/img/card-back.png');
            failedMatchAudio();
        }

        result.textContent = cardsWon.length
        cardsChosen = [];
        cardsChosenIds = [];

        /*if (cardsWon.length === cardArray.length /2) {
            result.textContent = "Congratulations you found them all"
        }*/
    }

    
    
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(gameAssetsLevel13[cardId].name);
        cardsChosenIds.push(cardId);
        console.log(cardsChosen);
        this.setAttribute('src', gameAssetsLevel13[cardId].path)

        if (cardsChosen.length === 2 ) {
            setTimeout(checkMatch, 500)
        }
    }
    
}



