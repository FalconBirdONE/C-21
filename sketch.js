var fixedRect, movingRect;
var anotherRect; 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true; 

  anotherRect = createSprite(200,200,80,30);
  anotherRect.shapeColor = "green";
  anotherRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect) ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,anotherRect)){
    movingRect.shapeColor = "blue";
    anotherRect.shapeColor = "blue";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    anotherRect.shapeColor = "green";
  }
  
  drawSprites();
}
//boolean values - true and false
//binary number - 1 and 0

//movingRect as rect1 and fixedRect as rect2 as duplicate(dummy) arguments
