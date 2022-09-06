var bola; 


function setup() {
  bola = createSprite(200,200,50,50)
  createCanvas(600,600);
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyIsDown(UP_ARROW)){
    bola.y = bola.y - 20;
  }
  if(keyIsDown(DOWN_ARROW)){
    bola.y = bola.y + 20;
  }
  if(keyIsDown(LEFT_ARROW)){
    bola.x = bola.x - 20;
  }
  if(keyIsDown(RIGHT_ARROW)){
    bola.x = bola.x + 20;
  }
}




