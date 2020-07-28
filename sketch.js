//creates the variables for both the rectangles//
var fixedRect, movingRect;







function setup() {
  //creates the canvas//
  createCanvas(800,400);
  //creates the actual "not moving" Rectangle//
  fixedRect = createSprite(200,200,20,20);
  //makes the fixed rectangle green//
  fixedRect.shapeColor = "green";
  //creates the mouse operated Rectangle//
  movingRect= createSprite(600,200,20,21);
  //makes the mouse operated rectangle green//
  movingRect.shapeColor="green";

}

function draw() {
 //background is now white//
  background(255,255,255);  
  //basicaly when the rectagle is touching or behind the fixed one, it turns red. Last two lines make it so it cannot become red when its behind the fixed rectangle//
if(movingRect.x-fixedRect.x< (movingRect.width/2) + (fixedRect.width/2) && 
fixedRect.x-movingRect.x< (fixedRect.width/2) + (movingRect.width/2) && 
movingRect.y-fixedRect.y< (movingRect.height/2) + (fixedRect.height/2) && 
fixedRect.y-movingRect.y< (fixedRect.height/2) + (movingRect.height/2)){
  //the code, for  touching becomes "red";//
  fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
   
}
else {
//if not touching, it becomes "green";//
  fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
}



//makes the moving rectangle follow the mouse X & Y//
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  
  //makes the sprites visible//
  drawSprites();






}