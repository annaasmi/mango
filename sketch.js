const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,boyImg,boy,stone,sling,tree,treeImg;
var mango1, mango2,mango3,mango4,mango5;

function preload(){
   boyImg = loadImage("image/boy.png");
   treeImg = loadImage("image/tree.png");
}


function setup() {
  createCanvas(1400,700);

  boy = createSprite(200,630,10,50);
  boy.addImage("boy",boyImg);
  boy.scale = 0.09;
  boy.depth = 1;

  tree = createSprite(1150,450,100,500);
  tree.addImage("tree",treeImg);
  tree.scale = 0.4;
  tree.depth = 0;

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700,690,1400,20);
  stone = new Stone(150,575,10);
  sling = new SlingShot(stone.body,{x:150,y:575});
  mango1 = new Mango(1300,370,10);
  mango2 = new Mango(1100,330,10);
  mango3 = new Mango(1200,250,10);
  mango4 = new Mango(1300,300,10);
  mango5 = new Mango(1000,400,10);

}

function draw() {
  background(255); 
  Engine.update(engine); 
  drawSprites();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  /*
  detectCollision(stone.body,mango2.body);
  detectCollision(stone.body,mango3.body);
  detectCollision(stone.body,mango4.body);
  detectCollision(stone.body,mango5.body);
  */
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(bodyA,bodyB){
   mangoBodyPosition = bodyA.body.position
   stoneBodyPosition = bodyB.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<= bodyA.r+bodyB.r){
    Matter.Body.setStatic(bodyA.body,false);
  }

}