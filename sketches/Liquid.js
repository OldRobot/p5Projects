//this is a custom Library file
//Paul Smith
//the Liquid clas creates a region of a liquid type substance
//with a viscosity and hence imparting frictional forces on
//objects which move through it.


function Liquid(x,y,w,h,c,col){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.c=c;  //coeficant of friction.
  this.col = col;

this.display = function(){
  noStroke();
  fill(this.col);
  rect(this.x,this.y,this.w,this.h);

}

this.isInLiquid(position){

  return false;
}
