(function(){
  let galerie_img = document.querySelectorAll('.gallerie1 .wp-block-image img');
let boite_carrousel_nav = document.querySelector(".boite_carrousel_nav");
let boite_carrousel_img = document.querySelector(".boite_carrousel_img");

let index = 0;
    for (const img of galerie_img) {
      let elmImage = document.createElement('img');
      img.dataset.index = index;
      elmImage.setAttribute('src', img.getAttribute('src'));
      boite_carrousel_img.append(elmImage);

      let bouton = document.createElement('input');
      bouton.checked=false;
      bouton.type = "radio";
      bouton.class = "bouton";
      bouton.name = "bouton";
      bouton.dataset.index = index++;
      boite_carrousel_nav.append(bouton);


      bouton.addEventListener('mousedown', function(e){ 
        e.preventDefault;
        initialise__carrousel__img();
        boite_carrousel_img.children[this.dataset.index].classList.add('img-ouvrir');
      })

    }
    function initialise__carrousel__img(){
      let collectionImg = document.querySelectorAll('.boite_carrousel_img img');
      for (let i=0 ; i<collectionImg.length; i++){
        if(boite_carrousel_nav.children[i].checked == true){ 
          collectionImg[i].classList.remove('img-ouvrir') ;
        }
      }
    }

    function carrousel_bouge(){
      let collectionImg = document.querySelectorAll('.boite_carrousel_img img');
    }
  })()
  