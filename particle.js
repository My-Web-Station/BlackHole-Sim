class particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.bx=500;
    this.by=350;
    this.types=["center","spiral","ring"];
    this.tilt=70
    this.spiral=[[50,1],[50,3],[50,5],[50,7],[50,8]]

    this.color = color(
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    );
    this.angle = Math.atan2(this.y - this.by, this.x - this.bx)*180/Math.PI;
    this.radius = Math.sqrt((this.x - this.bx) ** 2 + (this.y - this.by) ** 2);
    this.mean1=100+Math.random()*500;
    this.mean2=50+Math.random()*10;

    this.t=this.types[Math.floor(Math.random()*this.types.length)];
  }
  update() {
    if(this.t=="center"){
      this.angle=this.angle-Math.floor(20*Math.random());
      this.radius=Math.max(this.radius-10,this.mean1);
      this.x=this.bx+this.radius*Math.cos(this.angle*Math.PI/180)*Math.sin(this.tilt*Math.PI/180);
      this.y=this.by+this.radius*Math.sin(this.angle*Math.PI/180)*Math.cos(this.tilt*Math.PI/180);
    }
    else if(this.t=="spiral"){
      this.angle=this.angle-Math.floor(20*Math.random());
      this.radius=Math.max(this.radius-10,this.mean1);
      this.x=this.bx+this.radius*Math.cos(this.angle*Math.PI/180)*Math.sin(this.tilt*Math.PI/180);
      this.y=this.by+this.radius*Math.sin(this.angle*Math.PI/180)*Math.sin(this.tilt*Math.PI/180);
    }
    else if(this.t=="ring"){
      this.angle=this.angle-Math.floor(20*Math.random());
      this.radius=Math.max(this.radius-10,this.mean2);
      this.x=this.bx+this.radius*Math.cos(this.angle*Math.PI/180)*Math.sin(this.tilt*Math.PI/180);
      this.y=this.by+this.radius*Math.sin(this.angle*Math.PI/180)*Math.cos(this.tilt*Math.PI/180);
    }
    
  }
  draw() {
    stroke(this.color);
    point(this.x, this.y);
  }
}
