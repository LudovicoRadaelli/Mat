//tutto il codice di questo file.js è racchiuso da graffe, in maniera da poter usare
//let con block scope
{
    var container1 = document.getElementById("container1");
    var differenzaWrapper = document.getElementById("sommaPerDifferenzaWrapper");
    var buttonContainer = document.getElementById("button-container");

    let p = randomPolynomial(2);

    for(let i = 0; i<2; i++) {
        for(let j = 0; j<6; j++) {
            p.poly[i].literal[j] = 0;
        }
    }

    Object.defineProperty(p.poly[0], "den" , {value: 1});
    Object.defineProperty(p.poly[1], "den" , {value: 1});
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);

    //container.innerHTML += "\\("+p.display()+"\\)";

    let q = randomPolynomial(2);

    var coin = rnd(0,1);

    if(coin === 0) {
        Object.defineProperty(q.poly[0], "sign" , {value: p.poly[0].sign});
        Object.defineProperty(q.poly[0], "num" , {value: p.poly[0].num});
        Object.defineProperty(q.poly[0], "den" , {value: p.poly[0].den});
        Object.defineProperty(q.poly[0], "literal" , {value: p.poly[0].literal});

        if(p.poly[1].sign == 0) {
            Object.defineProperty(q.poly[1], "sign" , {value: 1});
        } else {
            Object.defineProperty(q.poly[1], "sign" , {value: 0});
        }

        Object.defineProperty(q.poly[1], "num" , {value: p.poly[1].num});
        Object.defineProperty(q.poly[1], "den" , {value: p.poly[1].den});
        Object.defineProperty(q.poly[1], "literal" , {value: p.poly[1].literal});
    } else {
        Object.defineProperty(q.poly[1], "sign" , {value: p.poly[1].sign});
        Object.defineProperty(q.poly[1], "num" , {value: p.poly[1].num});
        Object.defineProperty(q.poly[1], "den" , {value: p.poly[1].den});
        Object.defineProperty(q.poly[1], "literal" , {value: p.poly[1].literal});

        if(p.poly[0].sign == 0) {
            Object.defineProperty(q.poly[0], "sign" , {value: 1});
        } else {
            Object.defineProperty(q.poly[0], "sign" , {value: 0});
        }

        Object.defineProperty(q.poly[0], "num" , {value: p.poly[0].num});
        Object.defineProperty(q.poly[0], "den" , {value: p.poly[0].den});
        Object.defineProperty(q.poly[0], "literal" , {value: p.poly[0].literal});
    }

    container1.innerHTML += "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right)\\)";
    
    buttonContainer = document.getElementById("button-container");
    
    buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' disabled>&#8592;</button>";    
    buttonContainer.innerHTML += '<button id="sommaPerDifferenzaNextButton" class ="button" onclick="showStepSumByDifference(0,0,0,1)";>&#8594;</button>';    
    

    var result = [];
    

    function showStepSumByDifference(done,i,j,index) {

        var showFormula = true;

        if(index === 0) {

            let indexB = index + 1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right)\\)";
            
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' disabled>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 1) {

            let indexB = index + 1;
            let indexC = index -1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right)\\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che non cambia segno ed eleviamolo al quadrato</span></p>"
            
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        
        if(index === 2) {

            let indexB = index+1;
            let indexC = index -1;

            if(p.poly[0].sign === q.poly[0].sign) {
                container1.innerHTML = "\\(\\left(\\color{red}{"+p.poly[0].display()+"}\\color{black}{}"+p.poly[1].displayWithSign()+"\\right)\\cdot\\left(\\color{red}{"+q.poly[0].display()+"}\\color{black}{}"+q.poly[1].displayWithSign()+"\\right)\\)";
            } else {
                container1.innerHTML = "\\(\\left("+p.poly[0].display()+"\\color{red}{"+p.poly[1].displayWithSign()+"}\\color{black}{}\\right)\\cdot\\left("+q.poly[0].display()+"\\color{red}{"+q.poly[1].displayWithSign()+"}\\color{black}{}\\right)\\)";
            }
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che non cambia segno ed eleviamolo al quadrato</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 3) {

            let indexB = index + 1;
            let indexC = index -1;
            
            if(p.poly[0].sign === q.poly[0].sign) {
                result[0] = product(p.poly[0],p.poly[0]);   
            } else {
                result[0] = product(p.poly[1],p.poly[1]);
            }

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = \\color{red}{"+result[0].display()+"}\\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che non cambia segno ed eleviamolo al quadrato</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 4) {

            let indexB = index + 1;
            let indexC = index -1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = "+result[0].display()+"\\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Mettiamo il segno meno</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 5) {

            let indexB = index + 1;
            let indexC = index -1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = "+result[0].display()+" - \\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Mettiamo il segno meno</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 6) {

            let indexB = index + 1;
            let indexC = index -1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = "+result[0].display()+" - \\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che cambia segno ed eleviamolo al quadrato</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    
        }

        if(index === 7) {

            let indexB = index +1;
            let indexC = index -1;

            if(p.poly[0].sign === q.poly[0].sign) {
                container1.innerHTML = "\\(\\left("+p.poly[0].display()+"\\color{blue}{"+p.poly[1].displayWithSign()+"}\\color{black}{}\\right)\\cdot\\left("+q.poly[0].display()+"\\color{blue}{"+q.poly[1].displayWithSign()+"}\\right) = "+result[0].display()+" - \\)";
            } else {
                container1.innerHTML = "\\(\\left(\\color{blue}{"+p.poly[0].display()+"}\\color{black}{}"+p.poly[1].displayWithSign()+"\\right)\\cdot\\left(\\color{blue}{"+q.poly[0].display()+"}\\color{black}{}"+q.poly[1].displayWithSign()+"\\right) = "+result[0].display()+" - \\)";
            } 
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che cambia segno ed eleviamolo al quadrato</span></p>"   
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    

        }

        if(index === 8) {

            let indexB = index + 1;
            let indexC = index -1;
            
            if(p.poly[0].sign === q.poly[0].sign) {
                result[1] = product(p.poly[1],p.poly[1]);   
            } else {
                result[1] = product(p.poly[0],p.poly[0]);
            }

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = "+result[0].display()+" - \\color{blue}{"+result[1].display()+"} \\)";
            container1.innerHTML += "<br><br><p class='commento'><span>Prendiamo il monomio che cambia segno ed eleviamolo al quadrato</span></p>"
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexC+")'>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,"+indexB+")'>&#8594;</button>";    

        }

        if(index === 9) {

            let indexB = index + 1;

            container1.innerHTML = "\\(\\left("+p.display()+"\\right)\\cdot\\left("+q.display()+"\\right) = "+result[0].display()+" - "+result[1].display()+" \\)";
            
            //genero nuovi p e q
            p = randomPolynomial(2);
            for(let i = 0; i<2; i++) {
                for(let j = 0; j<6; j++) {
                    p.poly[i].literal[j] = 0;
                }
            }
            p.poly[0].literal[rnd(0,5)] = rnd(0,3);
            p.poly[0].literal[rnd(0,5)] = rnd(0,3);
            p.poly[1].literal[rnd(0,5)] = rnd(0,3);
            p.poly[1].literal[rnd(0,5)] = rnd(0,3);

            q = randomPolynomial(2);

            coin = rnd(0,1);

            if(coin === 0) {
                Object.defineProperty(q.poly[0], "sign" , {value: p.poly[0].sign});
                Object.defineProperty(q.poly[0], "num" , {value: p.poly[0].num});
                Object.defineProperty(q.poly[0], "den" , {value: p.poly[0].den});
                Object.defineProperty(q.poly[0], "literal" , {value: p.poly[0].literal});

                if(p.poly[1].sign == 0) {
                    Object.defineProperty(q.poly[1], "sign" , {value: 1});
                } else {
                    Object.defineProperty(q.poly[1], "sign" , {value: 0});
                }

                Object.defineProperty(q.poly[1], "num" , {value: p.poly[1].num});
                Object.defineProperty(q.poly[1], "den" , {value: p.poly[1].den});
                Object.defineProperty(q.poly[1], "literal" , {value: p.poly[1].literal});
            } else {
                Object.defineProperty(q.poly[1], "sign" , {value: p.poly[1].sign});
                Object.defineProperty(q.poly[1], "num" , {value: p.poly[1].num});
                Object.defineProperty(q.poly[1], "den" , {value: p.poly[1].den});
                Object.defineProperty(q.poly[1], "literal" , {value: p.poly[1].literal});

                if(p.poly[0].sign == 0) {
                    Object.defineProperty(q.poly[0], "sign" , {value: 1});
                } else {
                    Object.defineProperty(q.poly[0], "sign" , {value: 0});
                }

                Object.defineProperty(q.poly[0], "num" , {value: p.poly[0].num});
                Object.defineProperty(q.poly[0], "den" , {value: p.poly[0].den});
                Object.defineProperty(q.poly[0], "literal" , {value: p.poly[0].literal});
            }

            /* document.getElementsByClassName("formula")[0].style. */
            buttonContainer.innerHTML = "<button id='sommaPerDifferenzaPreviousButton' class = 'buttonNP' disabled>&#8592;</button>";    
            buttonContainer.innerHTML += "<button id='sommaPerDifferenzaNextButton' class = 'buttonNP' onclick='showStepSumByDifference(0,0,0,0)'>&#8594;</button>";    

        } 

        

        

        MathJax.typesetClear([container1]);
        MathJax.typesetPromise([container1]).then(() => {});
        

    }

    function align(text) {
        return "\\( \\begin{align*} &\\color{white}{=}\\color{black}{}"+text+" \\\\ \\end{align*} \\)";

    }
}