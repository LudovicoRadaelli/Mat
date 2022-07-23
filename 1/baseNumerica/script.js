let totale = 0;

let banconotaObj = [];
for(let j = 0; j <5; j++) {    
    banconotaObj[j] = [];
    for(let i = 0; i < 16; i++) {        
        banconotaObj[j][i] = {
            on: false
        }
    }
}

generaBanconote();
 
function generaBanconote() {
    totale = 0;
    let base = document.getElementById("listaBasi").value;
    document.getElementById("totale").innerHTML = `<b>0€</b>  \\(\\longleftrightarrow\\) (0)<sub>${base}</sub> `;

    for(let j = 0; j < 5; j++) {
        
        let valore = Math.pow(base,j);
        document.getElementsByClassName("pow")[j].innerHTML = ``;
        document.getElementsByClassName("powSelected")[j].innerHTML = `0`
        
        for(let i = 0; i < base - 1; i++) {
           
            banconotaObj[j][i].on = false;

            document.getElementsByClassName("pow")[j].innerHTML +=
            `<div id="pow${j}${i}" onclick="selected(${j},${i})">${valore}€</div>`;
           
            let banconota = document.getElementById(`pow${j}${i}`);
            banconota.style.width = "100%";
            banconota.style.textAlign = "center";
            banconota.style.border = "0.01rem dashed black"
            banconota.style.backgroundColor = "rgba(0,0,255,0.1)";
            banconota.style.marginBottom = "1rem";
        }
    }
    MathJax.typesetClear([document.getElementById("totale")]);
    MathJax.typesetPromise([document.getElementById("totale")]).then(() => {});
}

function selected(j,i) {
    let banconota = document.getElementById(`pow${j}${i}`);
    let base = document.getElementById("listaBasi").value;
    
    if(!banconotaObj[j][i].on) {
        banconota.style.backgroundColor = "rgba(0,0,255,0.7)";
        banconota.style.color = "white";
        banconota.style.borderStyle = "solid";
        document.getElementsByClassName("powSelected")[j].innerHTML = parseInt(document.getElementsByClassName("powSelected")[j].innerHTML) + 1; 
        totale += Math.pow(document.getElementById("listaBasi").value, j);
    } else {    
        banconota.style.backgroundColor = "rgba(0,0,255,0.1)";
        banconota.style.color = "black";
        banconota.style.borderStyle = "dashed";
        document.getElementsByClassName("powSelected")[j].innerHTML = parseInt(document.getElementsByClassName("powSelected")[j].innerHTML) - 1;
        totale -= Math.pow(base, j);
    }
    

    let cifra = [];
    for(let k = 0; k < 5; k++) {
        cifra[k] = parseInt(document.getElementsByClassName("powSelected")[k].innerHTML);
    }

    console.log(`prima del for - cifra: ${cifra}, typeof cifra[0]: ${typeof cifra[0]}`);
    
    for(let k = 0; k < 5; k++) {
        if(cifra[4 - k] == 0) {
            cifra.pop();
            console.log(`cifra: ${cifra}, typeof cifra[0]: ${typeof cifra[0]}`);
        } else {
            break;
        }
    }

    console.log(`dopo il for - cifra: ${cifra}`);


    let cifraStr = "";
    for(let k = 0; k < cifra.length; k++) {
        cifraStr += `${cifra[cifra.length - k - 1]}`
    }
    if(cifraStr === "") {
        cifraStr = 0;
    }
    
    console.log(`cifraStr: ${cifraStr}`);

    document.getElementById("totale").innerHTML = `<b>${totale}€</b>  \\(\\longleftrightarrow\\) (${cifraStr})<sub>${base}</sub> `;
    MathJax.typesetClear([document.getElementById("totale")]);
    MathJax.typesetPromise([document.getElementById("totale")]).then(() => {});
    banconotaObj[j][i].on = !banconotaObj[j][i].on;

}

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */