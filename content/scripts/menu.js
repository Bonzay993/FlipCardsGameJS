

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
    
    // Toggle the audio state
    let musicButton = document.querySelector(".on-off");
    if (musicButton.innerText === "Off") {
        document.querySelector(".on-off").innerText = "On";
        playMenuAudio();
        
    } else {
        document.querySelector(".on-off").innerText = "Off";
        stopMenuAudio();
        
    }
}



// Sets the audio on /off on the ingame Music button
function toggleAudioIngame() {
    // Play the button click sound
    menuBtnOnClick();
    
    // Toggle the audio state
    let musicButton = document.querySelector(".ingame-on-off");
    if (musicButton.innerText === "Off") {
        document.querySelector(".ingame-on-off").innerText = "On";
        playMenuAudio();
        
    } else {
        document.querySelector(".ingame-on-off").innerText = "Off";
        stopMenuAudio();
        
    }
}

//Click sound

function menuBtnOnClick(){
    const menuBtnClick = new Audio(getSounds('menu-btn-onclick'));
    menuBtnClick.play();
}

//Mouse hover sound function that iterates to each menu btn
function menuBtnHover() {
    const menuBtnClick = new Audio('./content/sound/menu-btn-hover.mp3');
    const buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            if (!menuBtnClick.paused) {
                menuBtnClick.currentTime = 0;
            }
            menuBtnClick.play();
        });
    });
}









