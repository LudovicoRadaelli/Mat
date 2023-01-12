var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": true,
    "scaleContainerClass":"geogebra-container",
    "material_id":"venqevqk"}, 
    true);     
    

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});

let f; //funzione
let a, b; // estremi intervallo di ricerca
let c; // punto medio
let searchA, searchB;
let fa, fb, fc; //valori assunti da f in searchA, searchB e c

let increment;
let oldCenterOfView = 0;
let newCenterOfView;


let aggiornaBloop;
let chooseExtremesFunction;

let delayShiftFunction;
let shiftFunction;
let clearShiftFunction;

let delayZoomFunction;
let zoomFunction;
let clearZoomFunction;

let chooseExtremesTime = 1200;
let delayShiftTime = 1000;
let shiftTime = 100;
let delayZoomTime = 300;
let zoomTime = 100;
let zoomFactor = 1.06;



function definisciFunzione() {
    f = document.getElementById("function").value;
    gg1.evalCommand(`f(x) = ${f}`);
    gg1.setColor("f",0, 0, 0);;
}

function definisciIntervallo() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    gg1.evalCommand(`a = ${a}`)
    gg1.evalCommand(`b = ${b}`)

    gg1.evalCommand(`interval = Segment((${a},0),(${b},0))`);
    gg1.setColor("interval",255, 146, 146);
    gg1.setLabelVisible("interval",false);
    gg1.setLineThickness("interval",10);

     //leggo gli input a e b, estremi dell'intervallo di ricerca
     a = gg1.getValue("a");
     b = gg1.getValue("b");
     
     //definisco un estremo sinistro per la ricerca che sia entro il dominio
     searchA = a + 0.1;
     gg1.evalCommand(`searchA = ${searchA}`);
 
     gg1.evalCommand(`fa = f(${searchA})`);
     fa = gg1.getValue("fa");
 
     //definisco un estremo destro per la ricerca che sia entro il dominio
     searchB = b - 0.1;
     gg1.evalCommand(`searchB = ${searchB}`);
 
     gg1.evalCommand(`fb = f(${searchB})`);
     fb = gg1.getValue("fb");

    //inquadra correttamente la scena
    let horizontalPadding = Math.abs(searchB - searchA)/20;
    let verticalPadding = Math.abs(fb - fa)/20;
    let minY = Math.min(fa, fb);
    minY = minY - verticalPadding;
    let maxY = Math.max(fa, fb);
    maxY = maxY + verticalPadding;
    gg1.evalCommand(`ZoomIn(${searchA- horizontalPadding},${minY},${searchB + horizontalPadding},${maxY})`)
}

function verificaEsistenzaSoluzione() {
    //leggo gli input a e b, estremi dell'intervallo di ricerca
    a = gg1.getValue("a");
    b = gg1.getValue("b");
    
    //definisco un estremo sinistro per la ricerca che sia entro il dominio
    searchA = a + 0.1;
    gg1.evalCommand(`searchA = ${searchA}`);

    gg1.evalCommand(`fa = f(${searchA})`);
    fa = gg1.getValue("fa");

    //definisco un estremo destro per la ricerca che sia entro il dominio
    searchB = b - 0.1;
    gg1.evalCommand(`searchB = ${searchB}`);

    gg1.evalCommand(`fb = f(${searchB})`);
    fb = gg1.getValue("fb");


    //rappresento graficamente (searchA, f(searchA))
    gg1.evalCommand(`A = (${searchA}, ${fa})`);
    gg1.setColor(`A`, 255, 0, 0);
    gg1.setLabelVisible("A",false);

    gg1.evalCommand(`lineA = Segment((${searchA}, 0), A)`);
    gg1.setColor("lineA",100, 100, 100);
    gg1.setLabelVisible("lineA",false);
    gg1.setLineThickness("lineA",10);

    //rappresento graficamente (searchB, f(searchB))
    gg1.evalCommand(`B = (${searchB}, ${fb})`);
    gg1.setColor(`B`, 0, 0, 255);
    gg1.setLabelVisible("B",false);

    gg1.evalCommand(`lineB = Segment((${searchB}, 0), B)`);
    gg1.setColor("lineB",100, 100, 100);
    gg1.setLabelVisible("lineB",false);
    gg1.setLineThickness("lineB",10);

    //aggiorgo searchB fino a quando il suo segno è opposto a quello di searchA
    aggiornaBloop = setInterval(aggiornaB, 200);
}

function stopAggiornaBLoop() {
    clearInterval(aggiornaBloop);
}

