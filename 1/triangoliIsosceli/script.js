var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "scaleContainerClass":"geogebra-container",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"bkkyxzje"}, 
    true);

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "scaleContainerClass":"geogebra-container", 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"gycvsw6n"}, 
    true);    

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
});

