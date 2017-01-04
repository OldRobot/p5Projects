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

  this.isInLiquid = function(position){
      if(position.x>this.x && position.x<this.x+this.w){
        if(position.y>this.y && position.y<this.y+this.h){
          return true;
        }
      }
    return false;
  }
}
