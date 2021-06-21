class Rocket{
    constructor(x,y,w,h){
       this.x = x;
       this.y = y;
       this.w = w; 
       this.h = h;
       this.xVelocity = 0;
       this.yVelocity = 0;
        this.slowDown = false
        this.image = loadImage("rocketImage2.png")
    }
    display(){
        push();
        strokeWeight(0.4)
        for(var i = 0; i < 360; i++){
        colorMode(HSB);
        fill((i + frameCount * 2) % 360, 255, 255, 50);
        stroke((i + frameCount * 2) % 360, 255, 255, 50);
        //tint(((i + frameCount * 2) % 360, 255, 255, 50))
        //  ellipseMode(CENTER);
        //  ellipse(this.x,this.y,this.r,this.r);
        }
        translate(this.x,this.y);
        angleMode(DEGREES)
        rotate(90)
        imageMode(CENTER)
        image(this.image,0,0,this.h,this.w)
        //rect(this.x,this.y,this.w,this.h)
        pop();
    }

    update(){
        push();
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if(this.slowDown === true){
            this.slowDownF();
        }
        this.yVelocity = this.yVelocity + ((-this.yVelocity)/12);
        pop();

    }

    move(xVelocity,yVelocity){
        push();

        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        pop();

    }

    slowDownF(){
        push();

      
        //this.xVelocity = this.xVelocity + ((-this.xVelocity)/12);
        pop();

    }
    
}