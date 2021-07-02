const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myengine,myworld;
var object;
function setup() {
  createCanvas(400,400);
  myengine=Engine.create()
  myworld=myengine.world
  var object_option={
    isStatic:true
  }
object=Bodies.rectangle(200,100,50,50,object_option);
World.add(myworld,object)
console.log(object);
}

function draw() {
  background(0); 
  Engine.update(myengine) 
  rectMode(CENTER)
  rect (object.position.x,object.position.y,50,50)
  
}