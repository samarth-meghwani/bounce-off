var rect1,rect2;

function setup() {
createCanvas(1200,800)
  rect1 = createSprite(400,100,50,80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(400,600,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  
  rect1.velocityY = +5;
  rect2.velocityY = -5;
}

function draw() {
background(0,0,0);

bounceOff(rect2,rect1);
drawSprites();
}

function bounceOff(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){
  object1.velocityX = object1.velocityX*(-1);
  object2.velocityX = object2.velocityX*(-1);  
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
  }

















