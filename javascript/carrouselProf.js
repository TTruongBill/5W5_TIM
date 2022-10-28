let arrows = document.querySelectorAll(".left-right button");//var contenant les flèches gauche droite des carrousels
let enseignants = document.getElementsByClassName("enseignants");//var contenant la liste des enseignants(un par un) - 14 objets(profs)
let listeEnseignant = document.getElementById("listeProfs");//var contenant la boite avec tous les enseignants - (1 object)

let nbProf = 0;//nb pour incrémenter le prof dans lequel on est rendu

//Initialisation de la page rajouter 2 profs
enleverProf();
enseignants[nbProf].style.display = "flex";
enseignants[nbProf + 1].style.display = "flex";

//rajouter la classe qui rajoute un style left
listeEnseignant.classList.add("rajoutLeft");

enableDisableArrows();//désactiver la flèche de gauche

//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutRight"); //Enlever la classe qui rajoute un style right
    //Si le nbProf est en haut de 0 et qu'il n'est pas égal à 1, 
    //rajouter 3 prof à partir de l'incrémentation et ensuite décrémenter
    if(nbProf > 0 && nbProf != 1){
        enleverProf();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf - 1].style.display = "flex";
        enseignants[nbProf - 2].style.display = "flex";
        nbProf--;
    } else if(nbProf == 1){//Sinon si nbProf est égal à 1
        //rajouter 2 prof à partir de l'incrémentation, rajouter la classe qui rajoute un style left,
        //ensuite décrémenter
        enleverProf();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf - 1].style.display = "flex";
        listeEnseignant.classList.add("rajoutLeft");
        nbProf--;
    }
    //désactiver ou activer la flèche de gauche
    enableDisableArrows();
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutLeft");//Enlever la classe qui rajoute un style left
    //Si le nbProf est en bas de 13 et qu'il n'est pas égal à 12, 
    //rajouter 3 prof à partir de l'incrémentation et ensuite incrémenter
    if(nbProf < 13 && nbProf != 12){
        enleverProf();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf + 1].style.display = "flex";
        enseignants[nbProf + 2].style.display = "flex";
        nbProf++;
    }else if(nbProf == 12){//Sinon si nbProf est égal à 12
        //rajouter 2 prof à partir de l'incrémentation, rajouter la classe qui rajoute un style right,
        //ensuite incrémenter
        enleverProf();
        enseignants[nbProf].style.display = "flex";
        enseignants[nbProf + 1].style.display = "flex";
        listeEnseignant.classList.add("rajoutRight");
        nbProf++;
    }
    //désactiver ou activer la flèche de droite
    enableDisableArrows();
})

//Fonction qui permet d'activer ou désactiver les boutons pour changer de profs
function enableDisableArrows(){
    //Si nbProf est égal à 1, la flèche de gauche est désactivé
    //Sinon si nbprof est en haut de 0 et en bas de 13, activer les 2 flèches
    //sinon si nbProf est égal à 13, la flèche de droite est désactivé
    if(nbProf == 0){
        arrows[0].disabled = true;
    }else if(nbProf > 0 && nbProf < 13){
        arrows[0].disabled = false;
        arrows[1].disabled = false;
    } else if(nbProf == 13){
        arrows[1].disabled = true;
    }
}

//Fonction qui permet d'enlever l'affichage de tous les profs
function enleverProf(){
    //Si nbProf est en haut de 0 et en bas de 14
    //rajouter un display none à tous les éléments du array de profs
    if(nbProf => 0 && nbProf <= 14){
        for(let i = 0; i < enseignants.length; i++){
            enseignants[i].style.display= "none";
        }
    } 
}