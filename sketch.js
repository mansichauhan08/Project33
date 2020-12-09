var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
    

    
}
 


function draw() {
  background("black");
  textSize(20);
  text("500",30,510);
  text("500",105,510);
  text("500",190,510);
  text("500",265,510);
  text("100",350,510);
  text("100",430,510);
  text("100",505,510);
  text("200",585,510);
  text("200",665,510);
  text("200",750,510);
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(50, width-50), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  // }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  if (turn === 5){
    gamestate = "end";
  }
   if(particle!=null){
      particle.display();
      if (particle.body.position.y>760){
        if (particle.body.position.x < 300) {
          score=score+500;      
          particle=null; 
          if(gamestate==="play"){
            turn++;
          }               
        }
        else if (particle.body.position.x < 600 && particle.body.position.x > 301 ){
          score = score + 100;
          particle=null;
          if(gamestate==="play"){
            turn++;
          } 
        }
        else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){
          score = score + 200;
          particle=null;
          if(gamestate==="play"){
            turn++;
          } 
        }      
      }
    }
}

function mousePressed(){
  if (gamestate === "play"){
    particle = new Particle(mouseX, 10,10);
  }
}