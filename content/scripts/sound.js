/**
 * SETTING THE MENU AUDIO TOGGLE FOR MUSIC
 */

let isAudioPlayed = false;

/**
 * Sound objects
 */

const GAME_SOUNDS = [{
        name: "background-music",
        path: './content/sound/menu.mp3'
    },

    {
        name: "menu-btn-onclick",
        path: './content/sound/menu-btn-onclick.mp3'
    },

    {
        name: "menu-hover-sound",
        path: "./content/sound/menu-btn-hover.mp3"
    },

    {
        name: "succes-match",
        path: "./content/sound/successmatch.mp3"
    },

    {
        name: "failed-match",
        path: "./content/sound/failedmatch.mp3"
    },

];

/**Function that gets the sound objects based on their name */
function getSounds(name) {
    let asset = GAME_SOUNDS.find(asset => asset.name === name);
    return asset ? asset.path : null; // Return the path if found, otherwise return null
}

/**
 * Function that plays the Music
 */
function playMenuAudio() {
    isAudioPlayed = true;
    let menuAudio = document.querySelector(".menu-audio");
    menuAudio.play();
    menuAudio.loop = true;
}

/**Function that stops the Music */
function stopMenuAudio() {
    isAudioPlayed = false;
    let menuAudio = document.querySelector(".menu-audio");
    menuAudio.pause();
    menuAudio.loop = false;
}

/**
 * Functions that toogles the audio in the menu and ingame and 
 * does a sync :
 * Play the button click sound
 * Get all music toggle buttons
 * Determine the current state based on the first button
 * Toggle the state
 * Update all buttons to the new state
 * Play or stop the music based on the new state
 */
function toggleAudio() {
    menuBtnOnClick();
    let musicButtons = document.querySelectorAll(".on-off");
    let currentState = musicButtons[0].innerText;
    let newState = currentState === "Off" ? "On" : "Off";
   
    musicButtons.forEach(button => {
        button.innerText = newState;
    });

    if (newState === "On") {
        playMenuAudio();
    } else {
        stopMenuAudio();
    }
}

/**
 * Sound when clicking on buttons
 */
function menuBtnOnClick() {
    let menuBtnClick = new Audio(getSounds('menu-btn-onclick'));
    menuBtnClick.play();
}

//Mouse hover sound function that iterates to each menu btn
/**
 * This code checks if the audio is currently playing (!menuBtnClick.paused is true). 
 * If it is, the code resets the audio to the beginning (menuBtnClick.currentTime = 0) before playing it again. 
 * This ensures that when the user hover over the button multiple times in quick succession, 
 * the sound restarts instead of overlapping.
 */
function menuBtnHover() {
    let menuBtnClick = new Audio(getSounds('menu-hover-sound'));
    let buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            if (!menuBtnClick.paused) {
                menuBtnClick.currentTime = 0; //resets to the beginning
            }
            menuBtnClick.play();
        });
    });
}

/**
 * Sound Effect when 2 cards are matched
 */
function successMatchAudio() {
    let successAudio = new Audio(getSounds("succes-match"));
    successAudio.play();
}

/**
 * Sound Effect when 2 cards are not matched
 */
function failedMatchAudio() {
    let failedAudio = new Audio(getSounds('failed-match'));
    failedAudio.play();
}