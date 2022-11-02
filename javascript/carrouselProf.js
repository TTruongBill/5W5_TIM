/*let arrows = document.querySelectorAll(".left-right button");//var contenant les flèches gauche droite des carrousels
let enseignants = document.getElementsByClassName("enseignants");//var contenant la liste des enseignants(un par un) - 14 objets(profs)
let listeEnseignant = document.getElementById("listeProfs");//var contenant la boite avec tous les enseignants - (1 object)
let imgCarrousel = document.getElementById("imgProf");//Var contenant la boite avec tous les images des enseignants
let nbRandom = Math.floor(Math.random() * 14);//nombre aléatoire pour générer un prof différent à chaque refresh(pour format desktop)

let nbProf = 0;//nb pour incrémenter le prof dans lequel on est rendu
let tailleDesktop = window.matchMedia("(min-width: 600px)")//taille minimum pour être en format desktop
//***************Initialisation de la page **********************
enleverProf();//Enlever tous les profs

//Si on est en format desktop
if (tailleDesktop.matches) {
    nbProf = nbRandom; //Afficher un prof aléatoire
    imgCarrousel.style.display = "flex";
} else{//Sinon
    enseignants[nbProf + 1].style.display = "flex"; //Mettre le prof suivant en display flex
    listeEnseignant.classList.add("rajoutLeft");//Rajouter la classe qui permet de déplacer les enseignants vers la droite
    imgCarrousel.style.display = "none";
}
enseignants[nbProf].style.display = "flex";//Afficher le prof selon le prof choisi
enableDisableArrows();//regarder si on doit désactiver des flèches ou non

//Écoute si la taille du window change et s'il change
tailleDesktop.addEventListener("change", () =>{
    enleverProf();//Enlever tous les profs
    enseignants[nbProf].style.display = "flex";//Afficher le prof actuel

    if (tailleDesktop.matches) {//Si on est en format desktop
        imgCarrousel.style.display = "flex";//Afficher le carrousel d'image à gauche
        //Enlever les classe qui déplace le carrousel des profs
        listeEnseignant.classList.remove("rajoutRight");
        listeEnseignant.classList.remove("rajoutLeft");
    } else{//sinon
        imgCarrousel.style.display = "none";//enlever le carrousel d'image à gauche
        if(nbProf > 0 && nbProf != 13){//Si nbProf est plus grand que 0 et pas égal à 13, afficher le prof suivant et précédent
            enseignants[nbProf - 1].style.display = "flex";
            enseignants[nbProf + 1].style.display = "flex";
        }else if(nbProf == 13){//si nbProf est égal à 13, afficher le prof précédent
            enseignants[nbProf - 1].style.display = "flex";
            listeEnseignant.classList.add("rajoutRight");//Rajouter la classe qui déplace le carrousel de prof à partir de la droite
        }else if(nbProf == 0){//si nbProf est égal à 0, afficher le prof suivant
            enseignants[nbProf + 1].style.display = "flex";
            listeEnseignant.classList.add("rajoutLeft");//Rajouter la classe qui déplace le carrousel de prof à partir de la gauche
        }

    }
}) 
//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutRight"); //Enlever la classe qui rajoute un style right
    enleverProf();//enlever tous les profs

     if(!tailleDesktop.matches){//Si on est en format mobile
        //Si le nbProf est en haut de 0 et qu'il n'est pas égal à 1, 
        //rajouter 2 prof à partir de l'incrémentation
        if(nbProf > 0 && nbProf != 1){
            enseignants[nbProf].style.display = "flex";
            enseignants[nbProf - 2].style.display = "flex";
        } else if(nbProf == 1){//Sinon si nbProf est égal à 1
            //rajouter 1 prof à partir de l'incrémentation, rajouter la classe qui rajoute un style left,
            enseignants[nbProf].style.display = "flex";
            listeEnseignant.classList.add("rajoutLeft");
        }
    }
    nbProf--;//Décrémenter
    enseignants[nbProf].style.display = "flex";//Afficher le prof précédent
    enableDisableArrows();//Regarder si on doit désactiver une flèche
    
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("click", () => {
    listeEnseignant.classList.remove("rajoutLeft");//Enlever la classe qui rajoute un style left
    enleverProf();//enlever tous les profs

    if(!tailleDesktop.matches){
        //Si le nbProf est en bas de 13 et qu'il n'est pas égal à 12, 
        //rajouter 2 prof à partir de l'incrémentation
        if(nbProf < 13 && nbProf != 12){
            enseignants[nbProf].style.display = "flex";
            enseignants[nbProf + 2].style.display = "flex";
        }else if(nbProf == 12){//Sinon si nbProf est égal à 12
            //rajouter 1 prof à partir de l'incrémentation, rajouter la classe qui rajoute un style right,
            enseignants[nbProf].style.display = "flex";
            listeEnseignant.classList.add("rajoutRight");
        }
    }
    nbProf++;//Incrémenter
    enseignants[nbProf].style.display = "flex";//Afficher le prof suivant
    enableDisableArrows();//désactiver ou activer la flèche de droite
})

//Fonction qui permet d'activer ou désactiver les boutons pour changer de profs
function enableDisableArrows(){
    //Si nbProf est égal à 1, la flèche de gauche est désactivé
    //Sinon si nbprof est en haut de 0 et en bas de 13, activer les 2 flèches
    //sinon si nbProf est égal à 13, la flèche de droite est désactivé
    if(nbProf == 0){
        arrows[0].disabled = true;
    } else if(nbProf == 13){
        arrows[1].disabled = true;
    }else{
        arrows[0].disabled = false;
        arrows[1].disabled = false;
    }
}

//Fonction qui permet d'enlever l'affichage de tous les profs
function enleverProf(){
    //Si nbProf est en haut de 0 et en bas de 14
    //rajouter un display none à tous les éléments du array de profs
    if(nbProf => 0 && nbProf < 14){
        for(let i = 0; i < enseignants.length; i++){
            enseignants[i].style.display= "none";
        }
    } 
}*/
let arrows = document.querySelectorAll(".left-right button");//var contenant les flèches gauche droite des carrousels
let enseignants = document.getElementsByClassName("enseignants");//var contenant la liste des enseignants(un par un) - 14 objets(profs)
let listeEnseignant = document.getElementById("listeProfs");//var contenant la boite avec tous les enseignants - (1 object)
let imgCarrousel = document.getElementsByClassName("imgProf");//Var contenant la boite avec tous les images des enseignants
let nbRandom = Math.floor(Math.random() * 14);//nombre aléatoire pour générer un prof différent à chaque refresh(pour format desktop)
let counter = document.getElementById("counter");

