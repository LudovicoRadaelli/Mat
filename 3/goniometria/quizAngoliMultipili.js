/* ---------------- INTESTAZIONE ---------------- */

/* 

<script src="https://www.geogebra.org/apps/deployggb.js"></script>

*/


/* ---------------- HTML ---------------- */

/*

<h3 class="green">Quiz angoli multipli di \(\dfrac{\pi}{6}, \(\dfrac{\pi}{4}, \(\dfrac{\pi}{3}, \(\dfrac{\pi}{2}\)</h3>
<br>
<p class="gray">
    Attraverso questo esercizio potete allenare la memoria su seno, coseno e tangente  degli angoli multipli di \(\dfrac{\pi}{6}\), \(\dfrac{\pi}{4}\), \(\dfrac{\pi}{3}\) e multipli di \(\dfrac{\pi}{2}\)
</p>
<br>
    
<div class="grayBorder">
    <div class="geogebra-container">
        <div id="geogebra1"></div>
    </div>

    <p id="domanda" style="min-height: 10vh;"></p>  
    
    <br>

    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <button id="generaDomanda" onclick="generaDomanda()">Nuova domanda!</button>
        <button id="rispostaCorretta" onclick="controllaSoluzione()" disabled>Controlla soluzione</button>
    </div>
</div>

<br>
<br>
<hr>
<br>
</br>

*/

/* ---------------- JS ---------------- */


var ggbApp1 = new GGBApplet({
"appName": "classic", 
"id": "gg1",
"showToolBar": false, 
"showAlgebraInput": false, 
"showMenuBar": false, 
"enableShiftDragZoom": false,
"scaleContainerClass":"geogebra-container",
"material_id":"umfgk74v"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});

let rispostaCorretta;

let trigFunction;
let angleGG;
let angleToPrint;

let trigFunctionIndex = 0;
let randomIndex = 0;

let trigFunctionList = [`sin`, `cos`, `tan`];
let angleListGradi = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
let angleListRadianti = [
    "0", 
    "\\dfrac{\\pi}{6}", 
    "\\dfrac{\\pi}{4}", 
    "\\dfrac{\\pi}{3}", 
    "\\dfrac{\\pi}{2}", 
    "\\dfrac{2}{3}\\pi",  
    "\\dfrac{3}{4}\\pi", 
    "\\dfrac{5}{6}\\pi", 
    "\\pi", 
    "\\dfrac{7}{6}\\pi", 
    "\\dfrac{5}{4}\\pi", 
    "\\dfrac{4}{3}\\pi", 
    "\\dfrac{3\\pi}{2}", 
    "\\dfrac{5}{3}\\pi", 
    "\\dfrac{7}{4}\\pi", 
    "\\dfrac{11}{6}\\pi", 
];



let trigFunctionValue = [

    [`0`, `1`, `0`], //0 ***

    [`\\dfrac{1}{2}`, `\\dfrac{\\sqrt{3}}{2}`, `\\dfrac{\\sqrt{3}}{3}`], //pi/6

    [`\\dfrac{\\sqrt{2}}{2}`, `\\dfrac{\\sqrt{2}}{2}`, `1`], //pi/4

    [`\\dfrac{\\sqrt{3}}{2}`, `\\dfrac{1}{2}`, `\\sqrt{3}`], //pi/3

    [`1`, `0`, `\\text{non esiste}`], //pi/2 ***

    [`\\dfrac{\\sqrt{3}}{2}`, `-\\dfrac{1}{2}`, `-\\sqrt{3}`], //2/3pi

    [`\\dfrac{\\sqrt{2}}{2}`, `-\\dfrac{\\sqrt{2}}{2}`, `-1`], //3pi/4

    [`\\dfrac{1}{2}`, `-\\dfrac{\\sqrt{3}}{2}`, `-\\dfrac{\\sqrt{3}}{3}`], //5/6pi

    [`0`, `-1`, `0`], //pi ***

    [`-\\dfrac{1}{2}`, `-\\dfrac{\\sqrt{3}}{2}`, `\\dfrac{\\sqrt{3}}{3}`], //7/6pi

    [`-\\dfrac{\\sqrt{2}}{2}`, `-\\dfrac{\\sqrt{2}}{2}`, `1`], //5pi/4

    [`-\\dfrac{\\sqrt{3}}{2}`, `-\\dfrac{1}{2}`, `\\sqrt{3}`], //4/3pi

    [`-1`, `0`, `\\text{non esiste}`], //3/2pi ***

    [`-\\dfrac{\\sqrt{3}}{2}`, `\\dfrac{1}{2}`, `-\\sqrt{3}`], //5/3pi

    [`-\\dfrac{\\sqrt{2}}{2}`, `\\dfrac{\\sqrt{2}}{2}`, `-1`], //7pi/4

    [`-\\dfrac{1}{2}`, `\\dfrac{\\sqrt{3}}{2}`, `-\\dfrac{\\sqrt{3}}{3}`], //11/6pi

];

function generaDomanda() {

    document.getElementById("rispostaCorretta").disabled = false;

    trigFunctionIndex = (trigFunctionIndex +  Math.floor(Math.random()*trigFunctionList.length))%trigFunctionList.length;
    trigFunction = trigFunctionList[trigFunctionIndex]

    randomIndex = (randomIndex + Math.floor(Math.random()*angleListGradi.length - 1))%angleListGradi.length;
    angleGG = angleListGradi[randomIndex];
    angleToPrint = angleListRadianti[randomIndex];

    console.log(`
    randomIndex: ${randomIndex},
    angleGG: ${angleGG},
    trigFunctionIndex:${trigFunctionIndex},
    trigFunction: ${trigFunctionList[trigFunctionIndex]}
    `)

    rispostaCorretta = trigFunctionValue[randomIndex][trigFunctionIndex];

    

    gg1.setValue("a", angleGG);

    let grid30Index = [1, 7, 9, 15];
    let grid60Index = [3, 5, 11, 13];
    let grid45Index = [2, 6, 10, 14];
    let grid90Index = [0, 4, 8, 12];

    for(let i = 1; i <=4; i++) {
        gg1.setVisible(`l${i}`, false)
    }

    if(randomIndex === 1 || randomIndex === 7 || randomIndex === 9 || randomIndex === 15) {
        gg1.setVisible("l1", true)
    }
    if(randomIndex === 3 || randomIndex === 5 || randomIndex === 11 || randomIndex === 13) {
        gg1.setVisible("l2", true)
    }
    if(randomIndex === 2 || randomIndex === 6 || randomIndex === 10 || randomIndex === 14) {
        gg1.setVisible("l3", true)
    }
    if(randomIndex === 0 || randomIndex === 4 || randomIndex === 8 || randomIndex === 12) {
        gg1.setVisible("l4", true)
    }


    let domanda = document.getElementById("domanda");
    domanda.innerHTML = 
    `\\[
        ${trigFunction}\\left(${angleToPrint}\\right) = \\text{.......}\\,\\,\\,?
    \\]`

    MathJax.typesetClear([domanda]);
    MathJax.typesetPromise([domanda]).then(() => {});
}

function controllaSoluzione() {
    let domanda = document.getElementById("domanda");
    domanda.innerHTML = 
    `\\[
        ${trigFunction}\\left(${angleToPrint}\\right) = ${rispostaCorretta}
    \\]`
    MathJax.typesetClear([domanda]);
    MathJax.typesetPromise([domanda]).then(() => {});
}




