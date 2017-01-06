
//var myFont;

//function preload(){
//courier
  //SmyFont = loadFont("Inconsolata-Regular.ttf");
//}
var c;

function setup() {
createCanvas(400, 400);
//fr = createP('');
//fr.html(floor(frameRate())
c = new caret();
}

function caret(){
  this.x=0;
  this.line=18;
  this.timer=0;
  this.tInterval=80;

this.inc = function(){
  this.x+=12;
}

this.draw = function(){
  fill(255);
    noStroke();
  if(this.timer<this.tInterval/2){
    fill(55);

  }
  rect(this.x+2,this.line,8,12);


this.timer++;
if(this.timer>this.tInterval){
  this.timer=0;
}
}
}

function keyPressed() {
c.inc();
}

function draw() {
textSize(20);
background(50);
fill(255);
noStroke();
textFont("Courier");
text("Testing the fonts",0,30);
stroke(255);
  // for (var i=0;i<200;i+=12){
  //   line(i,0,i,200);
  // }
c.draw();
}
