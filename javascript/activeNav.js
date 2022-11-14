let lis = document.querySelectorAll("#menu-navpages li");//var qui contient la liste de navmenu
//let locationName = "/wordpress/index.php"; //Pour la base de donnée locale, sinon, enleve sur siteground

//Sur la base de donnée locale, rajouter celui ci
//Si la location du site est égale au nom de la page, rajouter la classe qui permet de rajouter une couleur sur le nav précis
/*
if(location.pathname==(locationName + "/cours/")) {
    lis[0].classList.add("navCouleur");
} else if (location.pathname==(locationName + "/prof/")){
    lis[1].classList.add("navCouleur");
} else if (location.pathname==(locationName + "/projet-etudiant/")){
    lis[2].classList.add("navCouleur");
} else if (location.pathname==(locationName + "/vie-etudiante/")){
    lis[3].classList.add("navCouleur");
} else if (location.pathname==(locationName + "/avenir/")){
    lis[4].classList.add("navCouleur");
} else if (location.pathname==(locationName + "/inscription/")){
    lis[5].classList.add("navCouleur");
}
*/

//Sur siteground, afficher celui ci

if(location.pathname==("/cours/")) {
    lis[0].classList.add("navCouleur");
} else if (location.pathname==("/prof/")){
    lis[1].classList.add("navCouleur");
} else if (location.pathname==("/projet-etudiant/")){
    lis[2].classList.add("navCouleur");
} else if (location.pathname==("/vie-etudiante/")){
    lis[3].classList.add("navCouleur");
} else if (location.pathname==("/avenir/")){
    lis[4].classList.add("navCouleur");
} else if (location.pathname==("/inscription/")){
    lis[5].classList.add("navCouleur");
}