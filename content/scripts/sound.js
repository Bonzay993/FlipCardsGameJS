/**
 * SETTING THE MENU AUDIO TOGGLE FOR MUSIC
 */

let isAudioPlayed = false;

/**
 * Sound objects
 */

const gameSounds = [
    {
        name: "background-music",
        path: './content/sound/menu.mp3'
    },

    {
        name:"menu-btn-onclick",
        path:'./content/sound/menu-btn-onclick.mp3'
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

]

/**Function that gets the sound objects based on their name */
function getSounds(name) {
    const asset = gameSounds.find(asset => asset.name === name);
    return asset ? asset.path : null; // Return the path if found, otherwise return null
}



/**
 * Function that plays the Music
 */
function playMenuAudio() {
    isAudioPlayed = true;
    const menuAudio = document.querySelector(".menu-audio");
    menuAudio.loop = true;
    menuAudio.play();
}

/**Function that stops the Music */
function stopMenuAudio() {
    isAudioPlayed = false;
    const menuAudio = document.querySelector(".menu-audio");
    menuAudio.pause();
    menuAudio.loop = false;
}


/**
 * Functions that toogles the audio in the menu and ingame and 
 * does a sync.
 */

function toggleAudio() {
    // Play the button click sound
    menuBtnOnClick();
    
    // Get all music toggle buttons
    let musicButtons = document.querySelectorAll(".on-off");
    
    // Determine the current state based on the first button
    let currentState = musicButtons[0].innerText;

    // Toggle the state
    let newState = currentState === "Off" ? "On" : "Off";

    // Update all buttons to the new state
    musicButtons.forEach(button => {
        button.innerText = newState;
    });

    // Play or stop the music based on the new state
    if (newState === "On") {
        playMenuAudio();
    } else {
        stopMenuAudio();
    }
}




/**
 * Sound when clicking on buttons
 */
function menuBtnOnClick(){
    const menuBtnClick = new Audio(getSounds('menu-btn-onclick'));
    menuBtnClick.play();
}

//Mouse hover sound function that iterates to each menu btn
/**
 * This code checks if the audio is currently playing (!menuBtnClick.paused is true). 
 * If it is, the code resets the audio to the beginning (menuBtnClick.currentTime = 0) before playing it again. 
 * This ensures that when you hover over the button multiple times in quick succession, 
 * the sound restarts instead of overlapping.
 */
function menuBtnHover() {
    const menuBtnClick = new Audio(getSounds('menu-hover-sound'));
    const buttons = document.querySelectorAll(".menu-btn");

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
function successMatchAudio(){
    const successAudio = new Audio(getSounds("succes-match"));
   successAudio.play();
}

/**
 * Sound Effect when 2 cards are not matched
 */
function failedMatchAudio(){
    const failedAudio = new Audio(getSounds('failed-match'));
    failedAudio.play();
}

