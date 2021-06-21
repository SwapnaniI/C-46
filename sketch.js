var rocket;
var xSpeed,ySpeed;
var fire = [];
var smoke = [];
var dust = [];
var enemies = [];
var stars = [];
var tanks = [];
var fuelCount;
var score;
var gameState = 0;
var button1,button2,button3;
var overImage,restartImage;
var fuelCount = 0;
var faster = false;

function preload(){
overImage = loadImage("GO.png");
restartImage = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  xSpeed = 0;
  ySpeed = -0;

  rocket = new Rocket(300,350,133,39);

  fuelCount = 100;

   score = 0;

   button1 = new ButtonObj(200,height-100,200,40);
   button2 = new ButtonObj(width-200,height-100,200,40);
   button3 = new ButtonObj(80,120,60,60);
  
}

function draw() {

faster = false;

    if((gameState!=0||(gameState!="over"))){
      fuelCount-=0.2;
    }
  

starStart();
  if(gameState === 1){
    clear()

    moveFaster();

  push()
  colorMode(HSB);
   for(var a = 0; a < 360; a ++){ 
     background((a + frameCount * 2) % 360, 255, 255);
   }
   
   pop();

  
   rocket.move(xSpeed,ySpeed);
   rocket.update();
 
   keyControl();
   displayStars();

   fireStart();
   enemyStart();
 
   
   rocket.display(); 


  }else if(gameState === 2){
    clear()

    background("#002b80");

 //  push()
 //  colorMode(HSB);
 //   for(var a = 0; a < 360; a ++){ 
 //     background((a + frameCount * 2) % 360, 255, 255);
 //   }
   
 //   pop();
 
 if(fuelCount<0){
  gameState = "over";
}
   rocket.move(xSpeed,ySpeed);
   rocket.update();

   keyControl();
   displayStars();

   if(score<0){
     gameState = "over";
   }
   if(fuelCount<0){
     gameState = "over";
   }

   fireStart();
   fuelStart();
   enemyStart();
   displayScore();
   rocket.display(); 
  }
  else{
    createMenu();
  }if(gameState == "over"){
    background("brown")
    image(overImage,width/2,height/2)
  }


  imageMode(CENTER);
  image( restartImage, button3.x, button3.y, button3.w, button3.h )
}

function mousePressed(){
  if(mouseOver(button1)){
    gameState = 2;
  }
  if(mouseOver(button2)){
    gameState = 1;
  }
  if(button3.clickCheck()){
    if((gameState == 1)||(gameState == 2)||(gameState == "over")){
      gameState = 0;
      score = 0;
      fuelCount =100;
      enemies = [];
      tanks = [];
    }
  }
}








