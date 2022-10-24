let lis = document.querySelectorAll("#menu-navpages-1 li");
let locationName = "/wordpress/index.php" ;

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
 