let nbProf = 0;//nb pour incrémenter le prof dans lequel on est rendu
//***************Initialisation de la page **********************
enleverProf();//Enlever tous les profs

enseignants[nbProf].style.display = "flex";//Afficher le prof selon le prof choisi

//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("click", () => {
    enleverProf();//enlever tous les profs
    if(nbProf > 0 && nbProf <= 14){
        nbProf--;//Décrémenter
    }else if(nbProf == 0){
        nbProf = 13;
    }
    enseignants[nbProf].style.display = "flex";

    counter.innerHTML = nbProf + 1 + "/14";
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("click", () => {
    enleverProf();//enlever tous les profs

    if(nbProf >= 0 && nbProf < 13 ) {
        nbProf++;//Incrémenter
    }else if(nbProf == 13){
        nbProf = 0;//Incrémenter
    }
    enseignants[nbProf].style.display = "flex";
    counter.innerHTML = nbProf + 1 + "/14";
})

//Fonction qui permet d'enlever l'affichage de tous les profs
function enleverProf(){
    //Si nbProf est en haut de 0 et en bas de 14
    //rajouter un display none à tous les éléments du array de profs
    if(nbProf => 0 && nbProf < 14){
        for(let i = 0; i < enseignants.length; i++){
            enseignants[i].style.display= "none";
        }
    } 
}