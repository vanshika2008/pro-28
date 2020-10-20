const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Costraint;

var mango1,mango2,mango3;
var tree1;
var boy1;
var stone1;
var ground1;

function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	 ground1 = new Ground(400,600,800,30);

	 boy1 = new Rubber(200,540);
	 stone1 = new Stone(210,480,10,10);
	 tree1 = new Tree(600,540,50,100);
	 mango1 = new Mango(610,510,10);
	 mango2 = new Mango(610,530,10);
	 mango3 = new Mango(615,530,10);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   ground1.display();
   boy1.display();
   tree1.display();
   stone1.display();
   mango1.display();
   mango3.display();
   mango2.display();



  drawSprites();
}



