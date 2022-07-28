let esempio; 
let signList = ["+", "-"];

function generaEsempio(n) {
    if(n === 1) {

        //Gli esempi generati sono tali che il fattore comune abbiamo al più la x, non altre lettere

        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio1-title`

        esempio = document.getElementById("esempio"+n);
        
        //genero il monomio fattore comune
        let commonFactor = new Monomial(0, rndInt(1,5), 1, [0,0,0,rndInt(1,3), 0, 0]);
        
        //definisco un polinomio tale che 
        // * i suoi coefficienti siano coprimi
        // * ci sia almeno un monomio senza x ed uno senza y
        let polyArray = [];

        let polyLength = rndInt(2, 4);
        for(let i = 0; i < polyLength; i++) {
            let monomial = new Monomial(rndInt(0,1), rndInt(1,15), 1, [0, 0, 0, rndInt(1,4), rndInt(1,4), 0]);
            polyArray.push(monomial);
        }


        let polyInParenthesis = new Polynomial(polyArray);
        for(let j = 0; j < polyInParenthesis.term.length; j++) {
            console.log(`termine ${j}-esimo: ${polyInParenthesis.term[j].display()}`)
        }
        for(let i = 1; i < polyArray.length; i++) {
            for(let j = 0; j < i; j++) {
                //controllo che i coefficienti siano coprimi; in caso contrario li modifico
                let gcdCoeff = gcd(polyInParenthesis.term[i].num, polyInParenthesis.term[j].num);
                if(gcdCoeff !== 1) {
                    Object.defineProperty(polyInParenthesis.term[i], "num" , {value:polyInParenthesis.term[i].num/gcdCoeff});
                }
            }
        }

        //mi assicuro che almeno un termine sia senza x
        Object.defineProperty(polyInParenthesis.term[rndInt(0,polyLength-1)], "literal" , {value: [0, 0, 0, 0, rndInt(1, 4),  0]});
        
        //mi assicuro che almeno un termine sia senza y
        let indexInquired = rndInt(0,polyLength - 1); 
        console.log(`indexInquired: ${indexInquired}`)
        while(polyInParenthesis.term[indexInquired].literal[3] === 0) {
            indexInquired = rndInt(0,polyLength - 1);    
        }
        Object.defineProperty(polyInParenthesis.term[indexInquired], "literal" , {value: [0, 0, 0, rndInt(1, 4), 0, 0]});


        //definisco il polinomio da scomporre a partire dal fattore comune e  dal polinomio in parentesi
        let toBeFactorizedArray = [];
        for(let i = 0; i < polyArray.length; i++) {
            toBeFactorizedArray.push(product(polyInParenthesis.term[i], commonFactor));
        }

        let toBeFactorized = new Polynomial(toBeFactorizedArray);


        //compongo il testo dell'esercizio
        esempio.innerHTML = ``

        esempio.innerHTML = 
        `<p>
            Scomponiamo il polinomio 
            \\\[${toBeFactorized.display()}\\\]
        </p>
        <p>
            <b>Troviamo il fattore comune</b>
        </p>
        <br>
        <p>
            &bullet; Il più grande numero che divide i coefficienti del polinomio è \\(${commonFactor.num}\\).
        </p>
        <br>
        <p>
            &bullet;  La \\(x\\) è presente in tutti i monomi e l'esponente più piccolo con cui 
            compare è \\(${commonFactor.literal[3]}\\).
        </p>
        <br>
        <p>
            Di conseguenza il fattore comune è \\(${commonFactor.display()}\\)
        </p>
        <br>
        <p class="grayBackground">
            Di conseguenza possiamo scomporre il polinomio come segue:
            \\\[
                \\begin{align*}
                & ${toBeFactorized.display()} =
                \\\\\\\\
                = \\,\\,&  ${commonFactor.display()} \\cdot \\left(${polyInParenthesis.display()}\\right)
                \\end{align*}
            \\\]
        </p>
        <p>
            
        </p>
        <br>
        <p>
            <b>Come abbiamo trovato i termini in parentesi?</b>
        </p>
        <br>
        `

        for(let i = 0; i < polyLength; i++) {
            esempio.innerHTML += `
            <p>
                \\( 
                    ${polyInParenthesis.term[i].displayWithSign()}
                \\) è il monomio che moltiplicato per \\(${commonFactor.display()}\\) dà come risultato \\(${toBeFactorized.term[i].displayWithSign()} \\)
            </p>
            <br>
            `
        }

    }

    if(n === 2) {

        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio2-title`

        esempio = document.getElementById("esempio"+n);
        
        //decido se evidenziare la coppia del primo e secondo termine oppure quella del primo e terzo
        let coin = rndInt(0,1);
        

        if(coin === 0) {
            
            console.log("coin: 0");

            //genero i monomi che compongono primo binomio in parentesi
            let monomial1 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 1, 0, 0]);
            let monomial2 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 0, 0, 0]);

            //controllo che i coefficienti del primo polinomio siano coprimi; in caso contrario li modifico
            let gcdCoeff = gcd(monomial1.num, monomial2.num);
            if(gcdCoeff !== 1) {
                Object.defineProperty(monomial1, "num" , {value:monomial1.num/gcdCoeff});
                Object.defineProperty(monomial2, "num" , {value:monomial2.num/gcdCoeff});
            }

            //controllo che i segni del primo polinomio non siano entrambi -
            if(monomial1.sign === 1 && monomial2.sign === 1) {
                let index = rndInt(0, 1);
                index = 1;
                if(index) {
                    Object.defineProperty(monomial2, "sign" , {value:0});
                } else {
                    Object.defineProperty(monomial1, "sign" , {value:0});    
                }
            }

            let poly1 = new Polynomial([monomial1, monomial2]);

            console.log(` 
            poly1: ${poly1.display()}`);

            //genero i monomi che compongono primo binomio in parentesi
            let monomial3 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 2, 0, 0]);
            let monomial4 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 0, 0, 0]);

            //controllo che i coefficienti del primo polinomio siano coprimi; in caso contrario li modifico
            gcdCoeff = gcd(monomial3.num, monomial4.num);
            if(gcdCoeff !== 1) {
                Object.defineProperty(monomial3, "num" , {value:monomial3.num/gcdCoeff});
                Object.defineProperty(monomial4, "num" , {value:monomial4.num/gcdCoeff});
            }

            //controllo che i segni del secondo polinomio non siano entrambi -
            if(monomial3.sign === 1 && monomial4.sign === 1) {
                let index = rndInt(0, 1);
                let monomialArray = [monomial3, monomial4];
                let monomial = monomialArray[index]
                Object.defineProperty(monomial, "sign" , {value: 0});
            }

            let poly2 = new Polynomial([monomial3, monomial4]);

            console.log(` 
            poly2: ${poly2.display()}`);

            //definisco il polinomio in rosso
            let polyProduct1Array = [];

            polyProduct1Array[0] = product(poly1.term[0], poly2.term[0])
            polyProduct1Array[1] = product(poly1.term[1], poly2.term[0])

            let polyProduct1 = new Polynomial(polyProduct1Array)

            //definisco il polinomio in blu
            let polyProduct2Array = [];

            polyProduct2Array[0] = product(poly1.term[0], poly2.term[1])
            polyProduct2Array[1] = product(poly1.term[1], poly2.term[1])
            
            let polyProduct2 = new Polynomial(polyProduct2Array)

            console.log(`
            polyProduct1: ${polyProduct1.display()},
            polyProduct2: ${polyProduct2.display()}
            `)

            //compongo il testo dell'esercizio
            esempio.innerHTML = 
            `<p>
                Scomponiamo il polinomio 
                \\[${polyProduct1.display()}${polyProduct2.displayWithSign()}\\]
            </p>
            <p>
                Osserviamo che non è possibile scomporre a fattore comune (provare per credere!).
            </p>
            
            <br>

            <p>
                <b>Evidenziamo coppie di termini con fattori in comune</b>
            </p>

            <p>
                \\[\\color{red}{${polyProduct1.display()}} \\,\\color{blue}{${polyProduct2.displayWithSign()}}\\]
            </p>
            <p>
                Scomponiamo a fattor comune entrambe le coppie:
            </p>
            <p>
                \\[
                    \\underset{\\color{red}{${polyProduct1.display()}}}
                    {\\color{gray}{\\underbrace{\\color{black}{}\\boldsymbol{${poly2.term[0].display()}} \\cdot \\color{green}{\\left(${poly1.display()}\\right)}}}} 
                    \\,\\,\\,
                    \\underset{\\color{blue}{${polyProduct2.displayWithSign()}}}
                    {\\color{gray}{\\underbrace{\\color{black}{\\boldsymbol{${poly2.term[1].displayWithSign()}} \\cdot \\color{green}{\\left(${poly1.display()}\\right)}}}}} 
                \\]
            </p>
            <p>
                Raccogliamo a fattor comune la parentesi <span style="color: green"><b>verde</b></span>:
            </p>
            <p>
                \\[
                    \\color{green}{\\left(${poly1.display()}\\right)} \\color{black}{} \\cdot \\left(\\boldsymbol{${poly2.display()}}\\right)
                \\]
            </p>

            <br>
            <p class="grayBackground">
                Di conseguenza possiamo scomporre il polinomio come segue:
                \\[
                    \\begin{align*}
                    & ${polyProduct1.display()}${polyProduct2.displayWithSign()} =
                    \\\\\\\\
                    = \\,\\,&  \\left(${poly1.display()}\\right) \\color{black}{} \\cdot \\left(${poly2.display()}\\right)
                    \\end{align*}
                \\]
            </p>            
            <br>`
        } else {
            console.log("coin: 1");
            
            //genero i monomi che compongono primo binomio in parentesi
            let monomial1 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 1, 0, 0]);
            let monomial2 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 0, 0, 0]);

            console.log(`
            monomial1 before changing: ${monomial1.display()},
            monomial2 before changing: ${monomial2.display()}`)

            //controllo che i coefficienti del primo polinomio siano coprimi; in caso contrario li modifico
            let gcdCoeff = gcd(monomial1.num, monomial2.num);
            if(gcdCoeff !== 1) {
                Object.defineProperty(monomial1, "num" , {value:monomial1.num/gcdCoeff});
                Object.defineProperty(monomial2, "num" , {value:monomial2.num/gcdCoeff});
            }

            //controllo che i segni del primo polinomio non siano entrambi -
            if(monomial1.sign === 1 && monomial2.sign === 1) {
                let index = rndInt(0, 1);
                index = 1;
                if(index) {
                    Object.defineProperty(monomial2, "sign" , {value:0});
                } else {
                    Object.defineProperty(monomial1, "sign" , {value:0});    
                }
            }

            let poly1 = new Polynomial([monomial1, monomial2]);

            //genero i monomi che compongono primo binomio in parentesi
            let monomial3 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 2, 0, 0]);
            let monomial4 = new Monomial(rndInt(0,1), rndInt(1,5), 1, [0, 0, 0, 0, 0, 0]);

            //controllo che i coefficienti del primo polinomio siano coprimi; in caso contrario li modifico
            gcdCoeff = gcd(monomial3.num, monomial4.num);
            if(gcdCoeff !== 1) {
                Object.defineProperty(monomial3, "num" , {value:monomial3.num/gcdCoeff});
                Object.defineProperty(monomial4, "num" , {value:monomial4.num/gcdCoeff});
            }

            //controllo che i segni del secondo polinomio non siano entrambi -
            if(monomial3.sign === 1 && monomial4.sign === 1) {
                let index = rndInt(0, 1);
                let monomialArray = [monomial3, monomial4];
                let monomial = monomialArray[index]
                Object.defineProperty(monomial, "sign" , {value: 0});
            }

            let poly2 = new Polynomial([monomial3, monomial4]);

            console.log(` 
            poly2: ${poly2.display()}`);

            //definisco il polinomio in rosso
            let polyProduct1Array = [];

            polyProduct1Array[0] = product(poly1.term[0], poly2.term[0])
            polyProduct1Array[1] = product(poly1.term[0], poly2.term[1])

            let polyProduct1 = new Polynomial(polyProduct1Array)

            //definisco il polinomio in blu
            let polyProduct2Array = [];

            polyProduct2Array[0] = product(poly1.term[1], poly2.term[0])
            polyProduct2Array[1] = product(poly1.term[1], poly2.term[1])

            let polyProduct2 = new Polynomial(polyProduct2Array)

            console.log(`
            polyProduct1: ${polyProduct1.display()},
            polyProduct2: ${polyProduct2.display()}
            `)

            //compongo il testo dell'esercizio
            esempio.innerHTML = 
            `<p>
                Scomponiamo il polinomio 
                \\[${polyProduct1.term[0].display()}${polyProduct2.term[0].displayWithSign()}${polyProduct1.term[1].displayWithSign()}${polyProduct2.term[1].displayWithSign()}\\]
            </p>
            <p>
                Osserviamo che non è possibile scomporre a fattore comune (provare per credere!).
            </p>

            <br>

            <p>
                <b>Evidenziamo coppie di termini con fattori in comune</b>
            </p>

            <p>
            \\[\\color{red}{${polyProduct1.term[0].display()}} \\color{blue}{${polyProduct2.term[0].displayWithSign()}} \\color{red}{${polyProduct1.term[1].displayWithSign()}} \\color{blue}{${polyProduct2.term[1].displayWithSign()}}\\]
            </p>
            <p>
                Scomponiamo a fattor comune entrambe le coppie:
            </p>
            <p>
                \\[
                    \\underset{\\color{red}{${polyProduct1.display()}}}
                    {\\color{gray}{\\underbrace{\\color{black}{}\\boldsymbol{${poly1.term[0].display()}} \\cdot \\color{green}{\\left(${poly2.display()}\\right)}}}} 
                    \\,\\,\\,
                    \\underset{\\color{blue}{${polyProduct2.displayWithSign()}}}
                    {\\color{gray}{\\underbrace{\\color{black}{\\boldsymbol{${poly1.term[1].displayWithSign()}} \\cdot \\color{green}{\\left(${poly2.display()}\\right)}}}}} 
                \\]
            </p>
            <p>
                Raccogliamo a fattor comune la parentesi <span style="color: green"><b>verde</b></span>:
            </p>
            <p>
                \\[
                    \\color{green}{\\left(${poly2.display()}\\right)} \\color{black}{} \\cdot \\left(\\boldsymbol{${poly1.display()}}\\right)
                \\]
            </p>

            <br>
            <p class="grayBackground">
                Di conseguenza possiamo scomporre il polinomio come segue:
                \\[
                    \\begin{align*}
                    & ${polyProduct1.term[0].display()}${polyProduct2.term[0].displayWithSign()}${polyProduct1.term[1].displayWithSign()}${polyProduct2.term[1].displayWithSign()} =
                    \\\\\\\\
                    = \\,\\,&  \\left(${poly2.display()}\\right)  \\cdot \\left(${poly1.display()}\\right)
                    \\end{align*}
                \\]
            </p>            
            <br>`
        }

    }

    if(n === 3) {
        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio3-title`

        esempio = document.getElementById("esempio"+n);
    
        let a = [];
        
        //attraverso questa randomizazione mi assicuro che il termine con la x non sia 
        //sempre nella stessa posizione del binomio
        let rndIndex = rndInt(0, 1);


        a[rndIndex] = randomMonomial();
        Object.defineProperty(a[rndIndex], "den" , {value: 1});
        Object.defineProperty(a[rndIndex], "literal" , {value: [0,0,0,rndInt(1, 5),0,0]});

        a[(rndIndex + 1)%2] = randomMonomial();
        Object.defineProperty(a[(rndIndex + 1)%2], "den" , {value: 1});
        Object.defineProperty(a[(rndIndex + 1)%2], "literal" , {value: [0,0,0,0,0,0]});


        let a0Squared = product(a[0], a[0]);
        let a1Squared = product(a[1], a[1]);
        let doublePr = sum(product(a[0], a[1]), product(a[0], a[1]));

        let sign = ""
        if(doublePr.sign === 0) {
            sign = "+"
        } else {
            sign = "-"
        }

        Object.defineProperty(a[0], "sign" , {value: 0});
        Object.defineProperty(a[1], "sign" , {value: 0});

        console.log(`
        a[0]: ${a[0].display()}
        sign: ${sign}
        a[1]: ${a[1].display()}
        2a[0]a[1]: ${doublePr.display()}
        a[0]^2: ${a0Squared.display()}
        a[1]^2: ${a1Squared.display()}`)


        esempio.innerHTML = 
        `<p>
            Scomponiamo il polinomio 
            \\[
                ${a0Squared.display()} ${doublePr.displayWithSign()} ${a1Squared.displayWithSign()}
            \\]
        </p>

        <br id="squareBinomialSlide-container" >
        <div style="border: 0.01rem solid lightgray; padding: 1rem; min-height: 60vh;">
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()}\\\\
                            &  & \\\\
                            &  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">
                    Prima di tutto verifichiamo che il polinomio contenga due quadrati
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\begin{array}{ccc}
                            \\color{red}{${a0Squared.display()}} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()}\\\\
                            &  & \\\\
                            &  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">
                    \\(${a0Squared.display()}\\) è il quadrato di \\(${a[0].display()}\\), infatti 
                    \\[ 
                        \\left(${a[0].display()}\\right)^2 = ${a0Squared.display()}
                    \\]
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()}\\\\
                            \\downarrow&  & \\\\
                            \\color{red}{${a[0].display()}}&  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">
                    
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & \\color{red}{${a1Squared.displayWithSign()}}\\\\
                            \\downarrow &  & \\\\
                            ${a[0].display()} &  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    \\(${a1Squared.display()}\\) è il quadrato di \\(${a[1].display()}\\), infatti 
                    \\[ 
                        \\left(${a[1].display()}\\right)^2 = ${a1Squared.display()}
                    \\]
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()}\\\\
                            \\downarrow &  &\\downarrow\\\\
                            ${a[0].display()} &  & \\color{red}{${a[1].display()}}
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.redSign()} & ${a1Squared.displayWithSign()}\\\\
                            \\downarrow &  & \\downarrow\\\\
                            ${a[0].display()} &  & ${a[1].display()}
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    Il segno del termine rimanente è \\(${sign}\\)
                    \\[ 
                        ${doublePr.displayWithSign()}
                    \\]
                </p>
            </div>

            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()}\\\\
                            \\downarrow &  &\\downarrow\\\\
                            ${a[0].display()} & \\color{red}{${sign}}  & ${a[1].display()}
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()} \\\\
                            \\downarrow &  &\\downarrow\\\\
                            \\Big(${a[0].display()} & ${sign} & ${a[1].display()}\\Big)^2
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    
                </p>
            </div>
            <div class="squareBinomialSlide">
                <p id="schemeSquareBinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        \\begin{array}{ccc}
                            ${a0Squared.display()} & ${doublePr.displayWithSign()} & ${a1Squared.displayWithSign()} \\\\
                            \\downarrow &  &\\downarrow\\\\
                            \\Big(${a[0].display()} & ${sign} & ${a[1].display()}\\Big)^2
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSquareBinomial" style="color: gray; text-align:center; min-height: 5rem;">  
                    ⚠️⚠️⚠️⚠️
                    <br>
                    <br>
                    Controlliamo che il termine 
                    \\[
                        ${doublePr.displayWithSign()}
                    \\] 
                    sia il doppio prodotto tra \\(${a[0].display()}\\) e \\(${sign}${a[1].display()}\\):
                </p>
                <br>
                <p style="color: gray; text-align:center;">
                    \\[
                        2 \\cdot \\left(${a[0].display()}\\right) \\left(${sign}${a[1].display()}\\right) = ${doublePr.displayWithSign()}
                    \\]
                </p>
            </div>


            <br>
            <button id="slideSquareBinomial-button" onclick="nextSlideSquareBinomial()">Avanti</button>

        </div>

        <br>
        <p id="squareBinomial-conclusion" class="grayBackground">
            Di conseguenza possiamo scomporre il polinomio come segue:
            \\[
                ${a0Squared.display()} ${doublePr.displayWithSign()} ${a1Squared.displayWithSign()} = \\left(${a[0].display()} ${sign} ${a[1].display()}\\right)^2             
            \\]
        </p>            
        <br>
        </div>`

        inizializeSquareBinomial();
    }
        
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function rndInt(min, max) {
    let rnd = min + Math.floor(Math.random()*(max - min +1));
    return rnd;
}


//inizializzo l'indice delle slide sul quadrato di binomio a 0
let currentSlideSquareBinomialIndex = 0;

function inizializeSquareBinomial() {

    currentSlideSquareBinomialIndex = 0

    let slide = document.getElementsByClassName("squareBinomialSlide")

    //TODO questo è un tentativo (fallito miseramente) di rimediare al seguente problema :
    //quando passo alla seconda slide (la 1-esima) il font-size delle formule matematiche cambia per ragioni misteriose
    //Queste 3 linee di codice possono essere omesse, ogni slide ha come attributo style "none"
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.fontSize = "100%";   
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"
}


//funzione per passare alla slide successiva
function nextSlideSquareBinomial() {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#squareBinomialSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("squareBinomialSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSquareBinomialIndex++;

    //se ci sono ancora slide da mostrare passo alla successiva
    if(currentSlideSquareBinomialIndex < slide.length) {
        slide[currentSlideSquareBinomialIndex].style.display = "block";
        slide[currentSlideSquareBinomialIndex].style.fontSize = "1.1rem";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(currentSlideSquareBinomialIndex  === slide.length) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`slideSquareBinomial-button`).style.display = "none";  
        document.location.href=`#squareBinomial-conclusion`      
    }

}

inizializeSquareBinomial()
