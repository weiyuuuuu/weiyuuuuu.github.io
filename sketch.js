function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  // put drawing code here
  background(140, 188, 211);

  if (mouseIsPressed){
  background(51, 85, 139);

  strokeWeight(1.7);
  stroke(181, 206, 212);
  line(100, 100, 100, 170);
  line(85, 135, 115, 135);

  line(700, 700, 700, 770);
  line(685, 735, 715, 735);

  line(200, 600, 200, 800);
  line(150, 700, 250, 700);

  line(800, 300, 800, 170);
  line(770, 230, 830, 230);

  line(900, 450, 900, 500);
  line(890, 475, 910, 475);

  line(900, 450, 900, 500);
  line(890, 475, 910, 475);

  line(300, 350, 300, 400);
  line(290, 375, 310, 375);

  line(600, 130, 600, 220);
  line(580, 170, 620, 170);

  noStroke();
  fill(234, 191, 86);
  ellipse(500, 500, 100);

  strokeWeight(1.7);
  stroke(240, 216, 204);
  noFill();
  circle(400, 300, 7);
  circle(170, 70, 13);
  circle(600, 850, 13);
  circle(100, 500, 17);
  circle(800, 600, 17);
  circle(900, 900, 17);

  strokeWeight(1);
  stroke(0);
  line(mouseX, 0, mouseX, 1000);
  line(0, mouseY, 1000, mouseY);
  } else {
  noStroke();
  fill(244, 128, 55);
  ellipse(500, 500, 300);

  strokeWeight(1);
  stroke(234, 191, 86)
  line(490, 500, 510, 500);
  line(500, 490, 500, 510);

  strokeWeight(1);
  stroke(255);
  line(mouseX, 0, mouseX, 1000);
  line(0, mouseY, 1000, mouseY);
  }

  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);

  strokeWeight(mouseDist);
  stroke(random(255), random(255), random(255));
  line(mouseX, mouseY, pmouseX, pmouseY);

}
