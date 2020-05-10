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

let temp_num;
let item;
let itemArray = [];
let date;
let microwaveData = [];

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
    microwaveData.push(new MicrowaveData(date, time, sec, latitude, longitude, temp_item, item, weather, temp, feels, temp_num));
  }

  for (let i = 0; i < microwaveData.length; i++){
    microwaveData[i].show();
  }


}

function draw() {

  rectMode(CENTER);
  fill(255);
  strokeWeight(2);
  stroke(0);
  rect(windowWidth/2, windowHeight/2, 675, 340);
  fill(0);
  stroke(255);
  rect(windowWidth/2 - 92.5,windowHeight/2, 450, 300);
  rect(windowWidth/2 + 232.5,windowHeight/2 - 125, 150, 50);
  rect(windowWidth/2 + 232.5,windowHeight/2 + 35, 150, 230);

  textFont(myFont);

  fill(100, 199, 67);
  noStroke();
  textSize(21);
  textAlign(CENTER, CENTER);
  text('welcome', windowWidth/2 + 232.5, windowHeight/2 - 125);

  fill(255);
  textSize(10);
  textAlign(LEFT, TOP);
  text('microwave', windowWidth/2 + 167.5, windowHeight/2 - 70);
  text('loading...', windowWidth/2 + 167.5, windowHeight/2 - 55);
  text('----------', windowWidth/2 + 167.5, windowHeight/2 - 25);
  text('select a date', windowWidth/2 + 167.5, windowHeight/2 + 5);
  text('to explore.', windowWidth/2 + 167.5, windowHeight/2 + 20);

  fill(0);
  stroke(255);
  rectMode(CORNER);
  rect(50, 40, 675, 50);
  rect(50, windowHeight-90, 675, 50);

  fill(255);
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text('location_unknown', 65, 65);
  text('weather_unknown', 65, windowHeight-65);
  text('temperature_unknown', 290, windowHeight-65);
  text('feels_like_unknown', 545, windowHeight-65);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



class MicrowaveData{
  constructor(microwaveDate, time, sec, latitude, longitude, temp_item, item, weather, temp, feels, temp_num){
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
    this.temp_num = temp_num;
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
    temp_num = this.temp_num;

  }
}
