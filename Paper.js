class Paper{
    constructor(x,y){

        var options = {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.image = loadImage("paper.png");
        this.width = 150;
        this,height = 30;
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
