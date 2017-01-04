
function mover(x,y,r){
this.location = createVector(x,y);
this.velocity = createVector(0,0); //initial
this.acceleration = createVector(0,0);
//this.velocity = createVector(random(-4,4),random(-4,4)); //initial velocity
this.r = r; //radius
this.mass = sqrt(r);
this.col = color(200,200,200,100);
this.submerged = false;

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
  fill(this.col);
  //if(this.submerged){
    //fill(200,100,100,200);
  //}
  ellipse(this.location.x,this.location.y,this.r,this.r);
}
this.drag = function(liquid){
  speed = this.velocity.mag();
  dragMagnitude = liquid.c * speed * speed;

  dragF = this.velocity.copy();
  dragF.mult(-1);
  dragF.normalize();
  dragF.mult(dragMagnitude);
  this.applyForce(dragF);
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
    this.velocity.y *= -1; //loss of energy 0.8
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
