var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Box1=createSprite(330,600,20,130);
	Box1.shapeColor="red"

	Box2=createSprite(410,660,140,20);
	Box2.shapeColor="red"

	Box3=createSprite(480,600,20,130);
	Box3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	  Box1=Bodies.rectangle(330,600,20,130,{ isStatic:true});
	  World.add(world,ground);

	  Box2=Bodies.rectangle(410,660,140,20,{ isStatic:true});
	  World.add(world,ground);

	  Box3=Bodies.rectangle(330,600,20,130,{ isStatic:true});
	  World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



