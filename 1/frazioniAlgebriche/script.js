let esempio; 

function generaEsempio(n) {
    if(n === 1) {
        esempio = document.getElementById("esempio"+n);
        
        //coefficiente comune
        commonCoeff = Math.floor(Math.random()*13)
        
        //lettera comune
        letterList = [`a`,`b`,`c`,`x`,`y`,`z`,];
        commonLetter = letterList[Math.floor(Math.random()*letterList.length)];
        letterExp = Math.floor(Math.random()*5);

        //termini polinomio in parentesi
        polyList = []

        numOfTerms = Math.floor(Math.random()*4+2);
        for(let i = 0; i < numOfTerms; i++) {

        }



        esempio.innerHTML = 
        `\\[
            
        \\]`;
    }
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}