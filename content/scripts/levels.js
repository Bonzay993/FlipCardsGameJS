/**
 * LEVEL1;
 */

//Loading the assets
function levelOne(){
    
    document.querySelector(".start-game").addEventListener('click', function(){

        document.querySelector(".button-wrapper").style.display = "none"
        document.querySelector(".menu-container").style["background-image"] = 'url("./content/img/level1-background.png")'
        document.querySelector(".title-heading").innerHTML = 'Level 1'
        document.querySelector(".game-music-btn").style.display = "block"
        document.querySelector(".score").style.display = "block"
        
       
        
       /* const titleParagraph = document.createElement("p");
        const titleParagraphText = document.createTextNode("Come back soon!")
        titleParagraph.appendChild(titleParagraphText);

        const element=document.querySelector(".title")
        titleParagraph.style.cssText=
        `
        text-align:center;
        margin-top:50px;
        margin-bottom:50px;
        font-size:150%;
        
        `
        element.appendChild(titleParagraph); */
        levelOnePop(); // calling the popup message for the level 1
        levelOneBoard();
    });
    
}

function levelOneBoard(){
    gameAssetsLevel13.sort(() => 0.5 - Math.random()) //made the array shuffle random   
    const gameGrid = document.querySelector('.game-grid');
    gameGrid.style.display = 'flex';
   
    
    for ( let i = 0; i < 12; i++ ) {
       const card = document.createElement("img")
        card.setAttribute('src', '/content/img/blank-card.png');
        card.setAttribute('data-id', i)
        gameGrid.appendChild(card);
        console.log(card,i)
    }

}




