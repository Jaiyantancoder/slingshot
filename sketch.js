//Creating Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Creating variables
var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14;
var hulk;
var holder1,holder2;
var chain;


function setup() {

//Creating Canvas
  createCanvas(800,400);

//Creating engine
engine = Engine.create();
world = engine.world;

//Create Bodies here  
brick1 = new Brick(300,300,30,30);
brick2 = new Brick(300,300,30,30);
brick3 = new Brick(300,300,30,30);
brick4 = new Brick(300,300,30,30);
brick5 = new Brick(300,300,30,30);
brick6 = new Brick(300,300,30,30);
brick7 = new Brick(300,300,30,30);
brick8 = new Brick(300,300,30,30);
brick9 = new Brick(300,300,30,30);
brick10 = new Brick(300,300,30,30);
brick11 = new Brick(300,300,30,30);
brick12 = new Brick(300,300,30,30);
brick13 = new Brick(300,300,30,30);
brick14 = new Brick(300,300,30,30);

hulk = new Hulk(200,200,50,50);

ground = new Ground(200,395,1500,5);

chain = new Chain(hulk.body,{x:200 , y:200});

holder1 = new Holder(300,350,120,8);
holder2 = new Holder(350,150,120,8);

//Updating the engine
Engine.run(engine);

}

function draw() {
  background(255,255,255); 
  
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();

  hulk.display();

  ground.display();

  chain.display();

  holder1.display();
  holder2.display();

  drawSprites();
}

function keyPressed(){

//What should happen when key is pressed
if(keyCode===32){

chain.attach(hulk.body);

}

}

function mouseDragged(){

//What should happen when mouse is dragged

Matter.Body.setPosition(hulk.body,{x : mouseX,y : mouseY});


}

function mouseReleased(){

  //What should happed when mouse is released

chain.fly();
  
}
