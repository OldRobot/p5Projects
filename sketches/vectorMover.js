//Paul Smith
//A base example of using vectors for motion
var m; //the mover

function setup(){
  createCanvas(400,400);
  background(50);
  m = new mover();

}

function draw(){
background(50);
gravity = createVector(0,0.1);
m.force(gravity);
m.update();
m.bounceEdges();

m.display();
m.acceleration.mult(0);//reset acceleration each frame
}


function mover(){
this.location = createVector(random(width),random(height));
this.velocity = createVector(0,0); //initial
this.acceleration = createVector(0.2,0);
//this.velocity = createVector(random(-4,4),random(-4,4)); //initial velocity
this.r = 20; //radius

this.update = function(){
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
}

this.force = function(f){
this.acceleration.add(f);
}

this.display = function(){
  noStroke();
  fill(200);
  ellipse(this.location.x,this.location.y,this.r,this.r);
}

this.wrapEdges = function(){
  if (this.location.x>width){
    this.location.x=0;
  }else if(this.location.x<0) {
    this.location.x = width;
  }

  if (this.location.y>height){
    this.location.y=0;
  }else if(this.location.y<0) {
    this.location.y = height;
  }

}

this.bounceEdges = function(){
  if (this.location.x>width || this.location.x<0){
    this.velocity.x = this.velocity.x * -1;
  }

  if (this.location.y>height || this.location.y<0){
    this.velocity.y= this.velocity.y *-1;
  }


}


}
