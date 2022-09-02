let side = 7*document.getElementById(`sketch-container`).offsetWidth/8;
let u = side/10;

let m = document.getElementById("mRange").value;
m = parseFloat(m);
let q = document.getElementById("qRange").value
q = parseFloat(q);

let letsDraw = true;

function setup() {
    
    let cnv = createCanvas(side, side);
    cnv.parent("retta-sketch");

}

function draw() {

    if(letsDraw) {
        
        fill(255,255,255);
        noStroke();
        rect(0,0,width, height);

        drawGrid();
        
        drawLine();
        
        letsDraw = false;
    }
}

function changeCoordinate() {
    translate(width/2,width/2);
    applyMatrix(1,0,0,-1,0,0);
}

function drawLine() {
    
    changeCoordinate();

    strokeWeight(2);
    stroke("#0F9D58")
    line(-5*u, (m*(-5)+q)*u, 5*u, (m*(5)+q)*u);

    strokeWeight(8);
    stroke("red");
    point(0,q*u);
}

function drawGrid() {

    stroke("black");
  
    for(let i = 0; i<=width; i += u) {
      strokeWeight(0.4);
      line(i,0,i,height);
      line(0,i,width,i);
    }

    strokeWeight(1);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);
  
    strokeWeight(6);
    point(width/2,height/2)
  }

function changeLine() {

    letsDraw = true;

    m = document.getElementById("mRange").value;
    m = parseFloat(m);
    q = document.getElementById("qRange").value;
    q = parseFloat(q);
    let qText = ``;
    q >= 0 ? qText = `+\\,\\,${q}` : qText = `-\\,\\,${-q}`

    document.getElementById("equationText").innerHTML = 
    `\\[
        y = \\,\\color{blue}{${m}} \\color{black}{\\, x \\,} \\color{red}{${qText}}
    \\]`;

    MathJax.typesetClear([document.getElementById("equationText")]);
    MathJax.typesetPromise([document.getElementById("equationText")]).then(() => {}); 
}

function mChange(delta) {
    document.getElementById("mRange").value = parseFloat(document.getElementById("mRange").value) + delta;
    m = document.getElementById("mRange").value;
    changeLine();
}

function qChange(delta) {
    document.getElementById("qRange").value = parseFloat(document.getElementById("qRange").value) + delta;
    q = document.getElementById("qRange").value;
    changeLine();
}

/* MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {}); */