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

let sign = ['+','-'];

class Coeff {
    constructor(module, sign) {
        this.module = module;
        this.sign = sign;
        this.value;
        if(this.sign === "+") {
            this.value = this.module;
        } else {
            this.value = -this.module;
        }
    }
    
    show() {
        if(this.sign === "+") {
            return `${this.module}`
        } else {
            return `${-this.module}`
        }
    }
}

function signProduct(s1, s2) {
    if(s1 === s2) {
        return ``;
    } else {
        return `-`
    }
}

function oppositeSign(s) {
    if(s === `+`) {
        return `-`
    } else {
        return `+`
    }
}


function generaEsempio(n) {

    let esempio = document.getElementById("esempio"+n);
    document.location.href=`#esempio${n}-title`
    

    if(n === 1) {
        
            
        let a = new Coeff(Math.floor(Math.random()*15 + 1),`${ sign[Math.floor(Math.random()*2)] }`);
        let c = new Coeff(Math.floor(Math.random()*15 + 1),`${ sign[Math.floor(Math.random()*2)] }`);

        console.log(`
        a.module: ${a.module},
        a.sign: ${a.sign},
        a.value: ${a.value},
        c.module: ${c.module},
        c.sign: ${c.sign},
        c.value: ${c.value},
        a.value*c.value: ${a.value*c.value}`);


        if(a.value*c.value < 0) {
            esempio.innerHTML = 
            `Risolviamo l'equazione
            \\[
                ${a.value}x^2 ${c.sign} ${c.module}  = 0
            \\]
            Isoliamo la \\(x^2\\):
            \\[
                ${a.value}x^2 = ${-c.value}
            \\]
            \\[
                x^2 = \\dfrac{${-c.value}}{${a.value}}
            \\]`
            if(a.sign = '-') {
                esempio.innerHTML += 
                `\\[
                    x^2 = \\dfrac{${c.module}}{${a.module}}
                \\]`
            }
            esempio.innerHTML += 
            `Dunque 
            \\[
                x = \\sqrt{\\dfrac{${c.module}}{${a.module}}} \\quad\\text{oppure}\\quad x = -\\sqrt{\\dfrac{${c.module}}{${a.module}}}
            \\]`
            
        } else {
            esempio.innerHTML = 
            `Risolviamo l'equazione
            \\[
                ${a.value}x^2 ${c.sign} ${c.module}  = 0
            \\]
            Isoliamo la \\(x^2\\):
            \\[
                ${a.value}x^2 = ${-c.value}
            \\]
            \\[
                x^2 = \\dfrac{${-c.value}}{${a.value}}
            \\]
            \\[
                x^2 = -\\dfrac{${c.module}}{${a.module}}
            \\]
            Siccome non esiste alcun numero che elevato al quadrato dia come risultato 
            un numero negativo, l'equazione non ha soluzione
            `
        }

        
    }

    if(n === 2) {
            
        let a = new Coeff(Math.floor(Math.random()*15 + 1),`${ sign[Math.floor(Math.random()*2)] }`);
        let b = new Coeff(Math.floor(Math.random()*15 + 1),`${ sign[Math.floor(Math.random()*2)] }`);

        console.log(`
        a.module: ${a.module},
        a.sign: ${a.sign},
        a.value: ${a.value},
        b.module: ${b.module},
        b.sign: ${b.sign},
        b.value: ${b.value},
        `);

        esempio.innerHTML = 
        `Risolviamo l'equazione
        \\[
            ${a.value}x^2 ${b.sign} ${b.module}x = 0
        \\]
        Mettiamo in evidenza la \\(x\\) al primo membro:
        \\[
            x \\cdot \\left(${a.value}x ${b.sign} ${b.module}\\right) = 0
        \\]
        Dunque
        \\[
            x = 0 \\quad\\text{oppure}\\quad ${a.value}x ${b.sign} ${b.module} = 0    
        \\]
        Svolgiamo l'equazione di primo grado a destra:
        \\[
            x = 0 \\quad\\text{oppure}\\quad ${a.value}x = ${-b.value}  
        \\]
        \\[
            x = 0 \\quad\\text{oppure}\\quad x = \\dfrac{${-b.value}}{${a.value}}  
        \\]
        \\[
            x = 0 \\quad\\text{oppure}\\quad x = ${signProduct(a.sign, oppositeSign(b.sign))}\\dfrac{${b.module}}{${a.module}}  
        \\]`

    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}


 /* ------------------------------------------------------------------------- */



    var ggbApp1 = new GGBApplet({
        "appName": "classic", 
        "id": "gg1",
        "showToolBar": false, 
        "showAlgebraInput": false, 
        "showMenuBar": false, 
        "enableShiftDragZoom": false,
        "scaleContainerClass":"geogebra-container",
        "material_id":"pmtwysdq"}, true);

    var ggbApp2 = new GGBApplet({
        "appName": "classic", 
        "id": "gg2",
        "showToolBar": false, 
        "showAlgebraInput": false, 
        "showMenuBar": false, 
        "enableShiftDragZoom": false,
        "scaleContainerClass":"geogebra-container",
        "material_id":"gtc37bt3"}, true);
    
    window.addEventListener("load", function() { 
        ggbApp1.inject('geogebra1');
        ggbApp2.inject('geogebra2');
    });

    function disegnaPunto() {
        if(document.getElementById("coordX").value === `` || document.getElementById("coordY").value === `` || document.getElementById("coordY").value != document.getElementById("coordX").value -1) {
            alert(`input errati`);
        } else {
            let x = document.getElementById("coordX").value;
            let y = document.getElementById("coordY").value;
            gg1.evalCommand(`(${x}, ${y})`);
        }

    }

    function disegnaPolinomio() {
        gg1.evalCommand(`y = x -1`);
    }
