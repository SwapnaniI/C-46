function keyControl(){
  if((rocket.y > 20)&&(rocket.y < height - 20)){

 
    if(keyIsDown(UP_ARROW)){
      rocket.slowDown = false;
      if(ySpeed > -21){
      if(ySpeed > 0){
        ySpeed -= 1.9
      }
      else{
        ySpeed -= 1.6;
      }
    }
    }else  if(keyIsDown(DOWN_ARROW)){
      rocket.slowDown = false;
      if(ySpeed < 21){
        if(ySpeed < 0){
            ySpeed += 1.9
        }
        else{
            ySpeed += 1.6;
        }
    }
    }
    else{
      ySpeed = ySpeed + ((-ySpeed)/12);
  
    }
  }
  else if(rocket.y < 20){
    ySpeed += 0.9
  }
  else{
    ySpeed -= 0.9

  }
  }


  
  
function fireStart(){
    
    push();
    //Adding smoke
    if(faster == true){
      for(var i = 0; i < 2; i++){
        smoke.push(new Particle(rocket.x -rocket.w/2,rocket.y,32));
      }
  
  
      for(var b = smoke.length - 1; b >= 0; b--){
        if(smoke[b].isComplete() === true){
          smoke.splice(b,1);
       
        }
      }
      for(var smokeObject of smoke){
        smokeObject.smokeDisplay();
        smokeObject.update();
      }
      
        

          fire.push(new Particle(rocket.x - rocket.w/2 ,rocket.y ,28));
     
        
        for(var b = fire.length - 1; b >= 0; b--){
          if(fire[b].isComplete() === true){
            fire.splice(b,1);
          
          }
        }
      
      
        for(var fireObject of fire){
          fireObject.display();
          fireObject.update();
      }

    }else{
      smoke.push(new Particle(rocket.x -rocket.w/2,rocket.y,32));
  
      for(var b = smoke.length - 1; b >= 0; b--){
        if(smoke[b].isComplete() === true){
          smoke.splice(b,1);
       
        }
      }
      for(var smokeObject of smoke){
        smokeObject.smokeDisplay();
        smokeObject.update();
      }
      
        
       if(frameCount % 2 === 0){
          fire.push(new Particle(rocket.x - rocket.w/2 ,rocket.y ,28));
          
        }
        
        for(var b = fire.length - 1; b >= 0; b--){
          if(fire[b].isComplete() === true){
            fire.splice(b,1);
          
          }
        }
      
      
        for(var fireObject of fire){
          fireObject.display();
          fireObject.update();
      }
    }
      
  
  
  
  pop()
  
  
  
  
  }

  function isTouching(a,b){
      
    if ((a.x - b.x < b.w / 2 + a.w / 2) &&
    (b.x - a.x < b.w / 2 + a.w / 2) &&
    (a.y - b.y < b.h / 2 + a.h / 2) &&
    (b.y - a.y < b.h / 2 + a.h / 2)) {
  
    return true;
  
  } else {
  
    return false;
  
  }
  
  }

  function enemyStart(){
    push();
    //Adding enemies
  
    if(faster == true){
      if(frameCount % 9 === 0){
      enemies.push(new Enemy(width + 40, random(20,height - 20), 80, 80, -19, random(0.6,-0.6)));
      }
    }else{
      if(frameCount % 16 === 0){
      enemies.push(new Enemy(width + 40, random(20,height - 20), 80, 80, -14, random(0.3,-0.3)));
      }
    }

  
  
  for(var b = enemies.length - 1; b >= 0; b--){
    if(enemies[b].isComplete() === true){
        enemies.splice(b,1);   
    }
    enemies[b].display();
    enemies[b].update();
    if(isTouching(rocket,enemies[b]) === true){
      score-=40;
        enemies.splice(b,1)
    }
  }
 
  pop();
  }
