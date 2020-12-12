//STEP 1: NAMSPACING- NICKNAMES

const Engine= Matter.Engine;// EFFESCTS
const World= Matter.World;//BACKGROUND
const Bodies = Matter.Bodies;//OBJECTS

//MY PROGRAM ENTITIES
var engine, world, box1,box2;
var ball;
var ground;
function setup(){
 createCanvas(400,400);
//ENGINE
engine = Engine.create();
//WORLD NAMESPACING- NICKNAME
world = engine.world;

//CREATING BODIES
var options= {
restitution: 1.5

}
box1 = Bodies.rectangle(350,100,20,30,options);//up
World.add(world,box1);
box2= Bodies.rectangle(350,200,20,20, options);//down
World.add(world,box2);
ball =Bodies.circle(100,100,50, options);///radius
World.add(world, ball);
//JSON FORMAT- JAVASCRIPT OBJECT NOTATTION
var goptions= {
isStatic: true

}
ground= Bodies.rectangle(200,380,400,40, goptions);
World.add(world,ground);
}

function draw(){
    background(0);
    rectMode(CENTER);
    Engine.update(engine);
    rect(box1.position.x, box1.position.y, 20,30);
   rect(box2.position.x, box2.position.y, 20,20)
      rect(ground.position.x, ground.position.y, 400,40)

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 50,50)//diameter
}