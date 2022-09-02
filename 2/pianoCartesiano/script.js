let sketchWidth = document.getElementsByTagName("body")[0].offsetWidth*7/8;
let u = sketchWidth/10;
let x, y;
let pointList = [];

let letsDraw = false;

function setup() {
  
  let cnv = createCanvas(sketchWidth, sketchWidth);
  cnv.parent("sketch");
  drawGrid();
}

function draw() {

    if(letsDraw) {

        translate(width/2, height/2);
        applyMatrix(1,0,0,-1,0,0);

        for(let i = 0; i < pointList.length; i++) {
            stroke("red");
            strokeWeight(8);
            point(pointList[i].x, pointList[i].y)
        }

        letsDraw = false;
    }
    
}

function drawGrid() {

    stroke("black")
    let denom = document.getElementById("unity-input").value;
    denom = parseInt(denom);

    if(denom <= 40) {
        
        console.log("YAAAAAAAAAAAAAAAA")
        for(let i = 0; i<=width; i += u) {
            strokeWeight(0.4);
            line(i,0,i,height);
            line(0,i,width,i);
        }
    }
    strokeWeight(1);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
    
    strokeWeight(6);
    point(width/2,height/2);
}

function disegna() {
    console.log("function disegna()");
    x = document.getElementsByClassName("coordinate")[0].value;
    y = document.getElementsByClassName("coordinate")[1].value;

    let p = {
        x: x*u,
        y: y*u
    }
    pointList.push(p);
    
    letsDraw = true;
}

function pulisci() {
    console.log("function pulisci()");
    pointList = [];
    background(255);
    drawGrid() 

}

function indietro() {
    pointList.pop();
    console.log(pointList);
    
    fill(255);
    noStroke();
    rect(0,0,width,height);
    
    drawGrid();
    
    letsDraw = true;
}

function resize() {
    let denom = document.getElementById("unity-input").value;
    denom = parseInt(denom);
    u = sketchWidth/denom;
    
    noStroke();
    fill(255);
    rect(0,0,width,height);
    drawGrid();        
    
    pointList.pop();
    disegna();

    document.getElementById("min").innerHTML = `\\(${-denom/2}\\)`;
    document.getElementById("max").innerHTML = `\\(${denom/2}\\)`;
    MathJax.typesetClear([document.getElementById("min"), document.getElementById("max")]);
    MathJax.typesetPromise([document.getElementById("min"), document.getElementById("max")]).then(() => {});
}

function zoom(delta) {
    document.getElementById("unity-input").value = parseInt(document.getElementById("unity-input").value) + 2*delta;
    resize();
}

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */