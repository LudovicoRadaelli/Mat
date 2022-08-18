let lastPoint  = {}

//SETUP
function setup() {
  let cnv = createCanvas(300, 300);  
  cnv.parent('try1');
  
  translate(150, 150);
  applyMatrix(1, 0, 0, -1, 0, 0);
  
  drawBackground();

}

//DRAW
function draw() {
  
  translate(150, 150);
  applyMatrix(1, 0, 0, -1, 0, 0);


  if (mouseIsPressed === true && 
      mouseX > 0 && mouseX < 300 &
      mouseY > 0 && mouseY < 300) {
      stroke('black');
      strokeWeight(3);
      line(lastPoint.x, lastPoint.y, mouseX - width/2, -mouseY + height/2);

      lastPoint.x = mouseX - width/2;
      lastPoint.y = -mouseY + height/2;
  }  

  

}


//DRAW BACKGROUND
function drawBackground() {

  lastPoint = {
    x: -100,
    y: -50
  };

  fill(255);
  
  strokeWeight(2);
  stroke('black')
  rect(-150, -150, 300, 300);

  stroke(100);
  strokeWeight(1);
  line(0, -150, 0, 150)

  strokeWeight(3);
  stroke('black');
  line(-100, -50, 100, -50);
  
}  









  
