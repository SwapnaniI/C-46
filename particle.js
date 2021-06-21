class Particle{
    constructor(x,y,r){
       this.x = x;
       this.y = y;
       this.r = r; 
       this.yVelocity = random(-1.2,1.2);
       this.xVelocity = random(-4,-6);      
       this.life = 255
    }
    display(){
        push();       
        noStroke();
        fill(240, 35, 20 , this.life)
        //fill(255, 0, 0 , this.life)
        
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r,this.r);    
        pop();
        this.life -= 9.5;
    }

    update(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;

       

    }
    isComplete(){
        if(this.life < 0){
            return true
        }else{
            return false;
        }
    }
    smokeDisplay(){
        push();       
        noStroke();
        fill(10, 10, 10 , this.life)
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r,this.r); 
        this.life -= 9.2;   
        pop();
    }
    dustDisplay(){
        push();
       
        for(var i = 0; i < 360; i++){
            colorMode(HSB);
            fill((i + frameCount * 2) % 360, 255, 255, this.life);
            stroke((i + frameCount * 2) % 360, 255, 255, this.life);
            //tint(((i + frameCount * 2) % 360, 255, 255, 50))
            //  ellipseMode(CENTER);
            //  ellipse(this.x,this.y,this.r,this.r);
            ellipseMode(CENTER);
            ellipse(this.x,this.y,this.r,this.r);
            }
            pop();
    }
    
}