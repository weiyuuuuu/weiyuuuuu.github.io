  //put custom variable
  let pointX;
  let triY;
  let mouseDist;





function setup(){
  //create canvas
  createCanvas(1700, 1700);
  background(130, 170, 170);
  pointX = 1000;
  pointY = 1000;
  triY = 1000;
  print(pointX);
}





function draw(){
 background(130, 170, 170);

 mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
 print(mouseDist);
 smooth();
 strokeWeight(17);
 point(pointX, 850);

 point(850, pointX);

 strokeWeight(mouseDist);
 stroke(170, 170, 170);
 line(mouseX, mouseY, pmouseX, pmouseY);

 strokeWeight(17);
 stroke(170, 170, 170);
 point(mouseX, mouseY, pmouseX, pmouseY);



 stroke(random(255), random(255), random(255));

 if(mouseIsPressed){
   pointX = 100;
 } else {
   pointX = 850;
 }


 if(keyIsPressed){
   triY= 700;
 } else {
   triY = 500;
 }

}
