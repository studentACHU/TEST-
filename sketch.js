var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var ROOF;
var bobdiameter=160;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new BOB(200,500,40);
	bobObject2 = new BOB(240,500,40);
	bobObject3 = new BOB(280,500,40);
	bobObject4 = new BOB(320,500,40);
	bobObject5 = new BOB(360,500,40);
    ROOF = new roof(270,300,300,20); 
	rope1 = new ROPE(bobObject1.body,ROOF.body,85,0); 
	rope2 = new ROPE(bobObject3.body,ROOF.body,50,0);
	rope3 = new ROPE(bobObject2.body,ROOF.body,15,0);
	rope4 = new ROPE(bobObject5.body,ROOF.body,-25,0);
	rope5 = new ROPE(bobObject4.body,ROOF.body,-70,0);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  

bobObject1.display();

bobObject2.display();

bobObject3.display();

bobObject4.display();

bobObject5.display();
ROOF.display();
rope1.display();
rope1.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}



