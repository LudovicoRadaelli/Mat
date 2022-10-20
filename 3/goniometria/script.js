var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"kswyuuds"}, 
    true);   
    
var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"pcxev6by",
    appletOnLoad(api1) {
        api1.registerObjectUpdateListener("g", "readCoordinate");
        api1.registerObjectUpdateListener("a", "readCoordinate");
    }}, 
    true);     
    
var ggbApp3 = new GGBApplet({
    "appName": "classic", 
    "id": "gg3",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"rqwtxe4b"}, 
    true);  

var ggbApp4 = new GGBApplet({
    "appName": "classic", 
    "id": "gg4",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"rqwtxe4b"}, 
    true);  
    
    
var ggbApp5 = new GGBApplet({
    "appName": "classic", 
    "id": "gg5",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"wh3b7kg8"}, 
    true); 

var ggbApp6 = new GGBApplet({
    "appName": "classic", 
    "id": "gg6",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"gxpyuqk3"}, 
    true); 

var ggbApp7 = new GGBApplet({
    "appName": "classic", 
    "id": "gg7",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"kz4mjhax"}, 
    true); 

var ggbApp8 = new GGBApplet({
    "appName": "classic", 
    "id": "gg8",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"gaemptmx"}, 
    true); 

var ggbApp9 = new GGBApplet({
    "appName": "classic", 
    "id": "gg9",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"qg4edgqc"}, 
    true); 

var ggbApp10 = new GGBApplet({
    "appName": "classic", 
    "id": "gg10",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"h3qb2prb"}, 
    true); 

var ggbApp11 = new GGBApplet({
    "appName": "classic", 
    "id": "gg11",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"cpquezuw"}, 
    true); 

var ggbApp12 = new GGBApplet({
    "appName": "classic", 
    "id": "gg12",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"thehbjjx"}, 
    true); 

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
    ggbApp3.inject('geogebra3');
    ggbApp4.inject('geogebra4');
    ggbApp5.inject('geogebra5');
    ggbApp6.inject('geogebra6');
    ggbApp7.inject('geogebra7');
    ggbApp8.inject('geogebra8');
    ggbApp9.inject('geogebra9');
    ggbApp10.inject('geogebra10');
    ggbApp11.inject('geogebra11');
    ggbApp12.inject('geogebra12');
});
    

let rA, thetaA;
let time;

function readCoordinate() {
    rA = gg2.getValue("g");
    thetaA = gg2.getValue("a")*360/(2*Math.PI);
    console.log(`rA: ${rA}, thetaA: ${thetaA}`);
    document.getElementById("coords").innerHTML = 
    `\\[\\left(\\color{#ff7f00}{${Math.floor(thetaA*100)/100}°}\\color{black}{},\\,\\, \\color{#f40099}{${Math.floor(rA*100)/100}}\\color{black}{}\\right)\\]`
    
    MathJax.typesetClear([document.getElementById("coords")]);
    MathJax.typesetPromise([document.getElementById("coords")]).then(() => {});
}