function aggiornaB () {
    if(fa*fb > 0) {
        
        //decremento searchB e ricalcolo f(searchB)
        searchB = Math.floor(100*(Math.random()*(b-a) + a))/100
        gg1.evalCommand(`searchB = ${searchB}`);

        gg1.evalCommand(`fb = f(${searchB})`);
        fb = gg1.getValue("fb");

        //disegno il nuovo (searchB, f(searchB))
        gg1.evalCommand(`B = (${searchB}, ${fb})`);

        gg1.evalCommand(`lineB = Segment((${searchB}, 0), B)`);
        gg1.setColor("lineB",100, 100, 100);
        gg1.setLabelVisible("lineB",false);
        gg1.setLineThickness("lineB",10);



    } else {
        
        //nascondi pulsante verifica intervallo
        document.getElementById("verificaIntervallo-container").style.display = "none";        
        
        //mostra il pulsante migliora intervallo
        document.getElementById("miglioraIntervallo-container").style.display = "block";
        document.getElementById("intervalloSoluzione-container").style.display = "block";
        document.getElementById(`intervalloSoluzione`).innerHTML = 
        `\\[
            \\left( ${searchA}, \\, ${searchB} \\right)    
        \\]`;
        MathJax.typesetClear([document.getElementById("intervalloSoluzione"), document.getElementsByClassName("nuovaEquazione")]);
        MathJax.typesetPromise([document.getElementById("intervalloSoluzione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {});
        stopAggiornaBLoop();
    }
}

function miglioraIntervallo() {
    //disabilita pulsante
    document.getElementById("miglioraIntervallo-button").disabled = true;


    //definisco il valore medio tra searchA e searchB
    gg1.evalCommand(`c = (searchA + searchB)/2`);
    c = gg1.getValue(`c`);

    gg1.evalCommand(`fc = f(${c})`);
    fc = gg1.getValue(`fc`);

    //disegno il punto (c, f(c))
    gg1.evalCommand(`C = (${c}, ${fc})`);
    gg1.setColor(`C`, 0, 153, 0);
    gg1.setLabelVisible(`C`, false);

    gg1.evalCommand(`lineC = Segment((${c}, 0), C)`);
    gg1.setColor("lineC",100, 100, 100);
    gg1.setLabelVisible("lineC",false);
    gg1.setLineThickness("lineC",10);
    
    //rendo C e lineC visibili (successivamente verranno resi non visibili)
    gg1.setVisible(`C`, true);
    gg1.setVisible(`lineC`, true);

    chooseExtremesFunction = setTimeout(chooseExtremes, chooseExtremesTime);
}

function chooseExtremes() {
    if(fa*fc < 0) {

        //aggiorno il valore di searchB
        searchB = c;
        gg1.evalCommand(`searchB = ${searchB}`);
        
        //aggiorno il valore di f(searchB)
        gg1.evalCommand(`fb = f(${searchB})`);
        fb = gg1.getValue(`fb`);

    } else {

        //aggiorno il valore di searchA
        searchA = c;
        gg1.evalCommand(`searchA = ${searchA}`);
        
        //aggiorno il valore di f(searchA)
        gg1.evalCommand(`fa = f(${searchA})`);
        fa = gg1.getValue(`fa`);
    }

    //stampa intervallo
    document.getElementById(`intervalloSoluzione`).innerHTML = 
        `\\[
            \\left( ${Math.floor(searchA*10000)/10000}, \\, ${Math.floor(searchB*10000)/10000} \\right)    
        \\]`;
        MathJax.typesetClear([document.getElementById("intervalloSoluzione"), document.getElementsByClassName("nuovaEquazione")]);
        MathJax.typesetPromise([document.getElementById("intervalloSoluzione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {});

    //disegno il nuovo intervallo
    a = searchA;
    b = searchB

    gg1.evalCommand(`interval = Segment((${a},0),(${b},0))`);
    gg1.setColor("interval",255, 146, 146);
    gg1.setLabelVisible("interval",false);
    gg1.setLineThickness("interval",10);

    //rappresento graficamente (searchA, f(searchA))
    gg1.evalCommand(`A = (${searchA}, ${fa})`);
    gg1.setColor(`A`, 255, 0, 0);
    gg1.setLabelVisible("A",false);

    gg1.evalCommand(`lineA = Segment((${searchA}, 0), A)`);
    gg1.setColor("lineA",100, 100, 100);
    gg1.setLabelVisible("lineA",false);
    gg1.setLineThickness("lineA",10);

    //rappresento graficamente (searchB, f(searchB))
    gg1.evalCommand(`B = (${searchB}, ${fb})`);
    gg1.setColor(`B`, 0, 0, 255);
    gg1.setLabelVisible("B",false);

    gg1.evalCommand(`lineB = Segment((${searchB}, 0), B)`);
    gg1.setColor("lineB",100, 100, 100);
    gg1.setLabelVisible("lineB",false);
    gg1.setLineThickness("lineB",10);

    //rendo C e lineC non visibili
    gg1.setVisible(`C`, false);
    gg1.setVisible(`lineC`, false);

    delayShiftFunction = setTimeout(delayShift, delayShiftTime);
    
}

function delayShift() {
    increment = 0;
    newCenterOfView = (searchA + searchB)/2;
    shiftFuntcion = setInterval(shift, shiftTime);
}

function shift() {
    console.log(`
    i'm in shift
    increment: ${increment}
    oldCenterOfView: ${oldCenterOfView}
    newCenterOfView: ${newCenterOfView}`)
    if(increment <=1) {
        let center = oldCenterOfView + increment*(newCenterOfView - oldCenterOfView);
        console.log(`center: ${center}`)
        gg1.evalCommand(`CenterView((${center}, 0))`);
        increment += 0.1;
    } else {
        console.log(`i'm in stopShift`);
        clearInterval(shiftFuntcion);
        delayZoomFunction = setTimeout(delayZoom, delayZoomTime);
    }   
}


 function delayZoom() {
    increment = 0;
    zoomFunction = setInterval(zoom, zoomTime);
 }

function zoom() {
    console.log(`
    i'm in zoom
    increment: ${increment}`)
    if(increment <=1) {
        gg1.evalCommand(`ZoomIn(${zoomFactor})`);
        increment += 0.1;
    } else {
        oldCenterOfView = newCenterOfView;
        console.log(`i'm in stopZoom`);
        document.getElementById("miglioraIntervallo-button").disabled = false;
        clearInterval(zoomFunction);
    }   
}

function speedUp() {
    chooseExtremesTime = 10;
    delayShiftTime = 20;
    shiftTime = 20;
    delayZoomTime = 20;
    zoomTime = 20;
    zoomFactor = 1.12;
}
