/*global document, window, console, localStorage,
 setTimeout, setInterval, clearInterval */

// Selectors
const MENU_CONTAINER = document.querySelector(".menu-container");
const TITLE_HEADING = document.querySelector(".title-heading");
const SCORE_PARAGRAPH = document.querySelector(".score-paragraph");
const HIGH_SCORE_PARAGRAPH = document.querySelector(".high-score-paragraph");

/** Score Multiplier Variables */
const LOWEST_MULTIPLIER = 1;
const LOW_MULTIPLIER = 1.5;
const MEDIUM_MULTIPLIER = 2.5;
const HIGH_MULTIPLIER = 3.5;

let count;
let currentTimer;

/**
 * RUNNING THE GAME
 */
window.addEventListener("DOMContentLoaded", function () {
    let menuBackground = getBackgroundImages("menuBg");
    gameInitialisation();
    assignBackground(menuBackground);
});

/**
 * Function that hides and shows elements
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
 */
function gameInitialisation() {
    menuBtnHover();
    playMenuAudio();
    menuPopup();
    btnToggleAudio();
    boardInitialisation();
}

/**
 * Initialise the visual elements after pressing the START GAME button
 * Start the game timer after pressing GOT IT button on the level one popup
 */
function boardInitialisation() {
    const START_GAME_BUTTON = document.querySelector(".start-game");
    const GOT_IT_BUTTON = document.querySelector(".got-it-button");

    updateHighScore();

    if (START_GAME_BUTTON) {
        START_GAME_BUTTON.addEventListener("click", boardElements);
    } else {
        console.error("START_GAME_BUTTON is null.");
    }

    if (GOT_IT_BUTTON) {
        GOT_IT_BUTTON.addEventListener("click", function () {
            hideShowElement(true, ".popup-level1");
            MENU_CONTAINER.classList.remove("blur");
            menuBtnOnClick();
            gameTimer(TIMER_LEVEL_ONE);
        });
    } else {
        console.error("GOT_IT_BUTTON is null.");
    }
}

function boardElements() {
    menuBtnOnClick();
    TITLE_HEADING.innerHTML = "Level 1";
    hideShowElement(true, ".button-wrapper");
    MENU_CONTAINER.classList.add("game-container");
    SCORE_PARAGRAPH.classList.remove("hide");
    HIGH_SCORE_PARAGRAPH.classList.remove("hide");
    hideShowElement(false, ".game-music-btn");
    hideShowElement(false, ".game-area-wrapper");
    hideShowElement(false, ".game-menu-btn");
    hideShowElement(true, ".version-paragraph");
    levelOnePop();
    levelOneBoard();
}

/** Function that adds Menu Toggle to music on-off buttons */
function btnToggleAudio() {
    document.querySelectorAll(".music-on-off").forEach(function (button) {
        button.addEventListener("click", toggleAudio);
    });
}

/**
 * Menu POPUP - The popup that loads first when loading the game.
 * This is here just so the sound works as the user has to interact with the
 * game first in order for the sound to play.
 * The user will interact with either the
 * Let's play button or the close button
 */
function menuPopup() {
    window.addEventListener("load", function () {
        setTimeout(openPopup, 200);
    });
    closePopup();

    // Return an object with the openPopup function
    return {
        openPopup: openPopup
    };
}

/** Unhide the Popup */
function openPopup() {
    hideShowElement(false, ".popup");
}

/**
 * Function that enables the user to close the popup
 * Add event listeners for each selector
 * Special case for popup-level1 with additional logic
 */
function closePopup() {
    let popupLevelOne = document.querySelector(".popup-level1");
    closeAndPlayAudio(".close");
    closeAndPlayAudio(".close-link");

    if (popupLevelOne) {
        popupLevelOne.addEventListener("click", function () {
            hideShowElement(true, ".popup");
            MENU_CONTAINER.style.filter = "";
        });
    }
}

