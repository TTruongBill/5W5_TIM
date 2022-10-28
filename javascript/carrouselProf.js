let carrousel_left_right = document.getElementById("left-right");
let arrows = document.querySelectorAll(".left-right button");
let enseignants = document.getElementsByClassName("enseignants");
let listeEnseignant = document.getElementById("listeProfs");

let nbProf = 0;

keepTeachs();
listeEnseignant.classList.add("rajoutLeft");
enseignants[nbProf].style.display = "flex";
enseignants[nbProf + 1].style.display = "flex";

enableDisableArrows();

arrows[0].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutRight");
    if(nbProf > 0 && nbProf != 1){
        //enseignants[nbProf - 1].className.add();
        //enseignants[nbProf].className.remove();
        keepTeachs();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf - 1].style.display = "flex";
        enseignants[nbProf - 2].style.display = "flex";
        nbProf--;
    } else if(nbProf == 1){
        keepTeachs();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf - 1].style.display = "flex";
        listeEnseignant.classList.add("rajoutLeft");
        nbProf--;
    }
    enableDisableArrows();
})

arrows[1].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutLeft");
    if(nbProf < 13 && nbProf != 12){
       // enseignants[nbProf + 1].className.add();
        //enseignants[nbProf].className.remove();
        keepTeachs();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf + 1].style.display = "flex";
        enseignants[nbProf + 2].style.display = "flex";
        nbProf++;
    }else if(nbProf == 12){
        keepTeachs();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf + 1].style.display = "flex";
        listeEnseignant.classList.add("rajoutRight");
        nbProf++;
    }
    enableDisableArrows();
})

//Fonction qui permet d'active ou enlever l'animation de hover su 
function enableDisableArrows(){
    if(nbProf == 0){
        arrows[0].disabled = true;
    }else if(nbProf > 0 && nbProf < 13){
        arrows[0].disabled = false;
        arrows[1].disabled = false;
    } else if(nbProf == 13){
        arrows[1].disabled = true;
    }
}

function keepTeachs(){
    if(nbProf => 1 && nbProf <= 13){
        for(let i = 0; i < enseignants.length; i++){
            enseignants[i].style.display= "none";
        }
    } 
}