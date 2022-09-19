var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"twecmrbw"}, true);

      
var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",    
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"apmst7jy"}, true);

var ggbApp3 = new GGBApplet({
    "appName": "classic", 
    "id": "gg3",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"prcrs75h"}, true);    

var ggbApp4 = new GGBApplet({
    "appName": "classic", 
    "id": "gg4",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"kfey7k9j"}, true);        
    
window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
    ggbApp3.inject('geogebra3');
    ggbApp4.inject('geogebra4');
});

        
function changeValue() {
    var m = document.getElementById("range").value;
    
    gg1.evalCommand("m="+m);

    document.getElementById("newRange").innerHTML = `\\[ \\color{blue}{m} \\color{black}{} = \\color{blue}{${m}} \\]`;  
    MathJax.typesetClear([document.getElementById("newRange")]);
    MathJax.typesetPromise([document.getElementById("newRange")]).then(() => {});
}

function changeValueH() {
    var h = document.getElementById("rangeH").value;
    
    gg3.evalCommand("h="+h);

    document.getElementById("newRangeH").innerHTML = `\\[h = ${h}\\]`
    MathJax.typesetClear([document.getElementById("newRangeH")]);
    MathJax.typesetPromise([document.getElementById("newRangeH")]).then(() => {});
}

function writeFormula() {
    var xA = gg4.getXcoord("A");
    var yA = gg4.getYcoord("A");
    var xB = gg4.getXcoord("B");
    var yB = gg4.getYcoord("B");
    num = yB-yA;
    num = Math.round(num * 100) / 100;
    den = Math.fround(xB-xA);
    den = Math.round(den * 100) / 100;
    document.getElementById("ggCoefAngolare").innerHTML = "\\[m = \\frac{\\color{#0000ff}{"+num+"}}{\\color{#00cc00}{"+den+"}} = 3\\]";
    MathJax.typesetClear([document.getElementById("ggCoefAngolare")]);
    MathJax.typesetPromise([document.getElementById("ggCoefAngolare")]).then(() => {});
}

