

/**
 * RUNNING THE GAME
 *
 */

document.addEventListener("DOMContentLoaded", gameInit)


/**
 * Initialise the elements when loading the game
 * Ex: Hover sound effect, Menu Music, Menu Popup
 * boardInit();
 */
function gameInit() {
    menuBtnHover();
    playMenuAudio();
    menuPop();

    // Assign the function reference instead of calling it immediately
    document.querySelector(".start-game").onclick = menuBtnOnClick;
    boardInit(); // INITIATE THE BOARD

    document.querySelectorAll(".music-on-off").forEach(button => {
        button.addEventListener('click', toggleAudio);
    });
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

function menuPop() {
    function openPopup() {
        document.querySelector(".popup").style.display = "block";
    }

    window.addEventListener("load", function() {
        setTimeout(openPopup, 200);
    });

    //the following set the interaction that triggers the menu audio to play
    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
        playMenuAudio(); 
    });
    
     document.querySelector("#close-link").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
        playMenuAudio();
    });
    
    // Expose openPopup for testing
    return { openPopup };
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
 * Function that displays the timer and accepts a timer value
 * that can be set.
 */
function gameTimer(timer) {
    const timerHtml = document.querySelector('.timer');
    const count = setInterval(() => {
      timerHtml.textContent = timer--;
      if (timer < 0) {
        clearInterval(count);
        timerHtml.textContent = '0';
        gameOver(); // Call gameOver when the timer hits 0
      }
    }, 1000);
  }

/**
 * Function that displays the timer element
 */
function displayTimer(){
    let timerText = document.querySelector('.timer-text');
    timerText.style.display ='block'
}


function highScore(){
    const lastHighScore = parseFloat(localStorage.score)
}

/**
 * Function that keeps track of highscore and stores it into the browsers cache
 */
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



/**
 * Level complete function
 */
function levelComplete(){
    let levelCompletePop = document.querySelector(".popup-level-complete");
    levelCompletePop.style.display = "block";
}

/**
 * GameOver function restars the game and displays the GameOver popup
 */
function gameOver(){
    let popup = document.querySelector('.popup-game-over')
    popup.style.display= 'block';
   
}

//Exporting Jest Tests

module.exports = {
    gameInit,
    menuPop,
    levelOnePop,
    gameTimer,
    updateHighScore,
    levelComplete,
    gameOver
};