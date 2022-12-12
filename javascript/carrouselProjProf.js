let arrows = document.querySelectorAll(".left-right button");//var contenant les flèches gauche droite des carrousels
let contenu = document.getElementsByClassName("contenuComplet");//var contenant la liste des contenu(un par un) - 14 objets(profs)
let randomNum = Math.floor(Math.random() * contenu.length);//nombre aléatoire pour générer un prof différent à chaque refresh(pour format desktop)
let counter = document.getElementsByClassName("counter");//Var contenant le compteur du nombre de prof
let imgCarrousel = document.getElementsByClassName("imgThumbnail");//var contenant la liste des images des contenu(un par un) - 14 objets(images)
let elmsMobile = document.getElementsByClassName("elmsProfMobile");
let nbRandom = randomNum;
//***************Initialisation de la page **********************
enleverProf();//Enlever tous les profs

if(nbRandom == contenu.length - 1){
    imgCarrousel[nbRandom - 1].style.display = "flex";
    imgCarrousel[nbRandom].style.display = "flex";
    imgCarrousel[0].style.display = "flex";
    imgCarrousel[0].style.order = "1";
} else if(nbRandom == 0){
    imgCarrousel[nbRandom].style.display = "flex";
    imgCarrousel[nbRandom + 1].style.display = "flex";
    imgCarrousel[contenu.length - 1].style.display = "flex";
    imgCarrousel[contenu.length - 1].style.order = "-1";

}else{
    imgCarrousel[nbRandom].style.display = "flex";
    imgCarrousel[nbRandom + 1].style.display = "flex";
    imgCarrousel[nbRandom - 1].style.display = "flex";
}

elmsMobile[nbRandom].style.display = "flex";
contenu[nbRandom].style.display = "flex";//Afficher le prof selon le prof choisi
counter[0].innerHTML = nbRandom + 1 + "/" + contenu.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total

for(let i = 0; i < imgCarrousel.length; i++){
    imgCarrousel[i].addEventListener("mousedown", ()=>{
        nbRandom = i;
        enleverProf();//enlever tous les profs
        contenu[i].style.display = "flex";
        counter[0].innerHTML = i + 1 + "/" + contenu.length
        
        if(i == contenu.length - 1){
            imgCarrousel[i - 1].style.display = "flex";
            imgCarrousel[i].style.display = "flex";
            imgCarrousel[0].style.display = "flex";
            imgCarrousel[0].style.order = "1";
        } else if(i== 0){
            imgCarrousel[i].style.display = "flex";
            imgCarrousel[i + 1].style.display = "flex";
            imgCarrousel[contenu.length - 1].style.display = "flex";
            imgCarrousel[contenu.length - 1].style.order = "-1";

        }else{
            imgCarrousel[i].style.display = "flex";
            imgCarrousel[i + 1].style.display = "flex";
            imgCarrousel[i - 1].style.display = "flex";
        }
        elmsMobile[nbRandom].style.display = "flex";
    })
}
//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("mousedown", () => {
    enleverProf();//enlever tous les profs
    imgCarrousel[nbRandom].style.display = "flex";

    if(nbRandom > 0 && nbRandom != 1){//si nbRandom est plus grand que 0 et plus petit ou egal à 14
        nbRandom--;//Décrémenter
        imgCarrousel[nbRandom - 1].style.display = "flex";

    }else if(nbRandom == 0){//sinon si nbRandom est égal à 0
        nbRandom = contenu.length - 1;//mettre nbRandom à 13
        imgCarrousel[nbRandom].style.order = "-1";
        imgCarrousel[nbRandom - 1].style.display = "flex";
        imgCarrousel[nbRandom - 1].style.order = "-1";

    }else if(nbRandom == 1){//si nbRandom est égal à 13, afficher le prof suivant
        nbRandom--;//Décrémenter
        imgCarrousel[contenu.length - 1].style.display = "flex";
        imgCarrousel[contenu.length - 1].style.order = "-1";
    }
    elmsMobile[nbRandom].style.display = "flex";
    imgCarrousel[nbRandom].style.display = "flex";
    contenu[nbRandom].style.display = "flex";//mettre en flex le display du prof actuel
    counter[0].innerHTML = nbRandom + 1 + "/" + contenu.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("mousedown", () => {
    enleverProf();//enlever tous les profs

    if(nbRandom < contenu.length - 1 && nbRandom != contenu.length - 2 ) {//si nbRandom est plus grand ou egal que 0 et plus petit que 13
        imgCarrousel[nbRandom].style.display = "flex";
        nbRandom++;//Incrémenter
        imgCarrousel[nbRandom].style.display = "flex";
        imgCarrousel[nbRandom + 1].style.display = "flex";

    }else if(nbRandom == contenu.length - 2){//sinon si nbRandom est égal à 13
        imgCarrousel[nbRandom].style.display = "flex";
        nbRandom++;//Décrémenter
        imgCarrousel[nbRandom].style.display = "flex";
        imgCarrousel[0].style.display = "flex";
        imgCarrousel[0].style.order = "1";
    }else if(nbRandom == contenu.length - 1){//sinon si nbRandom est égal à 13
        imgCarrousel[nbRandom].style.display = "flex";
        imgCarrousel[nbRandom].style.order = "-1";
        nbRandom = 0;//mettre nbRandom à 13
        imgCarrousel[nbRandom].style.display = "flex";
        imgCarrousel[nbRandom + 1].style.display = "flex";
    }
    elmsMobile[nbRandom].style.display = "flex";
    contenu[nbRandom].style.display = "flex"; //mettre en flex le display du prof actuel
    counter[0].innerHTML = nbRandom + 1 + "/" + contenu.length;//Écrire dans le compteur le prof auquel on est rendu et le nombre de prof total
})

//Fonction qui permet d'enlever l'affichage de tous les profs
function enleverProf(){
    //Si nbRandom est en haut de 0 et en bas de 14
    //rajouter un display none à tous les éléments du array de profs
    if(nbRandom => 0 && nbRandom < contenu.length){
        for(let i = 0; i < contenu.length; i++){
            contenu[i].style.display= "none";
            imgCarrousel[i].style.display = "none";
            imgCarrousel[i].style.order = "0";
        }
    } 
}