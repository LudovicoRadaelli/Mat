var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "width": 320, 
    "height": 300,
    "scaleContainerClass":"geogebra-container", 
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"pukjyr75"}, true);

window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
});

function changeM(i, delta) {

    if(i === 1) {
        let a = gg1.getValue("a");
        let q = gg1.getValue("q");
        a += delta;
        if(a >=1 && a <=  15) {
            gg1.setValue("a",a);

            if(q>=0) {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{red}{}y = ${a}x + ${q} \\]`;
            } else {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{red}{}y = ${a}x ${q} \\]`;
            }
            MathJax.typesetClear([document.getElementById("equation"+i)]);
            MathJax.typesetPromise([document.getElementById("equation"+i)]).then(() => {});
        }
        

    }

    if(i === 2) {
        let b = gg1.getValue("b");
        b += delta;
        let k = gg1.getValue("k");
        if(b>= 1 && b <= 15) {
            gg1.setValue("b",b);

            if(k >= 0) {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{blue}{}y = -\\dfrac{1}{${b}}x + ${k} \\]`;
            } else {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{blue}{}y = -\\dfrac{1}{${b}}x ${k} \\]`;
            }   
            
            MathJax.typesetClear([document.getElementById("equation"+i)]);
            MathJax.typesetPromise([document.getElementById("equation"+i)]).then(() => {});
        }
        
    }
}

function changeQ(i,delta) {
    if(i === 1) {
        let a = gg1.getValue("a");
        let q = gg1.getValue("q");
        q += delta;
        if(q >=-12 && q <= 12) {
            gg1.setValue("q",q);

            if(q>=0) {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{red}{}y = ${a}x + ${q} \\]`;
            } else {
                document.getElementById("equation"+i).innerHTML = 
                `\\[\\color{red}{}y = ${a}x ${q} \\]`;
            }
            
            MathJax.typesetClear([document.getElementById("equation"+i)]);
            MathJax.typesetPromise([document.getElementById("equation"+i)]).then(() => {});
        }
    }

    if(i === 2) {
        let b = gg1.getValue("b");
        let k = gg1.getValue("k");
        k += delta;
        if(k >=-12 && k <= 12) {
            gg1.setValue("k",k);

            document.getElementById("equation"+i).innerHTML = 
            `\\[\\color{blue}{}y = -\\dfrac{1}{${b}}x + ${k} \\]`;
            MathJax.typesetClear([document.getElementById("equation"+i)]);
            MathJax.typesetPromise([document.getElementById("equation"+i)]).then(() => {});
        }
    }
}

/* MathJax.typesetClear([]);
MathJax.typesetPromise([]).then(() => {}); */



function mostraPassaggi() {
    document.getElementById("mostraPassaggi").style.display = "none";
    document.getElementById("passaggi").style.display = "block";
    document.getElementById("nascondiPassaggi").style.display = "block";
}

function nascondiPassaggi() {
    document.getElementById("mostraPassaggi").style.display = "block";
    document.getElementById("passaggi").style.display = "none";
    document.getElementById("nascondiPassaggi").style.display = "none";
}

