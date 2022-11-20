let arrows = document.querySelectorAll(".left-right button");//var contenant les flèches gauche droite des carrousels
let enseignants = document.getElementsByClassName("enseignants");//var contenant la liste des enseignants(un par un) - 14 objets(profs)
let nbRandom = Math.floor(Math.random() * 10);//nombre aléatoire pour générer un prof différent à chaque refresh(pour format desktop)
let counter = document.getElementById("counter");//Var contenant le compteur du nombre de prof
let imgCarrousel = document.getElementsByClassName("imgProf");//var contenant la liste des images des enseignants(un par un) - 14 objets(images)

let nbProf = nbRandom;//nb pour incrémenter le prof dans lequel on est rendu
//***************Initialisation de la page **********************
enleverProf();//Enlever tous les profs

if(nbProf == 10){
    imgCarrousel[nbProf - 1].style.display = "flex";
    imgCarrousel[nbProf].style.display = "flex";
    imgCarrousel[0].style.display = "flex";
    imgCarrousel[0].style.order = "1";
} else if(nbProf == 0){
    imgCarrousel[nbProf].style.display = "flex";
    imgCarrousel[nbProf + 1].style.display = "flex";
    imgCarrousel[enseignants.length - 1].style.display = "flex";
    imgCarrousel[enseignants.length - 1].style.order = "-1";
}else{
    imgCarrousel[nbProf].style.display = "flex";
    imgCarrousel[nbProf + 1].style.display = "flex";
    imgCarrousel[nbProf - 1].style.display = "flex";
}

enseignants[nbProf].style.display = "flex";//Afficher le prof selon le prof choisi
counter.innerHTML = nbProf + 1 + "/" + enseignants.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total

//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("mousedown", () => {
    enleverProf();//enlever tous les profs
    imgCarrousel[nbProf].style.display = "flex";

    if(nbProf > 0 && nbProf != 1){//si nbProf est plus grand que 0 et plus petit ou egal à 14
        nbProf--;//Décrémenter
        imgCarrousel[nbProf - 1].style.display = "flex";

    }else if(nbProf == 0){//sinon si nbProf est égal à 0
        nbProf = 10;//mettre nbProf à 13
        imgCarrousel[nbProf].style.order = "-1";
        imgCarrousel[nbProf - 1].style.display = "flex";
        imgCarrousel[nbProf - 1].style.order = "-1";

    }else if(nbProf == 1){//si nbProf est égal à 13, afficher le prof suivant
        nbProf--;//Décrémenter
        imgCarrousel[10].style.display = "flex";
        imgCarrousel[10].style.order = "-1";
    }

    imgCarrousel[nbProf].style.display = "flex";
    enseignants[nbProf].style.display = "flex";//mettre en flex le display du prof actuel

    counter.innerHTML = nbProf + 1 + "/" + enseignants.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("mousedown", () => {
    enleverProf();//enlever tous les profs

    if(nbProf < 10 && nbProf != 9 ) {//si nbProf est plus grand ou egal que 0 et plus petit que 13
        imgCarrousel[nbProf].style.display = "flex";
        nbProf++;//Incrémenter
        imgCarrousel[nbProf].style.display = "flex";
        imgCarrousel[nbProf + 1].style.display = "flex";

    }else if(nbProf == 9){//sinon si nbProf est égal à 13
        imgCarrousel[nbProf].style.display = "flex";
        nbProf++;//Décrémenter
        imgCarrousel[nbProf].style.display = "flex";
        imgCarrousel[0].style.display = "flex";
        imgCarrousel[0].style.order = "1";
    }else if(nbProf == 10){//sinon si nbProf est égal à 13
        imgCarrousel[nbProf].style.display = "flex";
        imgCarrousel[nbProf].style.order = "-1";
        nbProf = 0;//mettre nbProf à 13
        imgCarrousel[nbProf].style.display = "flex";
        imgCarrousel[nbProf + 1].style.display = "flex";
    }

    enseignants[nbProf].style.display = "flex"; //mettre en flex le display du prof actuel
    counter.innerHTML = nbProf + 1 + "/" + enseignants.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total
})

//Fonction qui permet d'enlever l'affichage de tous les profs
function enleverProf(){
    //Si nbProf est en haut de 0 et en bas de 14
    //rajouter un display none à tous les éléments du array de profs
    if(nbProf => 0 && nbProf < 11){
        for(let i = 0; i < enseignants.length; i++){
            enseignants[i].style.display= "none";
            imgCarrousel[i].style.display = "none";
            imgCarrousel[i].style.order = "0";
        }
    } 
}