function displayStars(){
  push();
  for(var star of stars){
    star.display(); 
  } 
  pop();
}

  function starStart(){
    push();
    //Adding stars
    if(frameCount % 5 === 0){
      stars.push(new Star(width + 20, random(20,height - 20), 20, 20, -3.5, random(0.08,-0.08)));
    }
  
  for(var b = stars.length - 1; b >= 0; b--){
    if(stars[b].isComplete() === true){
      stars.splice(b,1);   
    }
    stars[b].update();
  }
 
  pop();
  }

  function displayScore(){
    push();
    if(gameState == 1){
      textFont("gigabyte");
      textSize(25);
      fill(0);
      text("Score: " + score, 70,40);     
      text("Fuel: " + Math.round(fuelCount), width - 70,40);
      if(frameCount % 25 === 0){
        score++
      }
  
    }else if(gameState == 2){
      textFont("gigabyte");
      textSize(25);
      fill(0);
      text("Fuel: " + Math.round(fuelCount), width - 70,40);
      text("Score: " + Math.round(score), 70,40);
     
  
      if(frameCount % 12 === 0){
        score+= 1.5
      }
  
    }

    pop();
  }

  function fuelStart(){
    push();

    if(frameCount % 60 === 0){

      if(faster == true){
        tanks.push(new Fuel(width + 20, random(20,height - 20), 50, 50,  -13));
      }else{
        tanks.push(new Fuel(width + 20, random(20,height - 20), 50, 50,  -10));
      }

    }
  for(var b = tanks.length - 1; b >= 0; b--){
    if(tanks[b].isComplete() === true){
      tanks.splice(b,1);
   
    }
    if(isTouching(rocket,tanks[b]) === true){
      fuelCount += 20;
      tanks.splice(b,1)
    }
  }
  for(var fuel of tanks){
    fuel.display();
    fuel.update();
    fuel.rotateFuel();
  }  
  pop();
  }

  function createMenu(){
    background("#00ff00")
    textAlign(CENTER)
    push()
    textSize(31);    
    colorMode(HSB);
   for(var a = 0; a < 360; a ++){ 
     fill((a + frameCount * 2) % 720, 255, 255);

   }   
  
    text("𝚈𝚘𝚞 𝚊𝚛𝚎 𝚊𝚕𝚘𝚗𝚎 𝚒𝚗 𝚊 𝚜𝚙𝚊𝚌𝚎𝚜𝚑𝚒𝚙, 𝚊𝚗𝚍 𝚛𝚞𝚗𝚗𝚒𝚗𝚐 𝚘𝚞𝚝 𝚘𝚏 𝚏𝚞𝚎𝚕...",width/2,320)
    text("𝚈𝚘𝚞 𝚊𝚛𝚎 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎𝚛 𝚘𝚏 this 𝚜𝚙𝚊𝚌𝚎𝚜𝚑𝚒𝚙, 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚖𝚞𝚜𝚝 𝚖𝚊𝚔𝚎 𝚜𝚞𝚛𝚎 𝚗𝚘𝚝 𝚝𝚘 𝚑𝚒𝚝 𝚝𝚑𝚎 𝚊𝚕𝚒𝚎𝚗𝚜, 𝚊𝚜 𝚢𝚘𝚞 𝚖𝚘𝚟𝚎 𝚊𝚗𝚍 𝚌𝚘𝚕𝚕𝚎𝚌𝚝 𝚏𝚞𝚎𝚕.",width/2,480)
    text("𝚄𝚜𝚎 𝚊𝚛𝚛𝚘𝚠 𝚔𝚎𝚢𝚜 𝚝𝚘 𝚌𝚘𝚗𝚝𝚛𝚘𝚕 𝚊𝚗𝚍 𝚐𝚘𝚘𝚍 𝚕𝚞𝚌𝚔!", width/2,640);

    pop();

    
    button1.initialDisplay(button1.x,button1.y);
    button2.displayForLevel(button2.x,button2.y);
  }

  function mouseOver(obj){
    var a = obj.x  - (obj.w/2);
    var b = obj.x  + (obj.w/2);
    var c = obj.y  - obj.h/2;
    var d = obj.y  + obj.h/2;
    if((mouseX > a)&&(mouseX < b)&&(mouseY > c)&&(mouseY < d)){
      return true
    }

  }
  function moveFaster(){
    faster = true;
  }