let cours = document.getElementsByClassName("cours");
let ouvrirCours = document.getElementsByClassName("cours_ouvrir");
let fermerCours = document.getElementsByClassName("cours_fermer");

for(let i = 0; i < ouvrirCours.length; i++){
    ouvrirCours[i].addEventListener("click", () => {
        for(let j = 0; j < ouvrirCours.length; i++){
            fermerCoursAuto(cours[j], fermerCours[j], ouvrirCours[j]);
        }
        cours[i].style.width = "100%";
        fermerCours[i].style.display = "block";
        ouvrirCours[i].style.display = "none";
        cours[i].style.order = -1;
    })

    fermerCours[i].addEventListener("click", () => {
        fermerCoursAuto(cours[i], fermerCours[i], ouvrirCours[i])
    })
    
}

function fermerCoursAuto(cours, fermer, ouvrir){
        cours.style.width = "43%";
        fermer.style.display = "none";
        ouvrir.style.display = "block";
        cours.style.order = 0;
    
}

    