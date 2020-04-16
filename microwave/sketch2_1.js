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

  rectMode(CENTER);
  fill(255);
  strokeWeight(2);
  stroke(0);
  rect(windowWidth/2, windowHeight/2, 675, 340);
  rect(windowWidth/2 - 92.5, windowHeight/2, 450, 300);
  rect(windowWidth/2 + 232.5, windowHeight/2 + 35, 150, 230);
  fill(0);
  stroke(255);
  rect(windowWidth/2 + 232.5, windowHeight/2 - 125, 150, 50);

  textFont(myFont);

  fill(100, 199, 67);
  noStroke();
  textSize(21);
  textAlign(CENTER, CENTER);
  text('11:47:23', windowWidth/2 + 232.5, windowHeight/2 - 125);

  fill(0);
  textSize(10);
  textAlign(LEFT, TOP);
  text('microwave', windowWidth/2 + 167.5, windowHeight/2 - 70);
  text('in use', windowWidth/2 + 167.5, windowHeight/2 - 55);
  text('----------', windowWidth/2 + 167.5, windowHeight/2 - 25);
  text('item_milk', windowWidth/2 + 167.5, windowHeight/2 + 5);
  text('30sec...', windowWidth/2 + 167.5, windowHeight/2 + 35);
  text('feels_like_108.5°  ', windowWidth/2 + 167.5, windowHeight/2 + 65);

  fill(255);
  stroke(0);
  rectMode(CORNER);
  rect(50, 40, 675, 50);
  rect(50, windowHeight-90, 675, 50);

  fill(0);
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text('location_42.337387, -71.077744', 65, 65);
  text('weather_overcast clouds', 65, windowHeight-65);
  text('temperature_35.26°', 290, windowHeight-65);
  text('feels_like_20.41°', 545, windowHeight-65);
  imageMode(CENTER);
  image(milk, windowWidth/2 - 92.5, windowHeight/2, 130, 250);

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
    this.x = random(windowWidth/2 - 317.5, windowWidth/2 + 132.5);
    this.y = random( windowHeight/2 - 150, windowHeight/2 + 150);
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
