class Stone{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          density:1.2
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      this.image = loadImage("image/stone.png");
      World.add(world,this.body); 
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("white");
      imageMode(CENTER);
      image(this.image,0,0,50,50);
      pop();
    }
}