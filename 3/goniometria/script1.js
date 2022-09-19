var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "scaleContainerClass": "geogebra1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra2-container",
    "material_id":"pcxev6by",
    appletOnLoad(api1) {
        api1.registerObjectUpdateListener("g", "readCoordinate");
        api1.registerObjectUpdateListener("a", "readCoordinate");
      }
    }, true);     
    

window.addEventListener("load", function() { 
    ggbApp2.inject('geogebra2');
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



