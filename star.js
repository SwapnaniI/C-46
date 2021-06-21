class Star{
    constructor(x,y,w,h,vel1,vel2){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xVelocity = vel1;
        this.yVelocity = vel2;
        this.image = loadImage("star.png");
       
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h)
        pop();
    }

    update(){

        this.x += this.xVelocity ;
        this.y += this.yVelocity ;

    }

    isComplete(){
        if(this.x +this.w/2 < 0){
            return true;
        }
    }
}