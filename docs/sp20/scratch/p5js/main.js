let r;
let r2;

function setup() {
  createCanvas(400, 400);

  r = new Rectangle();
  r2 = new Rectangle();
}

function draw() {
  background(220);

  r.display();
  r2.display();
  


}

function keyPressed() {

  window.location.href = "https://crouton.net";

}


class Rectangle {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = 50;
    this.color = 255;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  click() {

    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      print("i'm inside the circle");
      this.color = 0;
      window.location.href="http://crouton.net";
    }
  }
}

function mousePressed() {

  r.click();
  r2.click();
  
}