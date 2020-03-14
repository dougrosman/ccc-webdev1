let title = document.querySelector('.title');
let pee = document.getElementById('pee');

let titleLocation = title.getBoundingClientRect();
let peeSize = pee.getBoundingClientRect();
pee.style.display="none";

pee.style.left = `${titleLocation.left-peeSize.width+40}px`
pee.style.top = `${titleLocation.bottom-peeSize.height-10}px`

window.onresize = function() {

    titleLocation = title.getBoundingClientRect();
    pee.style.left = `${titleLocation.left-peeSize.width+40}px`
    pee.style.top = `${titleLocation.bottom-peeSize.height-10}px`
}

title.onmouseover = function() {
    pee.style.display="block";
}

title.onmouseout = function() {
    pee.style.display="none";
}


