//Paul Smith
//An extension of the Vector mover to include liquids


var m = []; //the mover
var l; //liquid

function setup(){
  createCanvas(400,400);
  background(50);
  for (var i=0;i<10;i++){
      m[i] = new mover(random(width),random(height),random(5,40));
  }
  col = color(20,100,200,50);
  l = new Liquid(0,height/2,width,height/2,0.2, col); //initilise liquid

}

function draw(){
  background(50);
  for (var i=0;i<10;i++){
    m[i].submerged=false;
    if (l.isInLiquid(m[i].location)){

      m[i].drag(l);
      m[i].submerged=true;
    }

    var mm = m[i].mass;
    gravity = createVector(0,0.1*mm); //scale by mass
    wind = createVector(0.02,0);

    var c = 0.01; //constant fiction
    friction = m[i].velocity.copy();
    //friction.mult(-1);
    friction.normalize();
    friction.mult(-c); // this is c * -1


    //aapply the forces
    m[i].applyForce(friction);
    m[i].applyForce(gravity);
    //m[i].applyForce(wind);

    //update and display
    m[i].bounceEdges();
    m[i].update();
    m[i].display();

    l.display();
  }
}




}
