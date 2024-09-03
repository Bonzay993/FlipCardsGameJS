

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
        try {
            boardInit(); //Initialise the board
        } catch (error) {
            console.error('Error during board initialization:', error);
            alert('An error occurred while initializing the game. Please try reloading the page.');
        }

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
    document.querySelector(".close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
        playMenuAudio(); 
    });
    
     document.querySelector(".close-link").addEventListener("click", function(){
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
    const menuContainer = document.querySelector('.menu-container')
    displayTimer();

        setTimeout(
            function open(event){
                document.querySelector(".popup-level1").style.display = "block";
                popupClose();
            },
            200,

            
    
        );
        
        //setting a blur so that the popout stands out
        menuContainer.style.filter = 'blur(3px)';
        
       
        
    /**Function responsible for closing the 
     *level1 popup by clicking Got it!
     *
     */
    function popupClose() {
        document.querySelector(".close-link-level1").addEventListener("click", closePopup);
        
        function closePopup(){
                document.querySelector(".popup-level1").style.display = "none";
                //removing the blur when user clicks Got It!
                menuContainer.style.filter = '';
            }
    }
 
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
    timerText.style.display ='block';
}




/**
 * Function that keeps track of high score and stores it into the browser's cache
 */
function updateHighScore(currentScore) {
    try {
        let storedHighScore = highScore(); // Retrieve the current high score and store it in a variable
        if (currentScore > storedHighScore) { // Compare current score with the stored high score
            localStorage.setItem('highScore', currentScore); // Update localStorage with the new high score
            document.querySelector('.high-score-value').textContent = currentScore; // Update the UI
        } else {
            document.querySelector('.high-score-value').textContent = storedHighScore; // Ensure UI shows current high score if not updated
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
        alert('An error occurred while saving your high score.');
    }
}

function highScore() {
    // Get the high score from localStorage, default to 0 if not found
    let score = parseFloat(localStorage.getItem('highScore'));
    return isNaN(score) ? 0 : score;
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