function closeAndPlayAudio(selector) {
    document.querySelector(selector).addEventListener("click", function () {
        hideShowElement(true, ".popup");
        playMenuAudio();
        menuBtnOnClick();
    });
}

/** Function that assigns a background so the menu and levels
 * have different backgrounds
 */
function assignBackground(background) {
    let gameContainer = document.querySelector(".set-background");
    if (!gameContainer) {
        console.error("Error: '.menu-container' element not found.");
        return;
    }
    gameContainer.style.backgroundImage = `url('${background}')`;
}

/**
 * First level tutorial popup. Removed the Window Onload because
 * the page is already loaded at this point
 * It also set a background blur so that the popout stands out
 */
function levelOnePop() {
    displayTimer();
    setTimeout(function () {
        hideShowElement(false, ".popup-level1");
    }, 200);
    MENU_CONTAINER.classList.add("blur");
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
 * Display the current value of timer
 * Call gameOver when the timer hits 0
 */
function gameTimer(timer) {
    let timerHtml = document.querySelector(".timer");
    currentTimer = timer;
    count = setInterval(function () {
        timerHtml.textContent = currentTimer;
        if (currentTimer <= 0) {
            clearInterval(count);
            timerHtml.textContent = "0";
            gameOver();
        } else {
            currentTimer = currentTimer - 1; // Use `-=` instead of `--`
        }
    }, 1000);
}

/** Function that sets the scoring rules */
function calculateScore() {
    if (currentTimer >= 40 && currentTimer <= 50) {
        calculateMultiplier(HIGH_MULTIPLIER);
    } else if (currentTimer >= 30 && currentTimer < 40) {
        calculateMultiplier(MEDIUM_MULTIPLIER);
    } else if (currentTimer >= 20 && currentTimer < 30) {
        calculateMultiplier(LOW_MULTIPLIER);
    } else {
        calculateMultiplier(LOWEST_MULTIPLIER);
    }
}

/** Function that calculates the score based on the seconds left on the timer */
function calculateMultiplier(multiplier) {
    let timerHtml = document.querySelector(".score-calculated");
    let score = document.querySelector(".score-value");
    let calculatedScore = currentTimer * multiplier;

    // Split assignments into separate lines to comply with JSLint
    timerHtml.innerHTML = calculatedScore;
    score.textContent = calculatedScore;

    updateHighScore(calculatedScore);
}

/**
 * Function that keeps track of high score
 * and stores it into the browser's cache
 * Retrieve the current high score and store it in a variable
 * Compare current score with the stored high score
 * Update localStorage with the new high score
 * Ensure UI shows current high score if not updated
 */
function updateHighScore(currentScore) {
    try {
        let storedHighScore = highScore();
        let highScoreValue = document.querySelector(".high-score-value");
        if (currentScore > storedHighScore) {
            localStorage.setItem("highScore", currentScore);
            highScoreValue.textContent = currentScore;
        } else {
            highScoreValue.textContent = storedHighScore;
        }
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        // Check for alert function availability
        if (typeof alert === "function") {
            alert("An error occurred while saving your high score.");
        }
    }
}

/**
 * Get the high score from localStorage, default to 0 if not found
 */
function highScore() {
    let score = parseFloat(localStorage.getItem("highScore"));
    return (Number.isNaN(score) ? 0 : score);
}

/**
 * Level complete function
 * Freeze the timer by clearing the interval
 */
function levelComplete() {
    hideShowElement(false, ".popup-level-complete");
    clearInterval(count);
    calculateScore();
}

/**
 * GameOver function restarts the game (check HTML)
 * and displays the GameOver popup
 */
function gameOver() {
    hideShowElement(false, ".popup-game-over");
}

// Exporting Jest Tests for Node.js (e.g., Jest) only
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        gameInitialisation,
        menuPopup,
        levelOnePop,
        gameTimer,
        updateHighScore,
        levelComplete,
        gameOver,
        hideShowElement
    };
}
