
/**
 * SETTING THE MENU AUDIO TOGGLE FOR MUSIC
 */

let isAudioPlayed = false;

function playMenuAudio() {
    isAudioPlayed = true;
    const menuAudio = document.querySelector(".menu-audio");
    menuAudio.loop = true;
    menuAudio.play();
}

function stopMenuAudio() {
    isAudioPlayed = false;
    const menuAudio = document.querySelector(".menu-audio");
    menuAudio.pause();
    menuAudio.loop = false;
}


// Sets the audio on /off on  the main menu

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
 * Menu Click Button Sound
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









