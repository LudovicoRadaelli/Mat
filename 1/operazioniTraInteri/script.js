let slideAddizione = 0; 

let signA = "-";
let a = 6;

let signB = signA;
let b = 8;

let signR = signA;
let r = Math.floor(a+b);

let slideSegniDiff = 0; 

let signC = "-";
let c = 16;

let signD = "+";
let d = 7;

let signRis;
if(c >= d) {
    signRis = signC;
} else {
    signRis = signD;
}
let ris = Math.max(c,d) - Math.min(c,d);



function step(n, es) {
    if(es === 1) {

        location.href = "#regolaEsempio1";


        slideAddizione = slideAddizione + n;

        if(slideAddizione === 0) {

            document.getElementsByClassName("passaggio")[0].style.color = "black";
            document.getElementsByClassName("prev")[0].disabled = true;
            
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} =
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} =
                \\)`
            }
        }

        if(slideAddizione === 1) {
            document.getElementsByClassName("prev")[0].disabled = false;
            document.getElementsByClassName("passaggio")[0].style.color = "red";
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} =
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} =
                \\)`
            }
        }

        if(slideAddizione === 2) {
            document.getElementsByClassName("passaggio")[0].style.color = "black";
            document.getElementsByClassName("esempio")[0].innerHTML = `\\(\\color{red}{${signA}}\\color{black}{${a}\\,\\,}\\color{red}{${signB}\\,}\\color{black}{${b}}=\\)`
        }
        if(slideAddizione === 3) {
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} = \\color{red}{${signR}}
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} = \\color{red}{${signR}}
                \\)`
            }
        }

        if(slideAddizione === 4) {
            document.getElementsByClassName("passaggio")[1].style.color = "red";
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} = ${signR}
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} = ${signR}
                \\)`
            }
        }

        if(slideAddizione === 5) {
            document.getElementsByClassName("passaggio")[1].style.color = "black";

            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    \\color{red}{${a}\\,\\,}\\color{black}{${signB}}\\color{red}{${b}} \\color{black}{= ${signR}}
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}\\color{red}{${a}\\,\\,}\\color{black}{${signB}\\,}\\color{red}{${b}\\,\\,} \\color{black}{= ${signR}}
                \\)`
            }
        }

        if(slideAddizione === 6) {
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} = ${signR} \\color{red}{${r}}
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} = ${signR} \\color{red}{${r}}
                \\)`
            }
        }

        if(slideAddizione === 7) {
            if(signA === "+") {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${a}${signB}${b} = ${signR} ${r}
                \\)`;
            } else {
                document.getElementsByClassName("esempio")[0].innerHTML  = 
                `\\(
                    ${signA}${a}${signB}${b} = ${signR} ${r}
                \\)`
            }

            document.getElementsByClassName("prev")[0].style.display = "none";
            document.getElementsByClassName("next")[0].style.display = "none";        
            document.getElementsByClassName("again")[0].style.display = "block"
        }

        MathJax.typesetClear([document.getElementsByClassName("esempio")[0]]);
        MathJax.typesetPromise([document.getElementsByClassName("esempio")[0]]).then(() => {});
        }

    if(es === 2) {

        location.href = "#regolaEsempio2"
 
        slideSegniDiff = slideSegniDiff + n;
        let passaggio1 = document.getElementsByClassName("passaggio")[2];
        let passaggio2 = document.getElementsByClassName("passaggio")[3];
        let prev = document.getElementsByClassName("prev")[1];
        let next = document.getElementsByClassName("next")[1];
        let again = document.getElementsByClassName("again")[1];
        let esempio = document.getElementsByClassName("esempio")[1];

        if(slideSegniDiff === 0) {
            passaggio1.style.color = "black";
            prev.disabled = true;
            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} =  
                \\)`
            }
        }

        if(slideSegniDiff === 1) {
            passaggio1.style.color = "red";
            prev.disabled = false;
            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} =  
                \\)`
            }
        }

        if(slideSegniDiff === 2) {
            
            passaggio1.style.color = "black";
    
            if(c >= d) {
                esempio.innerHTML = 
                `\\( \\color{red}{${signC}}\\color{black}{} \\LARGE{${c}}\\)
                \\(
                    {${signD} ${d}} = 
                \\)`;
            } else {
                esempio.innerHTML = 
                `\\( ${signC} ${c} \\color{red}{${signD}} \\)
                \\(
                    \\LARGE{${d}} = 
                \\)`;
            }
            
        }

        if(slideSegniDiff === 3) {

            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  \\color{red}{${signRis}}
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} = \\color{red}{${signRis}}
                \\)`
            }

        }

        if(slideSegniDiff === 4) {

            passaggio2.style.color = "red";

            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  ${signRis}
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} = ${signRis}
                \\)`
            }

        }

        if(slideSegniDiff === 5) {

            passaggio2.style.color = "black";

            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    \\underset{\\color{gray}{${Math.max(c, d)} - ${Math.min(c,d)}}}{\\color{gray}{\\underbrace{\\color{black}{${c} ${signD} ${d}}}}} =  ${signRis}
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    \\underset{\\color{gray}{${Math.max(c, d)} - ${Math.min(c,d)}}}{\\underbrace{${signC} ${c} ${signD} ${d}}} = ${signRis}
                \\)`
            }

        }

        if(slideSegniDiff === 6) {

            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  ${signRis} \\color{red}{${ris}}
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} = ${signRis} \\color{red}{${ris}}
                \\)`
            }

        }

        if(slideSegniDiff === 7) {

            if(signC === "+") {
                esempio.innerHTML = 
                `\\(
                    ${c} ${signD} ${d} =  ${signRis} ${ris}
                \\)`
            } else {
                esempio.innerHTML = 
                `\\(
                    ${signC} ${c} ${signD} ${d} = ${signRis} ${ris}
                \\)`
            }

            prev.style.display = "none";
            next.style.display = "none";
            again.style.display = "block";
        }

        MathJax.typesetClear([document.getElementsByClassName("esempio")[1]]);
        MathJax.typesetPromise([document.getElementsByClassName("esempio")[1]]).then(() => {});

    }
}

function nuovoEsempio(n) {

    if(n === 1) {
        
        slideAddizione = 0; 

        let sign = ["+", "-"];
        signA = sign[Math.floor(Math.random()*2)];
        a = Math.floor(Math.random()*50 + 1);

        signB = signA;
        b = Math.floor(Math.random()*50 + 1);

        signR = signA;
        r = Math.floor(a+b);

        document.getElementsByClassName("prev")[0].style.display = "block";
        document.getElementsByClassName("next")[0].style.display = "block";
        document.getElementsByClassName("again")[0].style.display = "none";
        document.getElementsByClassName("passaggio")[0].style.color = "black";
        document.getElementsByClassName("prev")[0].disabled = true;
        
        if(signA === "+") {
            document.getElementsByClassName("esempio")[0].innerHTML  = 
            `\\(
                ${a}${signB}${b} =
            \\)`;
        } else {
            document.getElementsByClassName("esempio")[0].innerHTML  = 
            `\\(
                ${signA}${a}${signB}${b} =
            \\)`;
        }

        MathJax.typesetClear([document.getElementsByClassName("esempio")[0]]);
        MathJax.typesetPromise([document.getElementsByClassName("esempio")[0]]).then(() => {});
    }

    if(n === 2) {
        slideSegniDiff = 0; 

        let sign = ["+", "-"];
        signC = sign[Math.floor(Math.random()*2)];
        c = Math.floor(Math.random()*50 + 1);

        if(signC === "+") {
            signD = "-";
        } else {
            signD = "+";
        }

        d = Math.floor(Math.random()*50 + 1);

        if(c >= d) {
            signRis = signC;
        } else {
            signRis = signD;
        }
        ris = Math.max(c,d) - Math.min(c,d);

        document.getElementsByClassName("prev")[1].style.display = "block";
        document.getElementsByClassName("next")[1].style.display = "block";
        document.getElementsByClassName("again")[1].style.display = "none";
        document.getElementsByClassName("passaggio")[1].style.color = "black";
        document.getElementsByClassName("prev")[1].disabled = true;
        
        if(signC === "+") {
            document.getElementsByClassName("esempio")[1].innerHTML = 
            `\\(
                ${c} ${signD} ${d} =  
            \\)`
        } else {
            document.getElementsByClassName("esempio")[1].innerHTML = 
            `\\(
                ${signC} ${c} ${signD} ${d} =  
            \\)`
        }

        MathJax.typesetClear([document.getElementsByClassName("esempio")[1]]);
        MathJax.typesetPromise([document.getElementsByClassName("esempio")[1]]).then(() => {});
    }

}

function segnoModulo() {

    let sign = ["+", "-", ""]
    let a = Math.floor(Math.random()*90 + 1);
    let signA = sign[Math.floor(Math.random()*3)];

    let numero = document.getElementById("numero");
    numero.innerHTML= `\\( \\color{red}{${signA}}\\color{blue}{${a}} \\)`;

    if(signA === "") {
        signA = "+";
    }

    let segno = document.getElementById("segno")
    segno.innerHTML = `\\( \\color{red}{${signA}} \\)`;
    
    modulo = document.getElementById("modulo");
    modulo.innerHTML = `\\( \\color{blue}{${a}} \\)`;

    console.log("aaa")
    MathJax.typesetClear([numero, segno, modulo]);
    MathJax.typesetPromise([numero, segno, modulo]).then(() => {});

}

let sign1, sign1_, f1, sign2, sign2_, f2, signProduct_, product;

function generaEsempioProdotto() {
    sign = ["+", "-"];

    sign1 = sign[Math.floor(Math.random()*2)];
    if(sign1 === "+") {
        sign1_ = "\\color{red}{+}\\color{black}{}"
    } else {
        sign1_ = "\\color{blue}{-}\\color{black}{}"
    }
    
    sign2 = sign[Math.floor(Math.random()*2)];
    if(sign2 === "+") {
        sign2_ = "\\color{red}{+}\\color{black}{}"
    } else {
        sign2_ = "\\color{blue}{-}\\color{black}{}"
    }

    f1 = Math.floor(Math.random()*20 + 1);
    f2 = Math.floor(Math.random()*10 + 1);

    console.log(`${sign1} ${sign1_} ${f1} ${sign2} ${sign2_} ${f2} ${signProduct_} ${product}`)

    if(sign1 === sign2) {
        signProduct_ = "\\color{red}{+}\\color{black}{}";
    } else {
        signProduct_ = "\\color{blue}{-}\\color{black}{}";
    }

    product = Math.floor(f1*f2)

    if(sign1 === "+") {
        if(sign2 === "+") {
            document.getElementById("esempioProdotto").innerHTML = 
            `\\[
                ${f1} \\cdot ${f2} = ${product}
            \\]`;  
        } else {
            document.getElementById("esempioProdotto").innerHTML = 
            `\\[
                ${f1} \\cdot \\left(${sign2_}${f2}\\right) =  ${signProduct_}${product}
            \\]`;
        }
    } else {
        if(sign2 === "+") {
            document.getElementById("esempioProdotto").innerHTML = 
            `\\[
                ${sign1_}${f1} \\cdot ${f2} = ${signProduct_}${product}
            \\]`
        } else {
            document.getElementById("esempioProdotto").innerHTML = 
            `\\[
                ${sign1_}${f1} \\cdot \\left(${sign2_}${f2}\\right) = ${product}
            \\]` 
        }
        
    }

    MathJax.typesetClear([document.getElementById("esempioProdotto")]);
    MathJax.typesetPromise([document.getElementById("esempioProdotto")]).then(() => {});
}



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