//let options = {
//  lat: 41.875562,
//  lng: -87.624421,
//  zoom: 10,
//  style: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//  }
let canvas;
//let mappa = new Mappa('Leaflet');
//let myMap;

let myFont;

let milk;
let milk_bw;
let lunchbox;
let lunchbox_bw;

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
  canvas.position(0,0);
//  myMap = mappa.tileMap(options);
//  myMap.overlay(canvas);
//  menuItem1 = createP("Menu Item");
//  menuItem1.position(width-100, 50);
//  menuItem1.style('z-index', '3');
//  menuItem1.mousePressed(clicked);
//  microwave = loadTable('microwaveData.csv', 'csv', 'header');
//  myMap.onChange(drawMicrowave);
}

function draw() {
  background(0);

  rectMode(CENTER);
  fill(255);
  strokeWeight(2);
  stroke(0);
  rect(windowWidth/2,windowHeight/2,675,340);
  fill(0);
  stroke(255);
  rect(windowWidth/2-92.5,windowHeight/2,450,300);
  rect(windowWidth/2+232.5,windowHeight/2-125,150,50);
  rect(windowWidth/2+232.5,windowHeight/2+35,150,230);

  textFont(myFont);

  fill(255);
  noStroke();
  textSize(48);
  textAlign(CENTER, BOTTOM);
  text('microwave', windowWidth/2-92.5,windowHeight/2);
  textAlign(CENTER, TOP);
  text('dystopia.', windowWidth/2-92.5,windowHeight/2);

  fill(100,199,67);
  textSize(21);
  textAlign(CENTER, CENTER);
  text('welcome', windowWidth/2+232.5,windowHeight/2-125);

  fill(255);
  textSize(10);
  textAlign(LEFT, TOP);
  text('microwave dystopia', windowWidth/2+167.5,windowHeight/2-70);
  text('documents the data', windowWidth/2+167.5,windowHeight/2-55);
  text('of the microwave', windowWidth/2+167.5,windowHeight/2-40);
  text('usage in february', windowWidth/2+167.5,windowHeight/2-25);
  text('in associate with', windowWidth/2+167.5,windowHeight/2-10);
  text('the weather both', windowWidth/2+167.5,windowHeight/2+5);
  text('inside and outside', windowWidth/2+167.5,windowHeight/2+20);
  text('the microwave.', windowWidth/2+167.5,windowHeight/2+35);
  text('spring 2020', windowWidth/2+167.5,windowHeight/2+120);
  text('designed by weiyu.', windowWidth/2+167.5,windowHeight/2+135);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
