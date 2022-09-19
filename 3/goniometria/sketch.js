let n = document.getElementById("angle").value;
let r = 150;
let angle;
let gridUnit = [1,2,3,4,6];

let changeAngle = false;

let drawTooltip = false;
let numSelected; //il k dell'angolo tooltip selezionato
let tooltipedAngle;
let tooltipedAngleImg = [];
for(let k = 0; k < 7; k++) {
  tooltipedAngleImg[k] = []
}

let drawSinBool = false;
let drawCosBool = false;
let drawTgBool = false;

function preload() {
  tooltipedAngleImg[0][0] = loadImage(`img/0.png`);
  for(let den = 1; den < 7; den++) {
    if(den !== 5){
      for(let num = 1; num < den*2; num++)
      tooltipedAngleImg[den][num] = loadImage(`img/${den}${num}.png`);
    }
}
}

function setup() {
  let size = window.innerWidth;
  let cnv = createCanvas(size, size);
  cnv.parent("sketch");
  background(255);
  angleMode(RADIANS);
  angle = PI/4
}

function draw() {
  
  changeCoordinate();
  
  drawCircle();

  if(drawSinBool) {
    drawSin()
  }

  if(drawCosBool) {
    drawCos()
  }

  if(drawTgBool) {
    drawTg()
  }
  
  drawRay();
  
  if(drawTooltip) {
    tooltip();
  }
  
  
}

function changeCoordinate() {
  translate(width/2,height/2);
  applyMatrix(1,0,0,-1,0,0)
}

function drawRay() {
  
  stroke(50,50,50);
  strokeWeight(2);
  line(0,0,r*cos(angle),r*sin(angle));
  
  strokeWeight(10);
  point(r*cos(angle),r*sin(angle));
}

function touchStarted() {
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2
  if(sqrt((r*cos(angle)-mX)*(r*cos(angle)-mX) + (r*sin(angle)-mY)*(r*sin(angle)-mY))<10) {
    changeAngle = true;
  }

  for(let k = 0; k < 2*n; k++) {
    let clickedAngle;
    if(mX >= 0 && mY>= 0) {
      clickedAngle = floor(atan(mY/mX)*100)/100;
    } else if(mX >= 0 && mY<= 0) {
      clickedAngle = 2*PI + floor(atan(mY/mX)*100)/100;
    } else if(mX <= 0 && mY<= 0) {
      clickedAngle = floor(atan(mY/mX)*100)/100 + PI;
    } else if(mX <= 0 && mY>= 0) {
      clickedAngle = floor(atan(mY/mX)*100)/100 + PI;
    }

    
    
    //console.log(`${k}: angolo cliccato: ${clickedAngle}, angolo target: ${floor((k*PI/n)*100)/100}`)

    if(floor((k*PI/n)*100)/100 - 0.05 <= clickedAngle && clickedAngle <= floor((k*PI/n)*100)/100 + 0.05 && changeAngle === false) {
      tooltipedAngle = floor((k*PI/n)*100)/100;
      numSelected = k;
      drawTooltip = true;
      break;
    } else {
      drawTooltip = false;
    }
  }
}

function touchMoved() {
  let mX = mouseX - width/2;
  let mY = -mouseY + height/2;
  if(changeAngle) {
    if(mX>=0) {
      angle = atan(mY/mX);  
    } else {
      angle = PI + atan(mY/mX);  
    }
  }

  
}

function touchEnded() {
  changeAngle = false;
}



function drawCircle() {
  background(255);
  strokeWeight(1);
  for(let i=0; i<2*PI; i+=PI/n) {
    if(i===0 ||i===PI/2 || i===PI || i===3*PI/2) {
      stroke(150);   
    } else {
      stroke(200);  
    }
    line(0,0,r*cos(i),r*sin(i));
  }
  stroke(150)
  strokeWeight(5);
  point(0,0);
  
  strokeWeight(1);
  stroke("black")
  noFill();
  ellipse(0,0,2*r,2*r);
}

function changeGrid() {
  n = gridUnit[document.getElementById("angle").value];
  console.log(`n = ${n}`)
}

function tooltip() {
  /* let mX = mouseX - width/2;
  let mY = -mouseY + height/2; */
  
    
  strokeWeight(1);
  textSize(20);
  


  if(numSelected === 0) {
    image(tooltipedAngleImg[0][0],  r*cos(tooltipedAngle),r*sin(tooltipedAngle), tooltipedAngleImg[0][0].width*1/3, tooltipedAngleImg[0][0].height*1/3);  
  } else {
    image(tooltipedAngleImg[n][numSelected],  r*cos(tooltipedAngle),r*sin(tooltipedAngle), tooltipedAngleImg[n][numSelected].width*1/3, tooltipedAngleImg[n][numSelected].height*1/3);
  }
  
}

function mostra(functionName) {
  
  if(functionName === "sin") {
    drawSinBool = !drawSinBool;
  } else if(functionName === "cos") {
    drawCosBool = !drawCosBool;
  } else if(functionName === "tg") {
    drawTgBool = !drawTgBool;
  }

}

function drawSin() {
  
  strokeWeight(2);
  stroke(`red`);
  line(r*cos(angle),0,r*cos(angle),r*sin(angle));
}

function drawCos() {
  
  strokeWeight(2);
  stroke(`blue`);
  line(0,0,r*cos(angle),0);
}

function drawTg() {

  strokeWeight(1);
  stroke(`gray`);
  line(r, -height/2, r, height/2);

  
  strokeWeight(1);
  stroke(`gray`);
  line(0,0,r,r*tan(angle));

  strokeWeight(2.5);
  stroke(0, 200, 0);
  line(r,0,r,r*tan(angle));
}

