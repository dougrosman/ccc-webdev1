$(document).ready(function() {

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

    $("head").append(`<link rel="apple-touch-icon" sizes="180x180" href="/ccc-webdev1/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/ccc-webdev1/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/ccc-webdev1/favicon/favicon-16x16.png">
    <link rel="manifest" href="/ccc-webdev1/favicon/site.webmanifest">`);

});




