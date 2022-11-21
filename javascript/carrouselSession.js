let titreSession = document.getElementById("sessions");//var qui contient le titre de la session 
let arrows = document.querySelectorAll("#left-right button");//var contenant les flèches gauche droite des carrousels
let nbSession = 0;//nb pour incrémenter la session dans laquelle on est rendu
let sessionsListe = document.getElementsByClassName("session");//var contenant la liste des session(un par un) - 6 objets(session)
let counter = 0;
let chiffreCours;
let content_total = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > p > .content_total");
let content_trim = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > p > .content_trim");
let ouvrirCours  = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > p > .cours_ouvrir");
let coursSession = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours");
let fermerCours = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > .cours_fermer");

ouvrirCoursButton();

//Initialisation de la page afficher session 1
sessionsListe[0].style.display = "flex";
enableDisableArrows();//désactiver la flèche de gauche

for(let i =0; i < sessionsListe.length; i++){
    sessionsListe[i].classList.add("transparence");
}
sessionsListe[0].classList.remove("transparence");

//Lorsque la flèche de gauche est clicker,
arrows[0].addEventListener("mousedown", () => {
    //Si nbSession est en haut de 0 
    if(nbSession > 0){
        ajoutTransparence();
        nbSession--;//décrémenter

        setTimeout(() => {
            sessionsListe[nbSession + 1].style.display = "none";//rajouter un display none sur la session actuelle
            titreSession.innerHTML = "SESSION " + (nbSession + 1);//changer le titre pour la prochaine session
            sessionsListe[nbSession].style.display = "flex";        
        }, 300);
    }
    
    setTimeout(retireTransparenceTitre, 300);
    setTimeout(retireTransparenceSession, 500);

    ouvrirCoursButton();
    enableDisableArrows();
})
//Lorsque la flèche de droite est clicker,
arrows[1].addEventListener("mousedown", () => {
    //Si nbSession est en bas de 5
    if(nbSession < 5){
        ajoutTransparence();
        nbSession++;//incrémenter  

        setTimeout(() => {
            sessionsListe[nbSession - 1].style.display = "none";//rajouter un display none sur la session actuelle 
            titreSession.innerHTML = "SESSION " + (nbSession + 1);//changer le titre pour la prochaine session
            sessionsListe[nbSession].style.display = "flex";    
        }, 300);  
    }
        
    setTimeout(retireTransparenceTitre, 300);
    setTimeout(retireTransparenceSession, 500);

    ouvrirCoursButton();
    enableDisableArrows();
})

let titreCours = document.querySelectorAll(".cours > section > h1");
for(let i = 0; i < titreCours.length; i++){
    titreCours[i].innerHTML = titreCours[i].innerHTML.toUpperCase();
}
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

function ouvrirCoursButton(){
    ouvrirCours = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > p > .cours_ouvrir");
    coursSession = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours");
    fermerCours = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > .cours_fermer");
    content_total = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > .content_total");
    content_trim = document.querySelectorAll("#session" + (nbSession + 1) + " > .cours > .content_trim");
    
    for(let i = 0; i < ouvrirCours.length; i++){
        fermerCoursAuto(coursSession[i], fermerCours[i], ouvrirCours[i], content_trim[i], content_total[i]);
    }
    
    for(let i = 0; i <ouvrirCours.length; i++){
        ouvrirCours[i].addEventListener("mousedown", () => {

            for(let j = 0; j < ouvrirCours.length; j++){
                fermerCoursAuto(coursSession[j], fermerCours[j], ouvrirCours[j], content_trim[j], content_total[j]);
            }
            
            coursSession[i].classList.add("widthCoursOuvert");
            fermerCours[i].style.display = "flex";
            ouvrirCours[i].style.display = "none";
            content_trim[i].style.display = "none";
            content_total[i].style.display = "flex";
            chiffreCours = i;
            coursSession[i].setAttribute("data-order", 1);

       
            
            
            for(let j = chiffreCours - 1; j >= 0;j--){
                coursSession[j].setAttribute("data-order", j + 2); 
                
            }
            for(let j = chiffreCours + 1; j < coursSession.length; j++){
                coursSession[j].setAttribute("data-order", j + 1);
            }
        })

        fermerCours[i].addEventListener("mousedown", () => {
            fermerCoursAuto(coursSession[i], fermerCours[i], ouvrirCours[i], content_trim[i], content_total[i]);
        })
    
    }
    
}

function fermerCoursAuto(cours, fermer, ouvrir, contentTrim, contentTotal){
    cours.classList.remove("lirePlusCours");
    fermer.style.display = "none";
    ouvrir.style.display = "block";
    contentTrim.style.display = "flex";
    contentTotal.style.display = "none";
    cours.classList.remove("widthCoursOuvert");
}

function ajoutTransparence() {
    titreSession.classList.add("transparence");
    sessionsListe[nbSession].classList.add("transparence");
}

function retireTransparenceTitre() {
    titreSession.classList.remove("transparence");
}

function retireTransparenceSession() {
    sessionsListe[nbSession].classList.remove("transparence");
}