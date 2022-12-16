let size=700;
let bx = 500;
let by = size/2;
let brush=20;
let particles = [];
let maxsize=20000;
let addCount=800;

function setup() {
  createCanvas(size*2-400, size);
  background(0);


}



function addParticles(x,y){
  x = Math.floor(x);
  y = Math.floor(y);
  particles.push(new particle(x,y));
}



function updateParticles(){
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  for (var i = 0; i < addCount-50; i++) {
    particles.pop();
  }
  // console.log(particles.length);
  if(particles.length>maxsize){
    for (var i = 0; i < maxsize-1000; i++) {
      particles.pop();
    }
  }
}


function drawParticles(){
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
  }

}


function draw() {
  background(0,40);
  updateParticles();
  drawParticles();

  for (var i = 0; i < addCount; i++) {
    addParticles(1200+brush*Math.random()-brush/2,350+brush*Math.random()-brush/2);
  } 

  
  //circle(bx,by,10);
} 
