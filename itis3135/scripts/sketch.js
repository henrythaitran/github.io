function setup() {
    createCanvas(600, 400);
    background(220);
  }
  
  function draw() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
  }