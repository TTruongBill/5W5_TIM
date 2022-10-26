let carrousel_left_right = document.getElementById("left-right");
let arrows = document.querySelectorAll(".left-right h2");
let enseignants = document.getElementsByClassName("enseignants");
let listeEnseignant = document.getElementById("listeProfs");
let length = window.getComputedStyle(listeEnseignant).right;
length = length.substring(0 , length.length-2);
length = parseInt(length);
let nbProf = 0;
enableDisableArrows();

arrows[0].addEventListener("click", () => {
    if(nbProf > 0){
        //enseignants[nbProf - 1].className.add();
        //enseignants[nbProf].className.remove();
        length = length - 100;
        listeEnseignant.style.right = length + "px";
        nbProf--;
    }
    enableDisableArrows();
})

arrows[1].addEventListener("click", () => {
    if(nbProf < 13){
       // enseignants[nbProf + 1].className.add();
        //enseignants[nbProf].className.remove();
        length = length + 369;
        listeEnseignant.style.right = length + "vw";
        nbProf++;
    }
    
    enableDisableArrows();
})

function enableDisableArrows(){
    if(nbProf == 0){
        arrows[0].classList.remove("hover");
        arrows[1].classList.add("hover");
        arrows[0].classList.add("disabled");
    }else if(nbProf > 0 && nbProf < 5){
        arrows[0].classList.remove("disabled");
        arrows[1].classList.remove("disabled");
        arrows[0].classList.add("hover");
        arrows[1].classList.add("hover");
    } else if(nbProf == 13){
        arrows[0].classList.add("hover");
        arrows[1].classList.remove("hover");
        arrows[1].classList.add("disabled");
    }
}
