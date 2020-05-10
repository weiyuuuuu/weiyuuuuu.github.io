let options = {
  lat: 41.875562,
  lng: -87.624421,
  zoom: 10,
  style: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
}
let canvas;
let mappa = new Mappa('Leaflet');
let myMap;

let myFont;

let milk;
let milk_bw;
let lunchbox;
let lunchbox_bw;
let button;
let textTime = '';
let textSec = '';
let textLatitude = '';
let textLongitude = '';
let textTemp_item = '';
let textItem = '';
let textWeather = '';
let textTemp = '';
let textFeels = '';

let item;
let itemArray = [];
let date;
let microwaveData = [];

let bugs = [];

function preload() {
  myFont = loadFont('font/OCRBSTD.OTF');

  milk = loadImage('img/milk.png');
  milk_bw = loadImage('img/milk_bw.png');
  lunchbox = loadImage('img/lunchbox.png');
  lunchbox_bw = loadImage('img/lunchbox_bw.png');

  microwave = loadTable('microwaveData.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0,0);

  myMap = mappa.tileMap(options);
    myMap.overlay(canvas);


  for (let i = 0; i < microwave.getRowCount(); i++){
    date = String(microwave.getString(i, 'date'));
    time = String(microwave.getString(i, 'time'));
    sec = String(microwave.getString(i, 'sec'));
    latitude = String(microwave.getString(i, 'latitude'));
    longitude = String(microwave.getString(i, 'longitude'));
    temp_item = String(microwave.getString(i, 'temp_item'));
    item = String(microwave.getString(i, 'item'));
    weather = String(microwave.getString(i, 'weather'));
    temp = String(microwave.getString(i, 'temp'));
    feels = String(microwave.getString(i, 'feels'));
    temp_num = String(microwave.getNum(i, 'temp_num'));
    microwaveData.push(new MicrowaveData(date, time, sec, latitude, longitude, temp_item, item, weather, temp, feels));
  }

  for (let i = 0; i < microwaveData.length; i++){
    microwaveData[i].show();
  }

  for (let i = 0; i < 140; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  //background(0);

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
  text(textTime, windowWidth/2 + 232.5, windowHeight/2 - 125);

  fill(0);
  textSize(10);
  textAlign(LEFT, TOP);
  text('microwave', windowWidth/2 + 167.5, windowHeight/2 - 70);
  text('in use', windowWidth/2 + 167.5, windowHeight/2 - 55);
  text('----------', windowWidth/2 + 167.5, windowHeight/2 - 25);
  text('item_', windowWidth/2 + 167.5, windowHeight/2 + 5);
  text(textItem, windowWidth/2 + 197.5, windowHeight/2 + 5);
  text(textSec, windowWidth/2 + 160, windowHeight/2 + 35);
  text('feels_like_', windowWidth/2 + 167.5, windowHeight/2 + 65);
  text(textTemp_item, windowWidth/2 + 240, windowHeight/2 + 65);

  fill(255);
  stroke(0);
  rectMode(CORNER);
  rect(50, 40, 675, 50);
  rect(50, windowHeight-90, 675, 50);

  fill(0);
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text('location_         ,', 65, 65);
  text(textLatitude, 135, 65);
  text(textLongitude, 230, 65);
  text('weather_', 65, windowHeight-65);
    text(textWeather, 130, windowHeight-65);
  text('temperature_', 290, windowHeight-65);
    text(textTemp, 390, windowHeight-65);
  text('feels_', 545, windowHeight-65);
    text(textFeels, 590, windowHeight-65);
  imageMode(CENTER);
  image(milk, windowWidth/2 - 92.5, windowHeight/2, 130, 250);

  for (let i = 0; i < temp_num; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Jitter {
  constructor() {
    this.x = random(windowWidth/2 - 317.5, windowWidth/2 + 132.5);
    this.y = random( windowHeight/2 - 150, windowHeight/2 + 150);
    this.diameter = (10);
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

class MicrowaveData{
  constructor(microwaveDate, time, sec, latitude, longitude, temp_item, item, weather, temp, feels){
    this.microwaveDate = microwaveDate;
    this.time = time;
    this.sec = sec;
    this.latitude = latitude;
    this.longitude = longitude;
    this.temp_item = temp_item;
    this.item = item;
    this.weather = weather;
    this.temp = temp;
    this.feels = feels;
    this.button = createButton(this.microwaveDate)
    for(let i = -1; i < microwaveData.length; i++){
      this.button.position(width-100, i*25+50);
    }
    this.button.style('z-index', '1');
  }
  show(){
    this.button.mousePressed(() => this.update())
  }
  update(){
    print("update");
    textTime = this.time;
    textSec = this.sec;
    textLatitude = this.latitude;
    textLongitude = this.longitude;
    textTemp_item = this.temp_item;
    textItem = this.item;
    textWeather = this.weather;
    textTemp = this.temp;
    textFeels = this.feels;

  }
}
