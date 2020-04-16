let menuItem1;
//let options = {
//  lat: 41.875562,
//  lng: -87.624421,
//  zoom: 10,
//  style: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//  }
let canvas;
//let mappa = new Mappa('Leaflet');
//let myMap;
let microwave;

let myFont;

let milk;
let milk_bw;
let lunchbox;
let lunchbox_bw;

let bugs = [];

function preload() {
  myFont = loadFont('font/OCRBSTD.OTF');

  milk = loadImage('img/milk.png');
  milk_bw = loadImage('img/milk_bw.png');
  lunchbox = loadImage('img/lunchbox.png');
  lunchbox_bw = loadImage('img/lunchbox_bw.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
//  myMap = mappa.tileMap(options);
//  myMap.overlay(canvas);
  menuItem1 = createP("Menu Item");
  menuItem1.position(width-100, 50);
  menuItem1.style('z-index', '3');
  menuItem1.mousePressed(clicked);
  microwave = loadTable('microwaveData.csv', 'csv', 'header');
//  myMap.onChange(drawMicrowave);
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(0);
//screen 2
rectMode(CENTER);
fill(255);
strokeWeight(2);
stroke(0);
rect(windowWidth/2 + 50, windowHeight/2  + 50, 675, 340);
rect(windowWidth/2 - 42.5, windowHeight/2  + 50, 450, 300);
rect(windowWidth/2 + 282.5, windowHeight/2 + 85, 150, 230);
fill(0);
stroke(255);
rect(windowWidth/2 + 282.5, windowHeight/2 - 75, 150, 50);

fill(100, 199, 67);
noStroke();
textSize(21);
textAlign(CENTER, CENTER);
text('--:--:--', windowWidth/2 + 282.5, windowHeight/2 - 75);

fill(0);
textSize(10);
textAlign(LEFT, TOP);
text('microwave', windowWidth/2 + 217.5, windowHeight/2 - 20);
text('loading...', windowWidth/2 + 217.5, windowHeight/2 - 5);
text('----------', windowWidth/2 + 217.5, windowHeight/2 + 25);
text('item_lunchbox', windowWidth/2 + 217.5, windowHeight/2 + 55);

imageMode(CENTER);
image(lunchbox_bw, windowWidth/2 - 42.5, windowHeight/2 + 50, 250, 200);
  //screen 1
  rectMode(CENTER);
  fill(255);
  strokeWeight(2);
  stroke(0);
  rect(windowWidth/2 - 50, windowHeight/2  - 50, 675, 340);
  rect(windowWidth/2 - 142.5, windowHeight/2  - 50, 450, 300);
  rect(windowWidth/2 + 182.5, windowHeight/2 - 15, 150, 230);
  fill(0);
  stroke(255);
  rect(windowWidth/2 + 182.5, windowHeight/2 - 175, 150, 50);

    textFont(myFont);

    fill(100, 199, 67);
    noStroke();
    textSize(21);
    textAlign(CENTER, CENTER);
    text('21:31:03', windowWidth/2 + 182.5, windowHeight/2 - 175);

    fill(0);
    textSize(10);
    textAlign(LEFT, TOP);
    text('microwave', windowWidth/2 + 117.5, windowHeight/2 - 120);
    text('loading...', windowWidth/2 + 117.5, windowHeight/2 - 105);
    text('----------', windowWidth/2 + 117.5, windowHeight/2 - 75);
    text('item_milk', windowWidth/2 + 117.5, windowHeight/2 - 45);
    text('30sec...', windowWidth/2 + 117.5, windowHeight/2 - 15);
    text('feels_like_97.0°  ', windowWidth/2 + 117.5, windowHeight/2 + 15);

    fill(255);
    stroke(0);
    rectMode(CORNER);
    rect(50, 40, 675, 50);
    rect(50, windowHeight-90, 675, 50);

    fill(0);
    noStroke();
    textSize(12);
    textAlign(LEFT, CENTER);
    text('location_41.863845, -87.625265', 65, 65);
    text('weather_light snow', 65, windowHeight-65);
    text('temperature_29.14°', 290, windowHeight-65);
    text('feels_like_17.55°', 545, windowHeight-65);
    imageMode(CENTER);
    image(milk, windowWidth/2 - 142.5, windowHeight/2 - 50, 130, 250);
    for (let i = 0; i < bugs.length; i++) {
      bugs[i].move();
      bugs[i].display();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function clicked(){
  print("Clicked!");
}
function drawMicrowave(){

}

class Jitter {
  constructor() {
    this.x = random(windowWidth/2 - 367.5, windowWidth/2 + 82.5);
    this.y = random( windowHeight/2 - 200, windowHeight/2 + 100);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(255);
    stroke(0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
