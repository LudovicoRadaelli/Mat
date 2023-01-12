let size;
//SETUP
function setup() {
  frameRate(60);
  size = Math.min(window.innerWidth*9/10 , window.innerHeight*9/10)
  let cnv = createCanvas(size, size);  
  cnv.parent('try1');
  drawBackground();
  //let button1 = createButton('pulisci');
  //button1.mousePressed(drawBackground);

}

//DRAW
function draw() {
  if ((touches.length > 0 || mouseIsPressed=== true) && mouseX > 1/4*size && mouseX < 3/4*size) {
      stroke('black');
      strokeWeight(3);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }  
}

//DRAW BACKGROUND
function drawBackground() {
  fill(255);
  
  strokeWeight(2);
  stroke('black')
  rect(0,0,size,size);
  translate(size/2,size/2);
  line(0,-size/2,0,size/2);
  line(-size/2,0,size/2,0);
  
  strokeWeight(4);
  stroke('red');
  line(-size/4,0,size/4,0);
  
  strokeWeight(7); // Make the points 10 pixels in size
  point(-size/4, 0);
  point(size/4, 0);
 
}  










  
