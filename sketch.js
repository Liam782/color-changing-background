var mouse;
var r,g,b;

function setup() {
  createCanvas(600,400);

  mouse = createSprite(200,200,10,10);
  mouse.visible = false;

  r = 0;
  g = 0;
  b = 0;
  
}

function draw() {
  background(r,g,b);

  mouse.x = World.mouseX;
  mouse.y = World.mouseY;

  r = map(mouseX,0,200,0,255);
  g = map(mouseX,200,400,0,255);
  b = map(mouseX,400,600,0,255);

  fill("white");
  ellipse(mouse.x,mouse.y,20,);

  drawSprites();
}

