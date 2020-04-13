let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");

}

function draw() {

    ellipse(mouseX, mouseY, 10, 10);
}