let cours = document.getElementsByClassName("cours");
let ouvrirCours = document.getElementsByClassName("cours_ouvrir");
let fermerCours = document.getElementsByClassName("cours_fermer");
let coursOuvert;
fermerCours();

for(let i = 0; i < ouvrirCours.length;){
    ouvrirCours[i].addEventListener("mousedown", () => {
        for(let j = 0; j < ouvrirCours.length; j++){
            fermerCoursAuto(cours[j], fermerCours[j], ouvrirCours[j]);
        }
        cours[i].setAttribute("data-order", "1");
        cours[i].classList.add("lirePlusCours");
        fermerCours[i].style.display = "block";
        ouvrirCours[i].style.display = "none";
        cours[i].style.order = -1;
        let splicedEl = cours.splice(i,1)[0];
        cours.splice(i, 0, splicedEl);
        i++;
    })

    fermerCours[i].addEventListener("mousedown", () => {
        fermerCoursAuto(cours[i], fermerCours[i], ouvrirCours[i])
        i++;
    })
    
}

function fermerCoursAuto(cours, fermer, ouvrir){
        cours.classList.remove("lirePlusCours");
        fermer.style.display = "none";
        ouvrir.style.display = "block";
        changeOrder();
    
}

function changeOrder(){
    for(let i =0; i <sessionsListe.length; i++){
        let coursSession = document.querySelectorAll("#session" + (i + 1) + " > .cours");
        for(let j = 0; j < coursSession.length; j++){
            coursSession[j].setAttribute("data-order", j + 1);
        }
    }

    for(const cour of cours){
        let order = cour.getAttribute("data-order");

        switch(order){
            case 1:
            cour.setAttribute
        }

    }
}