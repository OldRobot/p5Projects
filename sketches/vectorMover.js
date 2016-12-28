//Paul Smith
//A base example of using vectors for motion
var m; //the mover

function setup(){
  createCanvas(400,400);
  background(50);
  m = new mover();

}

function draw(){

m.display();
m.update();
}


function mover(){
this.location = createVector(random(width),random(height));
this.velocity = createVector(random(-2,2),random(-2,2));

this.update = function(){
  this.location.add(this.velocity);
}

this.display = function(){
  noStroke();
  fill(200);
  ellipse(this.location.x,this.location.y,10,10);
}

}
