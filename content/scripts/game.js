/**
 * RUNNING THE GAME
 *
 */
document.addEventListener("DOMContentLoaded", gameInit);

const MENU_CONTAINER = document.querySelector('.menu-container');
const START_GAME_BUTTON =  document.querySelector(".start-game");
const GOT_IT_BUTTON = document.querySelector(".got-it-button");
const TITLE_HEADING = document.querySelector(".title-heading");



/**
 * Initialise the elements when loading the game
 * Ex: Hover sound effect, Menu Music, Menu Popup
 * boardInit();
 */
function gameInit() {
    menuBtnHover();
    playMenuAudio();
    menuPop();
    btnToggleAudio();
    

    // Assign the function reference instead of calling it immediately
    START_GAME_BUTTON.onclick = menuBtnOnClick;
    try {
        boardInit(); 

    } catch (error) {
        console.error('Error during board initialization:', error);
        alert('An error occurred while initializing the game. Please try reloading the page.');
    }
}

/**
 * Initialise the visual elements after pressing the START GAME button 
 * Start the game timer after pressing GOT IT button on the level one popup
 */
function boardInit() {
    levelOneBoard();
    updateHighScore();
    menuElements();

    START_GAME_BUTTON.addEventListener('click', boardElements);
    GOT_IT_BUTTON.addEventListener('click', function(){
        gameTimer(TIMER_LEVEL_ONE);
        closePopup();
    }); 
}

function menuElements(){
    hideShowElement(true, ".score");
    hideShowElement(true, ".game-area-wrapper");
    hideShowElement(true, ".game-music-btn");
    hideShowElement(true, ".popup-level1");
  }

function boardElements(){
    TITLE_HEADING.innerHTML= 'Level 1';
    hideShowElement(true, ".button-wrapper");
    MENU_CONTAINER.classList.add('game-container');
    hideShowElement(false, ".game-music-btn");
    hideShowElement(false, ".score");
    hideShowElement(false, ".game-area-wrapper");
    hideShowElement(false, ".game-music-btn");
    levelOnePop();
}


/**Function that adds Menu Toggle to music on-off buttons */
function btnToggleAudio() {
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
 *  Expose openPopup for testing
 * */
function menuPop() {
    window.addEventListener("load", function() {
        setTimeout(openPopup, 200);
    });
    closePopup();
    return {
        openPopup
    };
}

function openPopup() {
    hideShowElement(false, ".popup");
}

/**
 * Function that enables the the user to close the popup
 */
function closePopup(){
   /* document.querySelector(".close").addEventListener("click", function() {
        hideShowElement(true, ".popup"); //closes the popup
        playMenuAudio();
    });
    document.querySelector(".close-link").addEventListener("click", function() {
        ; //closes the popup
        playMenuAudio();
   }); */

    let close = document.querySelector(".close");
    let closeLink = document.querySelector(".close-link")
    let closeButtons = [close,closeLink];
    closeButtons.forEach(function{
        hideShowElement(true, ".popup");
        playMenuAudio();
    })
}


/**
 * First level tutorial popup .Removed the Window Onload because
 * the page is already loaded at this point
 * It also set a background blur so that the popout stands out
 */
function levelOnePop() {
    displayTimer();
    setTimeout(
        function open(event) {
            hideShowElement(false, ".popup-level1");
            closePopup();
            
        },
        200,
        MENU_CONTAINER.style.filter = '',
    );
    MENU_CONTAINER.style.filter = 'blur(3px)';
}

/**
 * Function that displays the timer and accepts a timer value
 * that can be set.
 */
function gameTimer(timer) {
    let timerHtml = document.querySelector('.timer');
    let count = setInterval(() => {
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
function displayTimer() {
    hideShowElement(false, ".timer-text");
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
function levelComplete() {
    hideShowElement(false, ".popup-level-complete");
}

/**
 * GameOver function restars the game and displays the GameOver popup
 */
function gameOver() {
    hideShowElement(false, ".popup-game-over");
}

/**
 * Function that hides and show elements
 */
function hideShowElement(hide, elementSelector) {
    let element = document.querySelector(elementSelector);
    if (hide) {
        element.classList.add("hide");
    } else {
        element.classList.remove("hide");
    }
}

//Exporting Jest Tests
module.exports = {
    gameInit,
    menuPop,
    levelOnePop,
    gameTimer,
    updateHighScore,
    levelComplete,
    gameOver,
    hideShowElement
};