
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin=loadImage("dustbingreen.png")
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(50,500)
	ground1=new Ground(400,620,800,12)
	box1=new Box(650,600,200,20)
	box2=new Box(550,560,20,100)
	box3=new Box(750,560,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  ground1.display()
 box1.display()
 box2.display()
 box3.display()

 image(dustbin,530,470,250,150)
 paperball.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:350,y:-200})
	}
}

