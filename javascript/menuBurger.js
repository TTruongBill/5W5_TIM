let checkboxMenu = document.getElementById("menuNavMobile");
let menuBurger = document.getElementsByClassName("menuBurger");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");

checkboxMenu.addEventListener("click", burgerAnimation);

function burgerAnimation(){
    if(checkboxMenu.checked == true){
        line1.classList.add("ligne1X");
        line2.classList.add("ligne2X");
        line3.classList.add("ligne3X");
        menuBurger[0].classList.add("circleBackground");
    }else {
        line1.classList.remove("ligne1X");
        line2.classList.remove("ligne2X");
        line3.classList.remove("ligne3X");
        menuBurger[0].classList.remove("circleBackground");
    }
}

