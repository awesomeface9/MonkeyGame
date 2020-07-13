//Global Variables
var banana, bananaImage,monkey, monkeyImage,ground,bananaGroup;
var obstacleImage,obstacleGroup;
var backimage,backImage;
var score=0;

function preload(){
  backImage=loadImage("jungle.jpg");
  monkeyImage=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage= loadImage("Banana.png");
  obstacleImage= loadImage("stone.png");
}


function setup() {
  var group=bananaGroup;
  var group=obstacleGroup;
  createCanvas(600,300);
  background=createSprite(200,160,800,300)
  background.addImage(backImage);
  background.scale=0.6;
  background.velocityX=-5
  monkey=createSprite(150,225,10,10);
  monkey.addAnimation("Image",monkeyImage);
  monkey.scale=0.15;
  var ground=createSprite(200,340,800,5);
  ground.x=ground.width/2;
  ground.velocityX=-7;
  ground.visible=false;
  stroke("white");
  textSize(20);
  fill("white");
}


function draw(){
  text("score: "+score, 500,50);
 if(background.x<300)
  {
  background.x=300;
  }
  if(bananaGroup.isTouching(monkey))
  {
  score=score+2;
  
  }
  switch(Score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      default: break;
      
      
      
  }
  if(obstacleGroup.isTouching(monkey))
     {
     monkey.scale=0.15;
     
     }
  
  banana.destroyEach();
  food();
  obstacles();
  drawSprites();
}





function food(){
  if(World.frameCount%80===0)
  {
    var banana=createSprite(310,160,10,10);
    banana.addAnimation("Image",bananaImage);
    banana.scale=0.05;
    banana.y=Math.round(random(100,160));
    banana.velocityX=-6;
    banana.lifetime=-66;
    bananaGroup.add(banana);
    
  }
}

function obstacles(){
  if(World.frameCount%300===0)
  {
    var obstacle=createSprite(320,320,10,10);
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale=0.15;
    obstacle.x=Math.round(random(300,360));
    obstacle.velocityX=-4;
    obstacle.lifetime=-133;
    obstacleGroup.add(obstacle);
   
    
    
  }
  
  
  
}
  


  
