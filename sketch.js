var bgImage;
var plane, planeImage;
var enemyPlane, enemyplaneImage;


function preload(){
bgImage = loadImage("bg.jpg");
planeImage = loadImage("plane.png");
enemyplaneImage = loadImage("enemyplane.png");
}


function setup(){
  
createCanvas(600,600);

plane = createSprite(400,200,20,20);
plane.addImage(planeImage);
plane.scale = 0.8;

enemyPlane = createSprite(500,200,20,20);
enemyPlane.addImage(enemyplaneImage);
enemyPlane.scale = 0.2;

}

function draw(){
background("cyan");

drawSprites();



}