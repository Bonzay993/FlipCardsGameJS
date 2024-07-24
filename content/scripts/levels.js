/**
 * LEVEL1;
 */

//Loading the assets
function levelOne(){
    document.querySelector(".start-game").addEventListener('click', function(){

        document.querySelector(".button-wrapper").style.display = "none"
        document.querySelector(".menu-container").style["background-image"] = 'url("./content/img/level1-background.png")'
        document.querySelector(".title-heading").innerHTML = 'Level 1 under construction!'
        const titleParagraph = document.createElement("p");
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
        element.appendChild(titleParagraph);
        levelOnePop(); // calling the popup message for the level 1
        
    });
    
}




