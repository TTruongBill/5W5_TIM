let titreSession = document.getElementById("sessions");//var qui contient le titre de la session 
let arrows = document.querySelectorAll("#left-right button");//var contenant les flèches gauche droite des carrousels
let nbSession = 0;//nb pour incrémenter la session dans laquelle on est rendu
let sessionsListe = document.getElementsByClassName("session");//var contenant la liste des session(un par un) - 6 objets(session)
let mediaQuery = window.matchMedia("(min-width: 600px)");
//Initialisation de la page afficher session 1
sessionsListe[0].style.display = "flex";
enableDisableArrows();//désactiver la flèche de gauche

//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("click", () => {
    //Si nbSession est en haut de 0 
    if(nbSession > 0){
        sessionsListe[nbSession].style.display = "none";//rajouter un display none sur la session actuelle
        nbSession--;//décrémenter
        titreSession.innerHTML = "SESSION " + (nbSession + 1);//changer le titre pour la prochaine session
        sessionsListe[nbSession].style.display = "flex";
    }
    enableDisableArrows();
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("click", () => {
    //Si nbSession est en bas de 5
    if(nbSession < 5){
        sessionsListe[nbSession].style.display = "none";//rajouter un display none sur la session actuelle
        nbSession++;//incrémenter
        titreSession.innerHTML = "SESSION " + (nbSession + 1);//changer le titre pour la prochaine session
        sessionsListe[nbSession].style.display = "flex";
    }
    
    enableDisableArrows();
})
//Fonction qui permet d'activer ou désactiver les boutons pour changer de profs
function enableDisableArrows(){
    //Si nbSession est égal à 0, la flèche de gauche est désactivé
    //Sinon si nbSession est en haut de 0 et en bas de 5, activer les 2 flèches
    //sinon si nbSession est égal à 5, la flèche de droite est désactivé
    if(nbSession == 0){
        arrows[0].disabled = true;
    }else if(nbSession > 0 && nbSession < 5){
        arrows[0].disabled = false;
        arrows[1].disabled = false;
    } else if(nbSession == 5){
        arrows[1].disabled = true;
    }
}
