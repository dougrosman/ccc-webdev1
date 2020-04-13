let canvas;


function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent("sketch");
    background(0, 0, 0);
  }
  
  function draw() {
    // background('red');
    
    // rect(100, 200, 200, 200);
    ellipse(mouseX, mouseY, mouseX, mouseX);
    
  }