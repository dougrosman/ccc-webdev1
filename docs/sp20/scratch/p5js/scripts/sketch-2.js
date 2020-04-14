let canvas;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch');

}
  
function draw() {
    background(220);
    
    fill(255, 0, 0);
    rect(mouseX, mouseY, 100, 100);
 }