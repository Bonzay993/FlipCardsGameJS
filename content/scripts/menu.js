/**
 * Putting a timeout so that the background loads
 *
 */



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

// Set the initial state of the button and audio
document.querySelector(".music-on-off").onclick = toggleAudio;
document.querySelector(".start-game").onclick = menuBtnOnClick;

menuBtnHover();
playMenuAudio();

//POPUP

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        200
    )

})

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    playMenuAudio();
});

 document.querySelector("#close-link").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    playMenuAudio();
});







