var banana,bananaImage;
var obstacle,obstacleImage;
var obstacleGroup;
var monkey,monkey_running;
var jungle,backgroundJungle;
var score;


function preload()
{
  bananaImage = loadImage("banana.png");
  
  backgroundJungle = loadImage("jungle.jpg");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}


function setup() 
{
  createCanvas(400, 400);
  
  
  jungle = createSprite(200,200,0,0);
  jungle.addAnimation("jungleCreation",backgroundJungle);
  jungle.scale = 0.5;
  
  
  monkey = createSprite(100,300,800,0);
  monkey.addImage("movingMonkey", monkey_running);
  monkey.scale = 0.13;
  
  
  
  
}

function draw() 
{
  background(220);
  
  
  drawSprites();
}