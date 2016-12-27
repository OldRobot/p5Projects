

var w; //the walker
var tx;
var ty;

function setup(){
  createCanvas(400,400);
  w = new walker();
  background(50);

  //perlin noise
  tx=0;
  ty=10000;
}

function draw(){
  w.update();
  w.show();
}

function walker(){
this.x = width/2;
this.y = height/2;
this.s = 8 //radius

this.update = function(){

//basic random motion
//this.x +=floor(random(-1,2));
//this.y +=floor(random(-1,2));

//perlin noise for smoother random
this.x = map(noise(tx),0,1,0,width);
this.y = map(noise(ty),0,1,0,height);
tx+=0.005;
ty+=0.005;

}

this.show = function(){
  noStroke();
  fill(250,250,250,20);
  ellipse(this.x,this.y,this.s,this.s);
}

}
