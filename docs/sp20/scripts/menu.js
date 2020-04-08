$(document).ready(function(){


   // edit one menu here that gets applied to every page simultaneously
   let currUrl = window.location.href;
   console.log(currUrl);

   // if working in live server
   if(currUrl[7] === '1'){
      $("#main-menu").html(`
      <a class="menu-item white-h" href="/sp20">Home</a>
      <a class="menu-item red-h" href="/sp20/about">About</a>
      <div class="dropdown">
         <a class="menu-item orange-h" href="/sp20/assignments">Assignments</a>
         <div class="dropdown-menu">
            <a class="dropdown-item" href="/sp20/assignments/01-internet-review/">01: Internet Review</a>
            <a class="dropdown-item" href="/sp20/assignments/02a-html-basics">02a: HTML Basics</a>
            <a class="dropdown-item" href="/sp20/assignments/02b-lialina-reading">02b: Lialina Reading</a>
            <a class="dropdown-item" href="/sp20/assignments/03-portfolio-1">03: Portfolio I</a>
            <a class="dropdown-item" href="/sp20/assignments/04-portfolio-2">04: Portfolio II</a>
            <a class="dropdown-item" href="/sp20/assignments/05-advanced-css/">05: Advanced CSS</a>
            <a class="dropdown-item" href="/sp20/assignments/06-intro-javascript/">06: JavaScript Intro</a>
            <a class="dropdown-item" href="/sp20/assignments/07-jquery/">07: jQuery + media</a>
         </div>
      </div>
       <a class="menu-item yellow-h" href="/sp20/resources">Resources</a>
      <a class="menu-item green-h" href="/sp20/lectures">Online Lectures</a>
      <a class="menu-item blue-h" href="https://codepen.io/dougrosman/collections">Codepen</a>
      <a class="menu-item canvas-red-h" href="https://canvas.colum.edu/" target="_blank">Canvas</a>`);
   }

   // if production
   else {
      $("#main-menu").html(`
      <a class="menu-item white-h" href="/ccc-webdev1/sp20">Home</a>
      <a class="menu-item red-h" href="/ccc-webdev1/sp20/about">About</a>
      <div class="dropdown">
         <a class="menu-item orange-h" href="/ccc-webdev1/sp20/assignments">Assignments</a>
         <div class="dropdown-menu">
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/01-internet-review/">01: Internet Review</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/02a-html-basics">02a: HTML Basics</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/02b-lialina-reading">02b: Lialina Reading</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/03-portfolio-1">03: Portfolio I</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/04-portfolio-2">04: Portfolio II</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/05-advanced-css/">05: Advanced CSS</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/06-intro-javascript/">06: JavaScript Intro</a>
            <a class="dropdown-item" href="/ccc-webdev1/sp20/assignments/07-jquery/">07: jQuery + media</a>
         </div>
      </div>
       <a class="menu-item yellow-h" href="/ccc-webdev1/sp20/resources">Resources</a>
      <a class="menu-item green-h" href="/ccc-webdev1/sp20/lectures">Online Lectures</a>
      <a class="menu-item blue-h" href="https://codepen.io/dougrosman/collections">Codepen</a>
      <a class="menu-item canvas-red-h" href="https://canvas.colum.edu/" target="_blank">Canvas</a>`);
   }


   // inject favicon code into <head> of each page

   $("head").append(`<link rel="apple-touch-icon" sizes="180x180" href="/ccc-webdev1/favicon/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="/ccc-webdev1/favicon/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/ccc-webdev1/favicon/favicon-16x16.png">
   <link rel="manifest" href="/ccc-webdev1/favicon/site.webmanifest">`);
    

// video to-do: toggle in vanilla JS vs jquery

});