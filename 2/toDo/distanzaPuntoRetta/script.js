var ggbApp1 = new GGBApplet({
    appletOnLoad(api) {
        api.registerObjectUpdateListener("H","changeColor");
    },
    "appName": "classic", 
    "id": "gg1",
    "width": 320, 
    "height": 300, 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"wu8rkuzg"}, 
    true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});

/* gg1.registerUpdateListener("changeColor"); */

function changeColor() {
    let alpha = gg1.getValue("alpha");
    alpha = alpha/(3.141592653589793)*180;
    if(alpha > 89.5 && alpha < 90.5) {
        gg1.setColor("g",255,0,0);
    } else {
        gg1.setColor("g",0,0,0);
    }
    console.log("alpha"+alpha)
    
}

/* function show(id) {

    document.getElementById(`${id}-button`).style.display = "none";
    document.getElementById(id).style.display = "block";

} */



/* MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {}); */

