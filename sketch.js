var helicopterIMG, helicopterSprite, packageSprite,packageIMG,border1,border2,border3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	border1=Bodies.rectangle(350,650,200,20);
	World.add(world,border1);
	border2=Bodies.rectangle(700,680,20,100);
	World.add(world,border2);
	border3=Bodies.rectangle(750,720,20,100);
	World.add(world,border3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(width/2,200,5);
  rectMode(CENTER);
  rect(375,650,200,20);
  rect(286,620,20,100);
  rect(467,620,20,100);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  
  if(keyPressed,DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody,false); 
  }
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.setStatic(packageBody,false); 
  }
}



