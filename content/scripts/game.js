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
            document.querySelector(".popup-level1").style.display = "none";
            document.querySelector('.menu-container').style.filter = 'none';
            //removing the blur when user clicks on close
            
        });
        
        document.querySelector("#close-link-level1").addEventListener("click", function(){
            document.querySelector(".popup-level1").style.display = "none";
            document.querySelector('.menu-container').style.filter = 'none';
            //removing the blur when user clicks Ok
            
        });

        //setting a blur so that the popout stands out
        document.querySelector('.menu-container').style.filter = 'blur(3px)';
        
    
}

