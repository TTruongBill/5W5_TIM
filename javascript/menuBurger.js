let checkboxMenu = document.getElementById("menuNavMobile");//var contenant le checkbox du menuBurge

let menuBurger = document.getElementsByClassName("menuBurger");//var contenant le menuBurger en totalité
//var pour chacun des lignes du menu burger
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");

//Lorsque le menuBurger est appuyé, appeler la fonction burgerAnimation
checkboxMenu.addEventListener("click", burgerAnimation);

//Fonction qui fait animer les lignes du menu burger
function burgerAnimation(){
    if(checkboxMenu.checked == true){//Si le checkbox est checked, rajouter les classes contenant des animations sur chaque ligne
        line1.classList.add("ligne1X");
        line2.classList.add("ligne2X");
        line3.classList.add("ligne3X");
        menuBurger[0].classList.add("circleBackground");//Rajouter un background sur le menu burger
    }else {//sinon enlever les classes contenant les animation
        line1.classList.remove("ligne1X");
        line2.classList.remove("ligne2X");
        line3.classList.remove("ligne3X");
        menuBurger[0].classList.remove("circleBackground");//Enleve le background sur le menu burger
    }
}

