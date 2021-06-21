class ButtonObj{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.highlightVar= false;
    }
    initialDisplay(x,y){
        push();
        strokeWeight(4);

        rectMode(CENTER);

        noFill();
        rect(this.x,this.y,this.w,this.h);
        pop();
        textSize(15);
        textAlign(CENTER)
        text("Play survival mode",x,y);
    
  
        
    }
    displayForLevel(x,y){
        push();
        strokeWeight(4);

        rectMode(CENTER);
   
        noFill();
        rect(this.x,this.y,this.w,this.h);
        pop();
        textSize(15);
        textAlign(CENTER)
        text("Play endless mode",x,y);    
  
        
    }

    highlight(){
        
        push();
        highlightVar = true;
       
        pop();
    }

    changeLevel(level){
        gameState = level;
    }
    clickCheck(){
        if( (dist(this.x,this.y,mouseX,mouseY) < this.w) && (dist(this.x,this.y,mouseX,mouseY) < this.h) ){
            return true;
        }
    }
}