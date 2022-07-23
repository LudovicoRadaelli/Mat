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

function generaEsempio(n) {
    if(n === 0) {
        let b = Math.floor(Math.random()*12+2);
        let e = Math.floor(Math.random()*12+1);

        let str = `${b}`

        for(let i = 0; i < e -1; i++) {
            str += `\\cdot ${b} `
        }

        document.getElementById(`esempio${n}`).innerHTML = 
        `\\[
            ${b}^{\\color{red}{${e}}} = \\underset{\\color{red}{${e}}\\,\\,\\color{gray}{\\text{volte}}}{\\color{gray}{\\underbrace{\\color{black}{${str}}}}}
        \\]`

        MathJax.typesetClear([document.getElementById("esempio0")]);
        MathJax.typesetPromise([document.getElementById("esempio0")]).then(() => {});
    }


    if(n === 1) {
        let b = Math.floor(Math.random()*12+2);
        let e1 = Math.floor(Math.random()*12+1);
        let e2 = Math.floor(Math.random()*12+1);
        let eRes = e1 + e2;

        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b}}^{\\color{blue}{${e1}}} \\color{black}{\\,\\,\\cdot\\,\\,} \\color{red}{${b}}^{\\color{blue}{${e2}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${b}}^{\\color{blue}{${eRes}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio1")]);
        MathJax.typesetPromise([document.getElementById("esempio1")]).then(() => {});

    }

    if(n === 2) {
        let b = Math.floor(Math.random()*12 + 2);
        let e1 = Math.floor(Math.random()*6 + 7);
        let e2 = e1 - Math.floor(Math.random()*6);
        let eRes = e1 - e2;

        document.getElementById("esempio2").innerHTML = 
        `\\[ \\color{red}{${b}}^{\\color{blue}{${e1}}} \\color{black}{\\,\\,:\\,\\,} \\color{red}{${b}}^{\\color{blue}{${e2}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${b}}^{\\color{blue}{${eRes}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 3) {
        let b1 = Math.floor(Math.random()*12 + 2);
        let b2 = Math.floor(Math.random()*12 + 2);
        let e = Math.floor(Math.random()*12 + 2);
        let bRes = b1*b2;

        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b1}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\cdot\\,\\,} \\color{red}{${b2}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${bRes}}^{\\color{blue}{${e}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 4) {
        let b2 = Math.floor(Math.random()*5 + 2);
        let b1 = b2*Math.floor(Math.random()*5 + 2);
        let e = Math.floor(Math.random()*12 + 2);
        let bRes = Math.floor(b1/b2);
        document.getElementById("esempio"+n).innerHTML = 
        `\\[ \\color{red}{${b1}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,:\\,\\,} \\color{red}{${b2}}^{\\color{blue}{${e}}} \\color{black}{\\,\\,\\,=\\,\\,\\,} \\color{red}{${bRes}}^{\\color{blue}{${e}}} \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 5) {
        let e1 = Math.floor(Math.random()*12 + 2);
        let e2 = Math.floor(Math.random()*12 + 2);
        let b = Math.floor(Math.random()*12 + 2);
        let eRes = Math.floor(e1*e2);
        document.getElementById("esempio"+n).innerHTML = 
        `\\[ 
            \\left(\\color{red}{${b}}\\color{black}{}^{\\color{blue}{${e1}}}\\right)^{\\color{blue}{${e2}}} = \\color{red}{${b}}^{\\color{blue}{${eRes}}}    
        \\]`;
        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }




}