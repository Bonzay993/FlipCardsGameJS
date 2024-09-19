const MENU_CONTAINER = document.querySelector(".menu-container");
const TITLE_HEADING = document.querySelector(".title-heading");
const SCORE_PARAGRAPH = document.querySelector(".score-paragraph");
const HIGH_SCORE_PARAGRAPH = document.querySelector(".high-score-paragraph");

let count;  
let currentTimer;
let timerHtml = document.querySelector(".score-calculated");
let score = document.querySelector(".score-value");



/**
 * RUNNING THE GAME
 *
 */
window.onload = function () {
    
        let menuBackground = getBackgroundImages("menuBg");
        gameInit();
        assignBackground(menuBackground);
    
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

/**
 * Initialise the elements when loading the game
 * Ex: Hover sound effect, Menu Music, Menu Popup
 * boardInit();
 */
function gameInit() {
    menuElements();
    menuBtnHover();
    playMenuAudio();
    menuPop();
    btnToggleAudio();
    boardInit(); 
}

/**
 * Initialise the visual elements after pressing the START GAME button 
 * Start the game timer after pressing GOT IT button on the level one popup
 */
function boardInit() {
    const START_GAME_BUTTON = document.querySelector('.start-game');
    const GOT_IT_BUTTON = document.querySelector('.got-it-button');

    updateHighScore();
    

    if (START_GAME_BUTTON) {
        START_GAME_BUTTON.addEventListener('click', boardElements);
    } else {
        console.error("START_GAME_BUTTON is null.");
    }

    if (GOT_IT_BUTTON) {
        GOT_IT_BUTTON.addEventListener('click', function () {
            hideShowElement(true, ".popup-level1");
            gameTimer(TIMER_LEVEL_ONE);
        });
    } else {
        console.error("GOT_IT_BUTTON is null.");
    }
}

function menuElements(){
    hideShowElement(true, ".game-area-wrapper");
    hideShowElement(true, ".game-music-btn");
    hideShowElement(true, ".popup-level1");
  }

function boardElements(){
    TITLE_HEADING.innerHTML= 'Level 1';
    hideShowElement(true, ".button-wrapper");
    MENU_CONTAINER.classList.add('game-container');
    SCORE_PARAGRAPH.classList.remove('hide');
    HIGH_SCORE_PARAGRAPH.classList.remove('hide');
    hideShowElement(false, ".game-music-btn");
    hideShowElement(false, ".game-area-wrapper");
    hideShowElement(false, ".game-music-btn");
    hideShowElement(true, ".version-paragraph");
    levelOnePop();
    levelOneBoard();
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

/**Unhide the Popup */
function openPopup() {
    hideShowElement(false, ".popup");
}

/**
 * Function that enables the the user to close the popup
 *  Add event listeners for each selector
 * Special case for popup-level1 with additional logic
 */
function closePopup() {
    function closeAndPlayAudio(selector) {
        document.querySelector(selector).addEventListener("click", function() {
            hideShowElement(true, ".popup");
            playMenuAudio();
        });
    }
    closeAndPlayAudio(".close");
    closeAndPlayAudio(".close-link");
    
    document.querySelector(".popup-level1").addEventListener("click", function() {
        hideShowElement(true, ".popup");
        MENU_CONTAINER.style.filter = '';
    });
}

/**Function that assigns a background so the menu and levels have different backgrounds */
function assignBackground(background) {
    let gameContainer = document.querySelector(".set-background");
    if (!gameContainer) {
        console.error("Error: '.menu-container' element not found.");
        return;
    }
    gameContainer.style.backgroundImage = `url('${background}')`;
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
        },
        200,
    );
    MENU_CONTAINER.style.filter = 'blur(3px)';
}

/**
 * Function that displays the timer element
 */
function displayTimer() {
    hideShowElement(false, ".timer-text");
}

/**
 * Function that displays the timer and accepts a timer value
 * that can be set.
 * Start the interval and store its reference in the global 'count'
 *
 * Call gameOver when the timer hits 0
 */
function gameTimer(timer) {
    let timerHtml = document.querySelector('.timer');
    currentTimer = timer;  
    
   
    count = setInterval(() => {
        timerHtml.textContent = currentTimer;  // Display the current value of timer
        if (currentTimer < 0) {
            clearInterval(count);  // Stop the timer when it reaches below 0
            timerHtml.textContent = '0';
            gameOver();
        } else {
            currentTimer--;  
        }
    }, 1000);  
}

function calculateScore(){
    

    if (currentTimer > 40 && currentTimer <50){
        scoreHighMultiplier();
    } else if (currentTimer > 30 && currentTimer < 40) {
        scoreMediumMultiplier();
    } else if (currentTimer > 20 && currentTimer < 30) {
        scoreLowMultiplier();
    } else {
        scoreLowestMultiplier();
    }
    
}

function scoreLowestMultiplier(){
    let multiplierLowest = currentTimer *1;
    timerHtml.innerHTML = multiplierLowest;
    score.textContent = multiplierLowest;
    updateHighScore(multiplierLowest);
}

function scoreLowMultiplier(){
    let multiplierOne = currentTimer *1.5;
    timerHtml.innerHTML = multiplierOne;
    score.textContent = multiplierOne;
    updateHighScore(multiplierOne);
}

function scoreMediumMultiplier(){
    let multiplierTwo = currentTimer * 2.5;
    timerHtml.innerHTML = multiplierTwo;
    score.textContent= multiplierTwo;
    updateHighScore(multiplierTwo);
}

function scoreHighMultiplier(){
    let multiplierThree = currentTimer * 3.5;
    timerHtml.innerHTML = multiplierThree;
    score.textContent = multiplierThree;
    updateHighScore(multiplierThree)
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
    clearInterval(count);  // Freeze the timer by clearing the interval
    // At this point, 'currentTimer' holds the frozen value
    calculateScore();
}

/**
 * GameOver function restars the game and displays the GameOver popup
 */
function gameOver() {
    hideShowElement(false, ".popup-game-over");
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
    hideShowElement,
    
};