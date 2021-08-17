const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var angle,cannon;
var engine, world;

var tower, ground;

function preload(){
    backgroundImg = loadImage("background.gif");
    towerImage = loadImage("tower.png");
}
function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle = -PI/4;
    ground = new Ground(0,height-1,width*2 , 1);
    tower = new Tower(150,350,160,310);
    cannon = new Cannon(180,110,110,50, angle);
}

function draw(){
    background(189);
    image(backgroundImg,0,0,width, height);
    Engine.update(engine);
    ground.display();
    cannon.display();
    tower.display();
}
