var thickness, wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "green";

  wall = createSprite(1500, 200,thickness, height / 2);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0);
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor = "red";
    }

    if(damage<10)
    {
      wall.shapeColor = "skyblue";
    }
  }

  drawSprites();
}



