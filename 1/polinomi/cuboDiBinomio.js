//tutto il codice di questo file.js è racchiuso da graffe, in maniera da poter usare
//let con block scope
{
    var container3 = document.getElementById("container3");
    var button3 = document.getElementById("cuboDiBinomioWrapper");

    let p = randomPolynomial(2);

    for(var i = 0; i<2; i++) {
        for(var j = 0; j<6; j++) {
            p.poly[i].literal[j] = 0;
        }
    }

    Object.defineProperty(p.poly[0], "den" , {value: 1});
    Object.defineProperty(p.poly[1], "den" , {value: 1});
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[0].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);
    p.poly[1].literal[rnd(0,5)] = rnd(0,3);


    container3.innerHTML += "\\[\\left("+p.display()+"\\right)^3 = \\]";
    button3.innerHTML += "<button id='cuboDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
    button3.innerHTML += '<button id="cuboDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,1)";>&#8594;</button>';    

    let mcm;

    let result = [];

    function showStepCuboDiBinomio(done,i,j,index) {

        if(index === 0) {

            let indexB = index + 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{2} = \\]";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='cuboDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
            button3.innerHTML += '<button id="cuboDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,1)";>&#8594;</button>';    
        }

        if(index === 1) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = \\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il primo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 2) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left(\\color{red}{"+p.poly[0].display()+"}\\color{black}{}"+p.poly[1].displayWithSign()+"\\right)^{3} = \\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il primo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 3) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = \\color{red}{\\left("+p.poly[0].display()+"\\right)}\\color{black}{^{3}}\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il primo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 4) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[0] = product(product(p.poly[0],p.poly[0]),p.poly[0]);

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+"\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il primo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 5) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+"\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il secondo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 6) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.poly[0].display()+"\\color{blue}{"+p.poly[1].displayWithSign()+"}\\color{black}{}\\right)^{3} = "+result[0].display()+"\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il secondo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 7) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+"+ \\color{blue}{\\left("+p.poly[1].display()+"\\right)}\\color{black}{^{3}}\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il secondo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }
        
        if(index === 8) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[1] = product(product(p.poly[1],p.poly[1]),p.poly[1]);

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Eleviamo al cubo il secondo monomio<span></span></p>"
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 9) {

            let indexB = index + 1;
            let indexC = index - 1;
            
            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 10) {

            let indexB = index + 1;
            let indexC = index - 1;
            
            container3.innerHTML = "\\[\\left(\\color{red}{"+p.poly[0].display()+"}\\color{blue}{"+p.poly[1].displayWithSign()+"}\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 11) {

            let indexB = index + 1;
            let indexC = index - 1;
            
            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"+3\\cdot\\color{red}{\\left("+p.poly[0].displayWithSign()+"\\right)^{2}}\\color{blue}{\\left("+p.poly[1].displayWithSign()+"\\right)}\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 12) {

            let indexB = index + 1;
            let indexC = index - 1;
            
            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"+3\\cdot\\color{red}{\\left("+product(p.poly[0],(p.poly[0])).displayWithSign()+"\\right)}\\color{blue}{\\left("+p.poly[1].displayWithSign()+"\\right)}\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
            
        }

        if(index === 13) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[2] = product(p.poly[0],product(p.poly[0],p.poly[1]));

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+"+3\\cdot\\left("+result[2].displayWithSign()+"\\right)\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
            
        }

        if(index === 14) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[2] = Object.defineProperty(result[2], "num" , {value: result[2].num*3});

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
            
        }

        if(index === 15) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 16) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left(\\color{red}{"+p.poly[0].display()+"}\\color{blue}{"+p.poly[1].displayWithSign()+"}\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 17) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"+3\\color{red}{\\left("+p.poly[0].display()+"\\right)}\\color{blue}{\\left("+p.poly[1].displayWithSign()+"\\right)}\\color{black}{^{2}}\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }
        
        if(index === 18) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"+3\\color{red}{\\left("+p.poly[0].displayWithSign()+"\\right)}\\color{blue}{\\left("+product(p.poly[1],(p.poly[1])).displayWithSign()+"\\right)}\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 19) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[3] = product(p.poly[0],product(p.poly[1],p.poly[1]));

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"+3\\left("+result[3].displayWithSign()+"\\right)\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 20) {

            let indexB = index + 1;
            let indexC = index - 1;
            result[3] = Object.defineProperty(result[3], "num" , {value: result[3].num*3});

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+result[3].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }

        if(index === 21) {

            let indexB = index + 1;
            let indexC = index - 1;

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+result[3].displayWithSign()+"\\]";
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\color{black}{}^{2}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' disabled>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,0)">&#10227;</button>';    
        }


        


        /*
        if(index === 13) {

            let indexB = index + 1;
            let indexC = index - 1;
            
            result[2] = product(product(p.poly[0],p.poly[0]),p.poly[1]);
            Object.defineProperty(result[2], "num" , {value: 3*result[2].num});

            container3.innerHTML = "\\[\\left("+p.display()+"\\right)^{3} = "+result[0].display()+result[1].displayWithSign()+result[2].displayWithSign()+"\\]"
            container3.innerHTML += "<p class='commento'>Svolgiamo la moltiplicazione</p><br>";
            container3.innerHTML += "<p class='commento'><span>3\\(\\cdot\\color{rgb(255, 110, 110)}{\\left(\\text{primo monomio}\\right)}\\color{black}{}^{2}\\)\\(\\cdot\\color{rgb(117, 117, 255)}{\\left(\\text{secondo monomio}\\right)}\\)</span></p>";
            button3.innerHTML = "<h2 id='cuboDiBinomioTitle' class='title'>Cubo di binomio</h2>"
            button3.innerHTML += "<button id='quadratoDiBinomioPreviousButton' class ='button' onclick='showStepCuboDiBinomio(0,0,0,"+indexC+")'>&#8592;</button>";    
            button3.innerHTML += '<button id="quadratoDiBinomioNextButton" class="button" onclick="showStepCuboDiBinomio(0,0,0,'+indexB+')";>&#8594;</button>';    
        }
        */

        
        

        MathJax.typesetClear([container3]);
        MathJax.typesetPromise([container3]).then(() => {});
    }

    function align(text) {
        return "\\[ \\begin{align*} &\\color{white}{=}\\color{black}{}"+text+" \\\\ \\end{align*} \\]";

    }

}