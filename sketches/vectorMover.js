//Paul Smith
//A base example of using vectors for motion
var m = []; //the mover

function setup(){
  createCanvas(400,400);
  background(50);
  for (var i=0;i<10;i++){
      m[i] = new mover(random(width),random(height),random(5,40));
  }


}

function draw(){
background(50);
for (var i=0;i<10;i++){
var mm = m[i].mass;
gravity = createVector(0,0.1*mm);
m[i].applyForce(gravity);
wind = createVector(0.02,0);
m[i].applyForce(wind);

m[i].bounceEdges();
m[i].update();
m[i].display();
}
}


function mover(x,y,r){
this.location = createVector(x,y);
this.velocity = createVector(0,0); //initial
this.acceleration = createVector(0,0);
//this.velocity = createVector(random(-4,4),random(-4,4)); //initial velocity
this.r = r; //radius
this.mass = sqrt(r);

this.update = function(){
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  this.acceleration.mult(0);//reset acceleration each frame
}

this.applyForce = function(force){
f= force.copy();
f.div(this.mass);
this.acceleration.add(f);
}

this.display = function(){
  //noStroke();
  fill(200,200,200,200);
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

  if (this.location.x>width){
    this.location.x=width;
    this.velocity.x *= -1;
  }else if(this.location.x<0) {
    this.location.x = 0;
    this.velocity.x *= -1;
  }

  if (this.location.y>height){
    this.location.y=height;
    this.velocity.y *= -0.75; //loss of energy
  }else if(this.location.y<0) {
    this.location.y = 0;
    this.velocity.y *= -1;

  }


  // if (this.location.x>width || this.location.x<0){
  //     this.velocity.x *= -1;
  // }
  //
  // if (this.location.y>height || this.location.y<0){
  //   this.velocity.y *= -1;
  // }


}


}
