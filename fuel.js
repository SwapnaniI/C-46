class Fuel{
    constructor(x,y,w,h,vel){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xVelocity = vel;
        this.angle = random(-50,50);
        this.image = loadImage("tank.png")
    }
    display(){
        push();
        translate(this.x,this.y)
        angleMode(DEGREES)
        rotate(this.angle)
            imageMode(CENTER);
            image(this.image,0,0,this.w,this.h)
        pop();
    }

    update(){      
        this.x += this.xVelocity ;
    }
    
    isComplete(){
        if(this.x +this.w/2 < 0){
            return true;
        }
    }
    rotateFuel(){
        this.angle+=0.4;
    }
}