var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=5;
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (bounceOff(movingRect,fixedRect)){
movingRect.shapecolor="red";
fixedRect.shapecolor="yellow";

  }
  
  drawSprites();
}

function bounceOff(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o1.velocityX*(-1);
    }

    if (o1.y - o2.y < o2.height/2 + o1.height/2
      && o2.y - o1.y < o2.height/2 + o1.height/2){
  o1.velocityY=o1.velocityY*(-1);
  o2.velocityY=o1.velocityY*(-1);
      }
}