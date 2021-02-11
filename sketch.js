var Hour,Minute,Second;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90); 
  
  Hour = hour();
  Minute = minute();
  Second = second();
   
  
  stroke("red");
  strokeWeight(10);
  noFill();
  var SecondAngle = map(Second, 0, 60, 0, 360);
  arc( 0 , 0 , 300 , 300, 0, SecondAngle);
  push();
  rotate(SecondAngle);
  line(0,0,100,0);
  pop();
  stroke("blue");
  var MinuteAngle = map(Minute, 0, 60, 0, 360);
  arc( 0 , 0 , 270 , 270, 0, MinuteAngle);
  push();
  rotate(MinuteAngle);
  line(0,0,80,0);
  pop();

  stroke("green");
  var HourAngle = map(Hour%12, 0, 12, 0, 360);
  arc( 0 , 0 , 240 , 240, 0, HourAngle);
  push();
  rotate(HourAngle);
  line(0,0,60,0);
  pop();

 
  


  drawSprites();
}