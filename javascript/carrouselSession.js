let carrousel_left_right = document.getElementById("left-right");
let arrows = document.querySelectorAll("#left-right h2");
let nbSession = 0;
let sessionsListe = document.getElementsByClassName("session");
sessionsListe[0].style.display = "block";

enableDisableArrows();


arrows[0].addEventListener("click", () => {
    if(nbSession > 0){
        sessionsListe[nbSession].style.display = "none";
        nbSession--;
        carrousel_left_right.childNodes[3].textContent = "SESSION " + (nbSession + 1);
        sessionsListe[nbSession].style.display = "block";
    }
    enableDisableArrows();
})

arrows[1].addEventListener("click", () => {
    if(nbSession < 5){
        sessionsListe[nbSession].style.display = "none";
        nbSession++;
        sessionsListe[nbSession].style.display = "block";
        carrousel_left_right.childNodes[3].textContent = "SESSION " + (nbSession + 1);

    }
    
    enableDisableArrows();
})

function enableDisableArrows(){
    if(nbSession == 0){
        arrows[0].classList.remove("hover");
        arrows[1].classList.add("hover");
        arrows[0].classList.add("disabled");
    }else if(nbSession > 0 && nbSession < 5){
        arrows[0].classList.remove("disabled");
        arrows[1].classList.remove("disabled");
        arrows[0].classList.add("hover");
        arrows[1].classList.add("hover");
    } else if(nbSession == 5){
        arrows[0].classList.add("hover");
        arrows[1].classList.remove("hover");
        arrows[1].classList.add("disabled");
    }
}
