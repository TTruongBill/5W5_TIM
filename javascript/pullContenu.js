let pullEl = document.getElementById("pullEl");
let pullElement = document.getElementsByClassName("textePull");

let startY;
let dist;
let threshold = 150; 
let allowedTime = 200; 
let elapsedTime;
let startTime;

pullEl.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0]
    dist = 0
    startY = touchobj.pageY
    //startTime = new Date().getTime()
    document.body.style.overflowY = "hidden";
    e.preventDefault()
}, false)

pullEl.addEventListener('touchmove', function(e){
    document.body.style.overflowY = "hidden";
    e.preventDefault() 
}, false)

pullEl.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageY - startY; 
    //elapsedTime = new Date().getTime() - startTime 
    if(/*elapsedTime <= allowedTime && */dist <= -threshold){
        pullElement[0].classList.add("pullUp");
    } else if(/*elapsedTime <= allowedTime && */dist >= threshold){
        pullElement[0].classList.remove("pullUp");
    }
    document.body.style.overflowY = "scroll";
    e.preventDefault()
}, false)
