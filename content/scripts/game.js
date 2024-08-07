// Menu POPUP

function menuPop(){
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
    
}


/**
 * First level tutorial popup .Removed the Window Onload because
 * the page is already loaded at this point
 */

function levelOnePop(){
        setTimeout(
            function open(event){
                document.querySelector(".popup-level1").style.display = "block";
            },
            200
        );

        document.querySelector("#close-level1").addEventListener("click", function(){
            //starts the game timer after clicking GOT IT!
            gameTimer()
            document.querySelector(".popup-level1").style.display = "none";
            document.querySelector('.menu-container').style.filter = 'none';
            
            
            //removing the blur when user clicks on close
            
        });
        
        document.querySelector("#close-link-level1").addEventListener("click", function(){
            document.querySelector(".popup-level1").style.display = "none";
            document.querySelector('.menu-container').style.filter = 'none';
            //removing the blur when user clicks Ok
            gameTimer()
        });

        //setting a blur so that the popout stands out
        document.querySelector('.menu-container').style.filter = 'blur(3px)';
        
        
}

//GENERAL GAME SOUND 

//Sound effect for when matching cards
function successMatchAudio(){
    const successAudio = new Audio('./content/sound/successmatch.mp3')
   successAudio.play();
}

//Sound effect for when not matching cards
function failedMatchAudio(){
    const failedAudio = new Audio('./content/sound/failedmatch.mp3')
    failedAudio.play();
}

function gameTimer(){
    let timerHtml = document.querySelector('.timer');

    //getting current time
    var count = 5
    
    var timer = setInterval(function() {
        count--
        timerHtml.textContent = count;
        if(count == -1){
            clearInterval(timer);
            timerHtml.textContent = '0'
            gameOver();
            
        } 
    }, 1000);

    
    
}

function gameOver(){
    let popup = document.querySelector('.popup-game-over')
    popup.style.display= 'block';
    restartGame()
}

function restartGame(){
    document.querySelector('.score-value').textContent = '0';
    
}