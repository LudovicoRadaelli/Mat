/* var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 6*window.innerWidth/7, 
    "height": window.innerHeight/2, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"pxd9ynb4"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});
 */


/* 
MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {});
*/

function cerchiaMultiplicComuni() {
    document.getElementById("cerchiaMultipliComuni-button").disabled = true;
    document.getElementById("elencoMultipli").style.display = "none";
    document.getElementById("elencoMultipliComuni").style.display = "block";
}

function trovaMcm() {
    document.getElementById("trovaMcm-button").disabled = true;
    document.getElementById("elencoMultipliComuni").style.display = "none";
    document.getElementById("elencoMcm").style.display = "block";
}

let stepMcm = 0;

function nextMcm() {
    stepMcm++;

    if(stepMcm === 1) {
        document.getElementById("comuni").style.color = "red";
        document.getElementById("nextMcm-button").innerHTML = "&rightarrow;";
    }

    if(stepMcm === 2) {
        document.getElementById("comuni").style.color = "black";
        document.getElementsByClassName("risultatiScomposizioni")[0].innerHTML = "\\[63 = \\color{red}{3}\\color{black}{^2\\,\\cdot\\,}\\color{red}{7}\\]";
        document.getElementsByClassName("risultatiScomposizioni")[1].innerHTML = " \\[294 = 2\\cdot\\color{red}{3}\\color{black}{\\,\\cdot}\\color{red}{7}\\color{black}{\\,^2}\\]";
    }

    if(stepMcm === 3) {
        document.getElementById("esponenteMaggiore").style.color = "blue";
    }

    if(stepMcm === 4) {
        document.getElementById("esponenteMaggiore").style.color = "black";
        document.getElementsByClassName("risultatiScomposizioni")[0].innerHTML = "\\[63 = \\color{red}{3}\\color{blue}{^2}\\color{black}{\\,\\cdot\\,}7\\]";
        document.getElementsByClassName("risultatiScomposizioni")[1].innerHTML = " \\[294 = 2\\cdot3\\color{black}{\\,\\cdot}\\color{red}{7}\\color{blue}{\\,^2}\\]";
    }

    if(stepMcm === 5) {
        document.getElementsByClassName("risultatiScomposizioni")[0].innerHTML = "\\[63 = 3^2\\cdot7\\]";
        document.getElementsByClassName("risultatiScomposizioni")[1].innerHTML = "\\[294 = 2\\cdot3\\cdot7^2\\]";
        document.getElementById("mcm").innerHTML = "\\(\\text{m.c.m.}\\left(63, 294\\right) = \\color{red}{3}\\color{blue}{^2}\\color{black}{\\cdot}\\color{red}{7}\\color{blue}{^2}\\)"   
    }

    if(stepMcm === 6) {
        document.getElementById("mcm").innerHTML = "\\(\\text{m.c.m.}\\left(63, 294\\right) = 3^2\\cdot7^2\\)";
        document.getElementById("nonComuni").style.color = "red";
    }

    if(stepMcm === 7) {
        document.getElementById("nonComuni").style.color = "black";
        document.getElementsByClassName("risultatiScomposizioni")[1].innerHTML = "\\[294 = \\color{red}{2\\,}\\color{black}{\\cdot\\,3\\cdot7^2}\\]"
    }

    if(stepMcm === 8) {
        document.getElementsByClassName("risultatiScomposizioni")[1].innerHTML = "\\[294 = 2\\,\\cdot\\,3\\cdot7^2 = \\]"
        document.getElementById("mcm").innerHTML = "\\(\\text{m.c.m.}\\left(63, 294\\right) = 3^2\\cdot7^2\\cdot2 =\\)";
    }

    if(stepMcm === 9) {
        document.getElementById("mcm").innerHTML = "\\(\\text{m.c.m.}\\left(63, 294\\right) = 3^2\\cdot7^2\\cdot2 = 882\\)";
        document.getElementById("nextMcm-button").innerHTML = "&olarr;";
        stepMcm = 0;
    }
    



    MathJax.typesetClear([document.getElementsByClassName("risultatiScomposizioni"), document.getElementById("mcm")]);
    MathJax.typesetPromise([document.getElementsByClassName("risultatiScomposizioni"), document.getElementById("mcm")]).then(() => {});
}