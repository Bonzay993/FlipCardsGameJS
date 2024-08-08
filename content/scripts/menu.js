

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

function menuBtnOnClick(){
    const menuBtnClick = new Audio('./content/sound/menu-btn-onclick.mp3')
    menuBtnClick.play();
}

function menuBtnHover(){
    const menuBtnClick = new Audio('./content/sound/menu-btn-hover.mp3');
    document.querySelector(".menu-btn").addEventListener('mouseover', function(){
        menuBtnClick.play();
    })

}









