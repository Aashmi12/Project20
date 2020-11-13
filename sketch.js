var car, wall;
var speed,weight;



function setup() {
createCanvas(1600,400);


  speed = random(50,99);
  weight = random(400,1500);


  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "purple";
  


  wall = createSprite(1500,200,60,height / 2);
  wall.shapeColor = "black";


}



function draw() {
  background("lightBlue");  
if(wall.x-car.x < (car.width = wall.width) / 2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / 22509;

  if(deformation>180){
    car.shapeColor = "red";
    textSize(30);
    fill("red");
    text("LETHAL!",530,50);

  }

  if(deformation < 180 && deformation > 100){
    car.shapeColor = "yellow";
    textSize(30);
    fill("yellow");
    text("AVERAGE!",530,50);
  }

  if(deformation < 100){
    car.shapeColor = "green";
    textSize(30);
    fill("green");
    text("GOOD!",530,50);
  }
}
  
  drawSprites();
}