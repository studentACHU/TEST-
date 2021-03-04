class ROPE{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var opt={
            bodyA:body1,
            bodyB:body2,
            pointB:{x: this.offsetX,y: this.offsetY}
            
                }
          this.ROPE=Constraint.create(opt);
            World.add(world,this.ROPE);
    
    }
    
    display(){
    var pointA=this.ROPE.bodyA.position;
    var pointb=this.ROPE.bodyB.position;
    var a1x=pointA.x;
    var a1y = pointA.y;
    var a2x = pointb.x+this.offsetX;
    var a2y = pointb.y+this.offsetY;
    strokeWeight(4);
    stroke("white");
    line(a1x,a1y,a2x,a2y);
    
    
    
    }
    }
    