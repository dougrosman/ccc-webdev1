let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");

}

function draw() {

    // fill(random(255), random(255), random(255))
    ellipse(mouseX, mouseY, mouseX, mouseX);
}