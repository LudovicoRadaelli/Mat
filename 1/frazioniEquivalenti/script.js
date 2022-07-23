let side = window.innerWidth/2;
if(side > 250) {
    side = 250;
}
let num = 2;
let den = 3;
let subdivision = 1;
let newNum = num*subdivision;
let newDen = den*subdivision;
let letsDraw = false;

document.getElementById("num-input").max = den;

console.log("flag script")

function setup() {
    console.log("flag setup")
    let cnv = createCanvas(side+10, side+10);
    cnv.parent("frazione-sketch");
    
    drawFraction()
}

function draw() {
    if(letsDraw) {
        console.log("flag draw")
        drawFraction()
        letsDraw = false;
    }
}

function drawFraction() {
    console.log("flag drawFraction")
    translate(5,width - 5);
    applyMatrix(1,0,0,-1,0,0);
    
    fill(255, 0, 0, 100);
    noStroke();
    rect(0,0,side*num/den,side)
    
    strokeWeight(4);
    stroke(0,0,0);
    noFill();
    rect(0,0,side,side);
    
    
    for(let i=1; i<den; i++) {
        line(i*side/den, 0, i*side/den, side)
    }
    
    
    for(let i=0; i<newDen; i++) {
        strokeWeight(1);
        line(i*side/newDen, 0, i*side/newDen, side)
    }
}

function generaFrazioneContinua(input) {
    background(255);
    
    num = document.getElementById("num-input").value;
    if(input === `num`) {
        document.getElementById("subdivision-input").value = 1;
    }
    den = document.getElementById("den-input").value;
    
    subdivision = document.getElementById("subdivision-input").value;
    
    
    newNum = num*subdivision;
    newDen = den*subdivision;
    
    document.getElementById("num-input").max = den;
    
    letsDraw = true;

    if(subdivision === `1`) {
        document.getElementById("sliderText").innerHTML = 
        `\\[
            \\dfrac{\\color{#ff7b7b}{${newNum}}}{${newDen}}
        \\]`;
    } else {
        document.getElementById("sliderText").innerHTML = 
        `\\[
            \\dfrac{\\color{#ff7b7b}{${num}}}{${den}} 
            \\color{gray}{\\,=\\,} \\dfrac{\\color{#4e6bff}{${subdivision}}\\color{black}{\\,\\cdot\\,}\\color{#ff7b7b}{${num}}}{\\color{#4e6bff}{${subdivision}}\\color{black}{\\,\\cdot\\, ${den}}}
            \\color{black}{\\,=\\, \\dfrac{\\color{#ff7b7b}{${newNum}}}{${newDen}} }
            
        \\]`;
    }

    MathJax.typesetClear([document.getElementById("sliderText")]);
    MathJax.typesetPromise([document.getElementById("sliderText")]).then(() => {})
}

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */