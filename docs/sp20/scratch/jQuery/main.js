$(document).ready(function(){

    $(".center").addClass("cool");

    for(let i = 0; i < 10; i++){
        let currBox = "box"+i;
        $("body").append("<div>"+currBox+"</div>");

        
        $("div").addClass(currBox);

        console.log(currBox);
        $("."+currBox).css({
            "background-color": `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
            width: `${100+Math.random()*100}`,
            height: "100px",
            margin: "20px"
        });        
        // console.log($("body"));
    }
});