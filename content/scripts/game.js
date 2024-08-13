/**
 * RUNNING THE GAME
 *
 */

document.addEventListener("DOMContentLoaded", gameInit)


function gameInit(){
    menuBtnHover();
    playMenuAudio();
    menuPop();
    // Set the initial state of the button and audio. 
    document.querySelector(".music-on-off").onclick = toggleAudio;  
    document.querySelector(".start-game").onclick = menuBtnOnClick(); boardInit() ; //INNITIATE THE BOARD

}



/**
 *  Menu POPUP - The popup that loads first when loading the game.
 * This is here just so the sound works as the user has to interact with the 
 * game first in order for the sound to play. The user will interact with either the
 * Let's play button or the close button
 * 
 * This is a change happened in Chrome browser
 *
 * */ 

function menuPop(){
    window.addEventListener("load", function(){
        setTimeout(
            function open(event){
                document.querySelector(".popup").style.display = "block";
            },
            200
        )
    
    })
    
    //the following set the interaction that triggers the menu audio to play
    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
        playMenuAudio(); 
    });
    
     document.querySelector("#close-link").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
        playMenuAudio();
    });
    
}


/**
 * First level tutorial popup .Removed the Window Onload because
 * the page is already loaded at this point
 */

function levelOnePop(){
        setTimeout(
            function open(event){
                document.querySelector(".popup-level1").style.display = "block";
            },
            200
        );

        document.querySelector("#close-level1").addEventListener("click", function(){
            //starts the game timer after clicking GOT IT!
            
            document.querySelector(".popup-level1").style.display = "none";
             //removing the blur when user clicks on close
            document.querySelector('.menu-container').style.filter = 'none';
            
            
           
            
        });
        
        document.querySelector("#close-link-level1").addEventListener("click", function(){
            document.querySelector(".popup-level1").style.display = "none";
            //removing the blur when user clicks Ok
            document.querySelector('.menu-container').style.filter = 'none';
            
            
        });

        //setting a blur so that the popout stands out
        document.querySelector('.menu-container').style.filter = 'blur(3px)';

        //start the timer;
        displayTimer()

        
}

/**
 *  GENERAL GAME SOUND logic
 */
//

//Sound effect for when matching cards
function successMatchAudio(){
    const successAudio = new Audio(getSounds("succes-match"));
   successAudio.play();
}

//Sound effect for when not matching cards
function failedMatchAudio(){
    const failedAudio = new Audio(getSounds('failed-match'));
    failedAudio.play();
}

/**
 * GAME FUNCTIONALITY LOGIC
 */


//Function that sets the timer depeding on the level -- coming soon
function gameTimer(timer){
    timer.toString();
    let timerHtml = document.querySelector('.timer');
    

    var count = setInterval(function() {
        
        timerHtml.textContent = timer--;
        if(timer == -1){
            clearInterval(count);
            timerHtml.textContent = '0'
            gameOver();
            
        } 
    }, 1000);

}

function displayTimer(){
    let timerText = document.querySelector('.timer-text');
    timerText.style.display ='block'
}


function highScore(){
    const lastHighScore = parseFloat(localStorage.score)
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


function gameOver(){
    let popup = document.querySelector('.popup-game-over')
    popup.style.display= 'block';
    restartGame()
}

function restartGame(){
    document.querySelector('.score-value').textContent = '0';
    
}





 


//Remaining time


//Level Complete

function levelComplete(){
    
}