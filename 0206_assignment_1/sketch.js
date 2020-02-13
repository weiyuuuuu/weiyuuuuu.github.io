let line1 = 'In a field\nI am the absence\nof filed.\nThis is\nalways the case.\nWherever I am\nI am what is missing.';
let line2 = 'When I walk\nI part the air\nand always\nthe air moves in\nto fill the spaces\nwhere my body has been.';
let line3 = 'We all have reasons\nfor moving.\nI move\nto keep things whole.';
let ellipseBrushBool = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 // background(255, 255, 255);
  textSize(48);
  textAlign(LEFT);
  textFont('Georgia');
  textLeading(48*1.5);


  if (mouseIsPressed){
    background(255, 255, 255);
    fill(0, 0, 0);
    text(line2, pmouseX, pmouseY);
    stroke(1);
    line(mouseX-10, 0, mouseX-10, height);
    line(0, mouseY-50, width, mouseY-50);
    line(mouseX+540, 0, mouseX+540, height);
    line(0, mouseY-50, width, mouseY-50);
    line(0, mouseY+380, width, mouseY+380);

    fill(255, 255, 255);
    text(line3, 0, height/2);

    ellipseBrushBool = true;
  }else{
    background(0, 0, 0);
    text(line1, width/2, height/2);
    fill(255, 255, 255);
    ellipse(pmouseX, pmouseY, 170);
    ellipseBrushBool = false
  }

  if(ellipseBrushBool == true){
    ellipseBrush();
  }
  else{
    defaultScreen();
  }
}

function defaultScreen(){

}
function mouseDragged(){
  ellipseBrush();
}

function mouseIsPressed(){}

function keyTyped() {
  if (key === 's'){
  save("Keep Things Whole" + ".png");
  }
}

function ellipseBrush(){
  fill(0, 0, 0);
  noStroke();
  for(let i=0; i<5000; i++){
    ellipse(random(0, 500),random(height-mouseY,height), 30, 30);
  }
    fill(255, 255, 255);
    text(line3, 0, height/2);
}
