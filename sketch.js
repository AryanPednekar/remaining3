const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkos=[]
var divisionHeight=300;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
   
}

function draw() {
  background(255,255,255);  
  for (var j = 40;j <=width ; j=j+50) {
    plinkos.push(new Plinko (j,75));
    
   }
   for (var j = 15;j <=width-10 ; j=j+50) {
     plinkos.push(new Plinko (j,175));
    }
    for (var j = 15;j <=width-10 ; j=j+50) {
      plinkos.push(new Plinko (j,175));
     }
  drawSprites();
}