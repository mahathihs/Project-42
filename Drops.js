class Drops{
    constructor(x,y,r){
        var options ={
            isStatic:true,
            restitution: 0.4,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,this.rain);
    }

    display(){
       var pos = this.rain.position;
       var angle = this.rain.angle;
       
       push();
       translate(pos.x,pos.y);
       noStroke();
       rotate(angle);
       fill("blue");
       ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);
       pop();
    }

    update(){
    if(this.rain.position.y > height){

        Matter.body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
    }
}
}