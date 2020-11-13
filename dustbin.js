class Dustbin{
    constructor(x,y,width,height){
        var box_options={
            isStatic:true
        }
        //you should not write it like this
        //this.bodies = rect(x,y,width,height,box_options);
        this.bodies = Bodies.rectangle(x,y,width,height,box_options);
       
        this.width = width;
        this.height = height;

        World.add(world,this.bodies);
    }
    display(){
        //we need to declare the variables before using them
        // pos = this.bodies.position;
        // angle = this.body.angle;
        var pos = this.bodies.position;
        //wrote body its bodies.
        // var angle = this.body.angle;
        var angle = this.bodies.angle;
        push();
        translate(pos.x,pos.y,);
        rotate (angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop();
    }
}