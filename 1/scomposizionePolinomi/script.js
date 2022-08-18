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
            \\[${toBeFactorized.display()}\\]
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
            \\[
                \\begin{align*}
                & ${toBeFactorized.display()} =
                \\\\\\\\
                = \\,\\,&  ${commonFactor.display()} \\cdot \\left(${polyInParenthesis.display()}\\right)
                \\end{align*}
            \\]
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
        </div>
        <br>
            <div class="button-container" style="width: 100%; margin: auto; display:flex; flex-direction:row; justify-content: space-evenly; align-items: center;">
                <button id="previousSlideSquareBinomial-button" onclick="previousSlideSquareBinomial()">Indietro</button>
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

    if(n === 4) {
        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio4-title`

        esempio = document.getElementById("esempio"+n);
    
        let a = [];
        
        //attraverso questa randomizazione mi assicuro che il termine con la x possa essere sia 
        //il primo che il secondo monomio
        let rndIndex = rndInt(0, 1);


        a[rndIndex] = randomMonomial();
        Object.defineProperty(a[rndIndex], "sign" , {value: 0});
        Object.defineProperty(a[rndIndex], "den" , {value: 1});
        Object.defineProperty(a[rndIndex], "literal" , {value: [0,0,0,rndInt(1,5)*2,0,0]});


        a[(rndIndex + 1)%2] = randomMonomial();
        Object.defineProperty(a[(rndIndex + 1)%2], "sign" , {value: 0});
        Object.defineProperty(a[(rndIndex + 1)%2], "den" , {value: 1});
        Object.defineProperty(a[(rndIndex + 1)%2], "literal" , {value: [0,0,0,0,0,0]});


        //controllo che i coefficienti siano coprimi; in caso contrario li modifico
        let gcdCoeff = gcd(a[0].num, a[1].num);
        if(gcdCoeff !== 1) {
            Object.defineProperty(a[0], "num" , {value: a[0].num/gcdCoeff});
            Object.defineProperty(a[1], "num" , {value: a[1].num/gcdCoeff});
        }


        let aSquared = [];
        
        aSquared[0] = product(a[0], a[0]);
        aSquared[1] = product(a[1], a[1]);

        //attraverso questa randomizazione mi assicuro che il termine quadrato con il - possa essere sia 
        //il primo che il secondo
        rndIndex = rndInt(0, 1);
        Object.defineProperty(aSquared[rndIndex], "sign" , {value: 1});

        console.log(`
        a[0]: ${a[0].display()}
        a[1]: ${a[1].display()}        
        a[0]^2: ${aSquared[0].display()}
        a[1]^2: ${aSquared[1].display()}`)


        esempio.innerHTML = 
        `<div id="esempio4">
            <p>
                Scomponiamo il polinomio 
                \\[
                    ${aSquared[0].display()} ${aSquared[1].displayWithSign()}
                \\]
            </p>
            <br id="sumByDifferenceSlide-container" >
            <div id="sumByDifference-bordo" style="border: 0.01rem solid lightgray; padding: 1rem; min-height: 60vh;">
            </div>
            <br>
            <div class="button-container" style="width: 100%; margin: auto; display:flex; flex-direction:row; justify-content: space-evenly; align-items: center;">
                <button id="previousSlideSumByDifference-button" onclick="previousSlideSumByDifference()">Indietro</button>
                <button id="slideSumByDifference-button" onclick="nextSlideSumByDifference()">Avanti</button>
            </div>
        </div>`;

        console.log(`
        aSquared[1].sign: ${aSquared[1].sign}
        aSquared[1].sign !== "1": ${aSquared[1].sign !== "1"}
        aSquared[1].sign != "1": ${aSquared[1].sign != "1"}`)

        
        if(aSquared[1].sign != `1`) {
            console.log(`
            giro i monomi`)
            
            document.getElementById(`sumByDifference-bordo`).innerHTML += 
            `<div class="sumByDifferenceSlide">
                <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\begin{array}{ccc}
                            \\color{red}{}${aSquared[0].display()} & \\color{blue}{+} & \\color{blue}{}${aSquared[1].display()}\\\\
                            &  & \\\\
                            &  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">
                    Invertiamo i monomi, in modo che il segno \\(-\\) sia in mezzo.
                </p>
            </div>`

            let appoggio = a[0];
            a[0] = a[1];
            a[1] = appoggio;

            appoggio = aSquared[0]

            aSquared[0] = aSquared[1];
            aSquared[1] = appoggio;

            console.log(`
            a[0]: ${a[0].display()}
            a[1]: ${a[1].display()}        
            a[0]^2: ${aSquared[0].display()}
            a[1]^2: ${aSquared[1].display()}`)

            document.getElementById(`sumByDifference-bordo`).innerHTML += 
            `<div class="sumByDifferenceSlide">
                <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\begin{array}{ccc}
                            \\color{blue}{}${aSquared[0].displayWithSign()} &  & \\color{red}{}${aSquared[1].display()}\\\\
                            &  & \\\\
                            &  & 
                        \\end{array}
                    \\]
                </p>
                <br>
                <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">
                    
                </p>
            </div>`

        }


        //a questo punto ridefinisco aSquared[1] con segno +, così da non visualizzarlo 
        //"agganciato" al segno meno
        Object.defineProperty(aSquared[1], "sign" , {value: 0});

        document.getElementById(`sumByDifference-bordo`).innerHTML += 
        `<div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                \\[
                    \\begin{array}{ccc}
                        ${aSquared[0].display()} & - & ${aSquared[1].display()}\\\\
                        &  & \\\\
                        &  & 
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">
                Prima di tutto verifichiamo che il polinomio contenga due quadrati
            </p>
        </div>
        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                \\[
                    \\begin{array}{ccc}
                        \\color{red}{${aSquared[0].display()}} & - & ${aSquared[1].display()}\\\\
                        &  & \\\\
                        &  & 
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">
                \\(${aSquared[0].display()}\\) è il quadrato di \\(${a[0].display()}\\), infatti 
                \\[ 
                    \\left(${a[0].display()}\\right)^2 = ${aSquared[0].display()}
                \\]
            </p>
        </div>
        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                \\[
                    \\begin{array}{ccc}
                        ${aSquared[0].display()} & - & ${aSquared[1].display()}\\\\
                        \\downarrow &  & \\\\
                        \\color{red}{${a[0].display()}}&  & 
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">
                
            </p>
        </div>
        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                \\[
                    \\begin{array}{ccc}
                        ${aSquared[0].display()} & - & \\color{red}{${aSquared[1].display()}}\\\\
                        \\downarrow &  & \\\\
                        ${a[0].display()} &  & 
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">  
                \\(${aSquared[1].display()}\\) è il quadrato di \\(${a[1].display()}\\), infatti 
                \\[ 
                    \\left(${a[1].display()}\\right)^2 = ${aSquared[1].display()}
                \\]
            </p>
        </div>
        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                \\[
                    \\begin{array}{ccc}
                        ${aSquared[0].display()} & - & ${aSquared[1].display()}\\\\
                        \\downarrow &  &\\downarrow\\\\
                        ${a[0].display()} &  & \\color{red}{${a[1].display()}}
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">  
                
            </p>
        </div>
        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                \\[
                    \\begin{array}{ccc}
                        \\color{black}{}${aSquared[0].display()} & \\color{red}{-}\\color{black}{} & ${aSquared[1].display()}\\\\
                        \\downarrow &  &\\downarrow\\\\
                        ${a[0].display()} &  & ${a[1].display()}
                    \\end{array}
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:left; min-height: 5rem;">  
                Il segno del primo termine è \\(+\\) (sottointeso), quello del secondo termine è \\(-\\). 
                <br>
                Il polinomio quindi è il risultato di una somma per differenza.
            </p>
        </div>

        <div class="sumByDifferenceSlide">
            <p id="schemeSumByDifference" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                \\[
                    \\begin{array}{ccc}
                        ${aSquared[0].display()} & - & ${aSquared[1].display()}  = 
                    \\end{array}
                \\]
                \\[
                = \\Big( ${a[0].display()} \\,\\,\\color{blue}{+}\\,\\, \\color{black}{} ${a[1].display()}\\Big) \\cdot  \\Big( ${a[0].display()} \\,\\,\\color{blue}{-}\\,\\, \\color{black}{} ${a[1].display()}\\Big)
                \\]
            </p>
            <br>
            <p id="commentSumByDifference" style="color: gray; text-align:center; min-height: 5rem;">  
                
            </p>
        </div>`

        esempio.innerHTML += 
        `<br>
        <p id="sumByDifference-conclusion" class="grayBackground">
            Di conseguenza possiamo scomporre il polinomio come segue:
            \\[
                ${aSquared[0].display()} - ${aSquared[1].display()} = \\left(${a[0].display()} + ${a[1].display()}\\right) \\cdot \\left(${a[0].display()} - ${a[1].display()}\\right)
            \\]
        </p>            
        <br>`;
        

        inizializeSumByDifference();
    }

    if(n === 5) {
        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio5-title`

        esempio = document.getElementById("esempio"+n);

        //definisco i due numeri in modo da evitare lo 0 ed i casi in cui |n1| = |n2|
        let nVal = rndInt(1, 10);
        
        let n1 = new Monomial(rndInt(0, 1), nVal, 1, [0, 0, 0, 0, 0, 0])
        
        nVal = rndInt(2, 10);
        
        if(Math.abs(nVal) ===  Math.abs(n1.num)) {
            nVal += rndInt(1, 10 - nVal);
        }
        let n2 = new Monomial(rndInt(0, 1), nVal, 1, [0, 0, 0, 0, 0, 0])

        //ordino n1 ed n2 in maniera che il loro modulo sia crescente 
        //(serve per colorare correttamente gli elementi nella tabella e nel testo)
        if(n1.num > n2.num) {
            let appoggio = n1;
            n1 = n2;
            n2 = appoggio;
        }
        
        
        //definisco il prodotto sia come oggetto che come valore numerico
        let p = product(n1, n2);
        let pVal = p.sign === 0 ? p.num : -p.num;

        //definisco la somma sia come oggetto che come valore numerico
        let s = sum(n1, n2);
        let sVal = s.sign === 0 ? s.num : -s.num;

        //è l'array che conterrà l coppie di numeri aventi prodotto pVal
        let couple = [];
        let coupleIndex = 0;

        //è il divisore
        let d = 1;

        //formo l'array couple
        while(d <= p.num) {
            
            if(p.num % d === 0) {

                //Converto il segno nella convenzione della classe Monomial: 
                //-1 --> 1 (-) 
                //1 --> 0 (+)
                let el2Sign = (pVal/d)/Math.abs(pVal/d) === 1 ? 0 : 1

                let el1 = new Monomial(0, d, 1, [0, 0, 0, 0, 0, 0]);
                let el2 = new Monomial(el2Sign, Math.abs(p.num/d), 1, [0, 0, 0, 0, 0, 0]);
                couple[coupleIndex] = [el1, el2];

                //incremento l'indice perché in questa stessa iterazione vado a inserire la coppia opposta a quella
                //appena inserita
                coupleIndex++

                let el3 = new Monomial(1, d, 1, [0, 0, 0, 0, 0, 0]);
                let el4 = new Monomial((el2Sign + 1)%2, Math.abs(p.num/d), 1, [0, 0, 0, 0, 0, 0]);
                couple[coupleIndex] = [el3, el4];

                coupleIndex++
            }

            d++
            
        }

        //L'array couple contiene delle ridondanze. Es: se pValue=6, l'array contiene sia [2 3], che[3, 2]. 
        //Lo dimezzo in modo da eliminarle.
        couple = couple.slice(0, couple.length/2);

    
        //definisco la prima tabella
        let table = ``;

        table = 
        `<tr>
            <th>1°</th>
            <th>2°</th>
            <th>prodotto</th>
            <th>somma</td>
        </tr>`; 

    
        for(let i = 0; i < couple.length; i++) {
        
            table += 
            `<tr>
                <td>\\[${couple[i][0].displayWithSign()}\\]</td>
                <td>\\[${couple[i][1].displayWithSign()}\\]</td>
                <td>\\[\\color{red}{${p.displayWithSign()}}\\]</td>
                <td></td>
            </tr>`
        }
        
        //definisco la seconda tabella in modo che la coppia con somma sVal venga evidenziata
        let tableWithSum = ``;

        tableWithSum = 
        `<tr>
            <th>1°</th>
            <th>2°</th>
            <th>prodotto</th>
            <th>somma</td>
        </tr>`; 

    
        for(let i = 0; i < couple.length; i++) {

            let sumOfCoupleElements = sum(couple[i][0], couple[i][1]).sign === 0 ? sum(couple[i][0], couple[i][1]).num : -sum(couple[i][0], couple[i][1]).num

            if(sumOfCoupleElements === sVal) {
                tableWithSum += 
                `<tr>
                    <td>\\[\\color{darkorange}{${couple[i][0].displayWithSign()}}\\]</td>
                    <td>\\[\\color{violet}{${couple[i][1].displayWithSign()}}\\]</td>
                    <td>\\[\\color{red}{${p.displayWithSign()}}\\]</td>
                    <td>\\[\\color{blue}{${sum(couple[i][0], couple[i][1]).displayWithSign()}}\\]</td>
                </tr>`    
            } else {
                tableWithSum += 
                `<tr>
                    <td>\\[${couple[i][0].displayWithSign()}\\]</td>
                    <td>\\[${couple[i][1].displayWithSign()}\\]</td>
                    <td>\\[\\color{red}{${p.displayWithSign()}}\\]</td>
                    <td>\\[${sum(couple[i][0], couple[i][1]).displayWithSign()}\\]</td>
                </tr>`
            }
        
            
        }

        esempio.innerHTML = 
        `<p>
            Scomponiamo il polinomio 
            \\[
                x^2 ${s.displayWithSign()}x ${p.displayWithSign()}
            \\]
        </p>

        <br id="specialTrinomialSlide-container" >
        <div style="border: 0.01rem solid lightgray; padding: 1rem; min-height: 60vh;">
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        x^2 ${s.displayWithSign()}x ${p.displayWithSign()}
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">
                </p>
            </div>
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\color{green}{1}\\color{black}{}x^{\\color{blue}{2}} ${s.displayWithSign()}x ${p.displayWithSign()}
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">
                    Il polinomio ha grado \\(\\color{blue}{2}\\) ed il coeffieciente della \\(x^2\\) è \\(\\color{green}{1}\\).
                    <br>
                    Potrebbe essere un trinomio speciale.
                </p>
            </div>
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        x^2 \\,\\,\\color{blue}{}{${s.displayWithSign()}}\\color{black}{}x \\,\\,\\color{red}{${p.displayWithSign()}}
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">
                    Cerchiamo due numeri che abbiano
                    <br>
                    <br>
                    \\(\\triangleright\\quad\\) somma: \\(\\color{blue}{${s.displayWithSign()}}\\)
                    <br>
                    <br>
                    \\(\\triangleright\\quad\\) prodotto: \\(\\color{red}{${p.displayWithSign()}}\\)
                </p>
            </div>
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        x^2 \\,\\,\\color{blue}{}{${s.displayWithSign()}}\\color{black}{}x \\,\\,\\color{red}{${p.displayWithSign()}}
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">
                    Elenchiamo tutte le coppie di numeri che hanno prodotto \\(\\color{red}{${p.displayWithSign()}}\\)
                    <br>
                    <br>
                    <table style="width: 100%;">
                        ${table}
                    </table>
                </p>
            </div>
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        x^2 \\,\\,\\color{blue}{}{${s.displayWithSign()}}\\color{black}{}x \\,\\,\\color{red}{${p.displayWithSign()}}
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">
                    Scriviamo le somme:
                    <br>
                    <br>
                    <table style="width: 100%;">
                        ${tableWithSum}
                    </table>
                    <br>
                    I numeri cercati sono \\(\\color{darkorange}{${n1.displayWithSign()}}\\) e \\(\\color{violet}{${n2.displayWithSign()}}\\)
                </p>
            </div>
            <div class="specialTrinomialSlide">
                <p id="schemeSpecialTrinomial" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                                  
                    \\[
                        x^2 ${s.displayWithSign()}x ${p.displayWithSign()} = \\left(x \\color{darkorange}{${n1.displayWithSign()}}\\color{black}{}\\right) \\cdot \\left(x \\color{violet}{${n2.displayWithSign()}}\\color{black}{}\\right)
                    \\]
                </p>
                <br>
                <p id="commentSpecialTrinomial" style="color: gray; text-align:left; min-height: 5rem;">  
                    Usiamo i numeri trovati per scomporre il polinomio.
                </p>
            </div>
        </div>
        <br>
        <div class="button-container" style="width: 100%; margin: auto; display:flex; flex-direction:row; justify-content: space-evenly; align-items: center;">
            <button id="previousSlideSpecialTrinomial-button" onclick="previousSpecialTrinomial()">Indietro</button>
            <button id="slideSpecialTrinomial-button" onclick="nextSlideSpecialTrinomial()">Avanti</button>
        </div>
        
        <br>
        <p id="specialTrinomial-conclusion" class="grayBackground">
            Di conseguenza possiamo scomporre il polinomio come segue:
            \\[
                x^2 ${s.displayWithSign()}x ${p.displayWithSign()} = \\left(x ${n1.displayWithSign()}\\right) \\cdot \\left(x ${n2.displayWithSign()}\\right)
            \\]
        </p>            
        <br>`

        inizializeSpecialTrinomial();
    }

    if(n === 7) {
        //riposiziono la visuale in cima all'esempio
        document.location.href=`#esempio7-title`

        esempio = document.getElementById("esempio"+n);

        //definisco la radice r del polinomio da scomporre
        let r = new Monomial(rndInt(0,1), rndInt(1, 5), 1, [0, 0, 0, 0, 0, 0]);
        
        //definisco binomio di primo grado x - r
        let binArray = [];
        binArray[0] = new Monomial(0, 1, 1, [0, 0, 0, 1, 0, 0]);
        binArray[1] = new Monomial((r.sign + 1)%2, r.num, r.den, r.literal)
        let bin = new Polynomial(binArray);
        
        //definisco il polinomio quoziente distinguendo i due casi in funzione del suo grado
        let poly; 
        let polyArr = []
        
        let quotDeg = rndInt(2, 2);
        let quot;
        let quotArr = [];

        if(quotDeg === 2) {

            let quotArrNum = rndCoprime(2, 10, 2);

            quotArr[0] = new Monomial(rndInt(0,1), quotArrNum[0], 1, [0, 0, 0, 1, 0, 0]);
            quotArr[1] = new Monomial(rndInt(0,1), quotArrNum[1], 1, [0, 0, 0, 0, 0, 0]);

            quot = new Polynomial(quotArr);

            //definisco il polinomio da scomporre
            polyArr[0] = product(quot.term[0], bin.term[0]);
            polyArr[1] = sum(product(quot.term[0], bin.term[1]), product(quot.term[1], bin.term[0]));
            polyArr[2] = product(quot.term[1], bin.term[1]);

            poly = new Polynomial(polyArr);
                
        } else if(quotDeg === 3) {
            //TODO
        }


        //formo l'array dei divisori di poly.term[0] (coefficiente x^2)
        let xSquaredCoeffDiv = [];

        let d = 1;
        while(d <= poly.term[0].num) {
            
            if(poly.term[0].num % d === 0) {

                let dObj = new Monomial(0, d, 1, [0, 0, 0, 0, 0, 0])
                xSquaredCoeffDiv.push(dObj);
                xSquaredCoeffDiv.push(opposite(dObj));

            }

            d++
            
        }

        //formo il testo relativo ai divisori del coefficiente di x^2
        let xSquaredCoeffDivText = ``;
        for(let i = 0; i < xSquaredCoeffDiv.length/2; i++) {
            if(i === xSquaredCoeffDiv.length) {
                xSquaredCoeffDivText += `\\color{darkorange}{${xSquaredCoeffDiv[2*i].display()}}`
            } else {
                xSquaredCoeffDivText += `\\color{darkorange}{${xSquaredCoeffDiv[2*i].display()} \\,\\,\\,\\,}`
            }
        }


        //formo l'array dei divisori di poly.term[2] (termine noto)
        knownTermDiv = [];

        d = 1;
        while(d <= poly.term[2].num) {
            
            if(poly.term[2].num % d === 0) {

                let dObj = new Monomial(0, d, 1, [0, 0, 0, 0, 0, 0])
                knownTermDiv.push(dObj);
                knownTermDiv.push(opposite(dObj));

            }

            d++
            
        }

        //formo il testo relativo ai divisori del termine noto
        let knownTermDivText = ``;
        for(let i = 0; i < knownTermDiv.length/2; i++) {
            if(i === knownTermDiv.length) {
                knownTermDivText += `\\color{violet}{${knownTermDiv[i*2].display()}}`
            } else {
                knownTermDivText += `\\color{violet}{${knownTermDiv[i*2].display()} \\,\\,\\,\\,}`
            }
        }


        //definisco la prima tabella
        let firstTable = [];
        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
            firstTable[i] = [];
            for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                if(i === 0) {
                    if(j === 0) {
                        firstTable[i][j] = ``
                    } else {
                        firstTable[i][j] = knownTermDiv[2*(j-1)].display();
                    }
                } else {
                    if(j === 0) {
                        firstTable[i][j] = xSquaredCoeffDiv[2*(i-1)].display();
                    } else {
                        firstTable[i][j] = [knownTermDiv[2*(j-1)].num, xSquaredCoeffDiv[2*(i-1)].num];
                    }
                }
            }
        }

        //definisco il testo della prima tabella
        let firstTableText = `<div style="overflow-x: auto;"><table style="width: 100%; border: 0;">`

        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
        
            if(i === 0) {
                firstTableText += `<tr style="height: 1rem; max-height: 1rem; min-height: 1rem;">`
                for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                    if(j === 0) {
                        firstTableText += `<td style="width: 1rem; padding-top: 0; padding-bottom: 0; border-left: white; border-top: white;"></td>`
                    } else {
                        firstTableText += `<td style="width: calc((100% -1rem)/2); padding-top: 0; padding-bottom: 0; background-color: rgb(233, 233, 233);">\\[\\color{violet}{${firstTable[i][j]}}\\]</td>`
                    }
                }    
            } else {

                firstTableText += `<tr style="height: 0.45%; max-height: 0.45%;">`
                for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                    if(j === 0) {
                        firstTableText += `<td style="width: 1rem; background-color: rgb(233, 233, 233);">\\[\\boldsymbol{\\color{darkorange}{${firstTable[i][j]}}}\\]</td>`
                    } else {
                        firstTableText += `<td style="width: calc((100% -1rem)/2); aspect-ratio: 1 !important;">\\[\\pm\\dfrac{\\color{violet}{${firstTable[i][j][0]}}}{\\color{darkorange}{${firstTable[i][j][1]}}}\\]</td>`
                    }
                }
    
            }        
        
            firstTableText += `</tr>`
        }
        firstTableText += `</table></div>`


        //definisco la seconda tabella (divisori semplificati)
        let secondTable = [];
        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
            secondTable[i] = [];
            for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                if(i === 0) {
                    if(j === 0) {
                        secondTable[i][j] = ``
                    } else {
                        secondTable[i][j] = knownTermDiv[2*(j-1)];
                    }
                } else {
                    if(j === 0) {
                        secondTable[i][j] = xSquaredCoeffDiv[2*(i-1)];
                    } else {
                        let mon = new Monomial(0, knownTermDiv[2*(j-1)].num, xSquaredCoeffDiv[2*(i-1)].num, [0,0,0,0,0,0])
                        secondTable[i][j] = simplify(mon);
                    }
                }
            }
        }

        //definisco il testo della prima tabella
        let secondTableText = `<div style="overflow-x: auto;"><table style="width: 100%; border: 0;">`

        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
        
            if(i === 0) {
                secondTableText += `<tr style="height: 1rem; max-height: 1rem; min-height: 1rem;">`
                for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                    if(j === 0) {
                        secondTableText += `<td style="width: 1rem; padding-top: 0; padding-bottom: 0; border-left: white; border-top: white;"></td>`
                    } else {
                        secondTableText += `<td style="width: calc((100% -1rem)/2); padding-top: 0; padding-bottom: 0; background-color: rgb(233, 233, 233);">\\[\\color{violet}{${secondTable[i][j].display()}}\\]</td>`
                    }
                }    
            } else {

                secondTableText += `<tr style="height: 0.45%; max-height: 0.45%;">`
                for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {

                    if(j === 0) {
                        secondTableText += `<td style="width: 1rem; background-color: rgb(233, 233, 233);">\\[\\boldsymbol{\\color{darkorange}{${secondTable[i][j].display()}}}\\]</td>`
                    } else {
                        secondTableText += `<td style="width: calc((100% -1rem)/2); aspect-ratio: 1 !important;">\\[\\pm ${secondTable[i][j].display()}\\]</td>`
                    }
                }
    
            }        
        
            secondTableText += `</tr>`
        }
        secondTableText += `</table></div>`


        //a partire dalla seconda tabella creo un array che contiene i numeri per i test *con ridondanze*
        let redundantDivisorList = [];
        for(let i = 1; i < xSquaredCoeffDiv.length/2 + 1; i++) {
            for(let j = 1; j < knownTermDiv.length/2 + 1; j++) {
                redundantDivisorList.push(secondTable[i][j])
            }
        }

        //a partire dall'array ridondante creo un array che contiene i numeri per i test *senza ridondanze*
        let divisorList = [];

        for(let i = 0; i < redundantDivisorList.length; i++) {
            let isRedundant; 
            for(let j = 0; j < divisorList.length; j++) {
                isRedundant = redundantDivisorList[i].num === divisorList[j].num &&
                              redundantDivisorList[i].den === divisorList[j].den;
                if(isRedundant) {
                    break;
                }
            }
            if(!isRedundant) {
                divisorList.push(redundantDivisorList[i])
            }
        }

        //aggiungo all'array gli elementi negativi
        for(let i = divisorList.length-1; i >= 0; i--) {
            divisorList[2*i] = divisorList[i];
            divisorList[2*i + 1] = opposite(divisorList[i]);
        }


        //contiene l'interno di \begin{matrix}{} ... \end{matrix}
        let divisorListMatrix = ``;
        for(let i = 0; i < divisorList.length; i++) {

            if((i + 1) % knownTermDiv.length === 0) {
                if(i === divisorList.length -1) {
                    divisorListMatrix += `${divisorList[i].displayWithSign()}`
                } else {
                    divisorListMatrix += `${divisorList[i].displayWithSign()} \\\\`
                }
            } else {
                divisorListMatrix += `${divisorList[i].displayWithSign() } & `
            }
            
        }

        //creo il contenuto *** dei <div class="ruffiniSlide">***</div> relative ai test
        let testTextArray = [];
        let solutionIndex;

        for(let i = 0; i < divisorList.length; i++) {
            
            let c = divisorList[i].coeff();
            let evaluatedPoly = ``;
            let res = 0;
            
            for(let j = 0; j < poly.term.length; j++) {

                evaluatedPoly += poly.term[j].displayEvalX(c, "gray", "red");
                res += poly.term[j].evalX(c);
            }


            testTextArray[i] = 
            `<p id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">Testiamo \\(\\color{red}{${divisorList[i].displayWithSign()}}\\).
            \\[
                \\begin{align*}
                    & ${poly.term[0].coeff()}\\color{red}{x}\\color{gray}{}^2 ${poly.term[1].displayWithSign().replace("x","\\color{red}{x}")}\\color{gray}{} ${poly.term[2].displayWithSign()} = \\\\
                    & ${evaluatedPoly} = ${res}
                \\end{align*}
            \\]
            `
            if(res === 0) {
                testTextArray[i] += `Il risultato è \\(0\\), ovvero \\(${c}\\) è radice del polinomio che dobbiamo scomporre.
                <br>
                Grazie al teorema di Ruffini, sappiamo che 
            </p>
            <br>
            <p style="text-align: center; color: gray;">
                \\[${poly.display()}\\] è divisibile per \\[x \\color{red}{${opposite(divisorList[i]).displayWithSign()}}\\]
            </p>`
            solutionIndex = i;
            break
            } else {
                testTextArray[i] += `Il risultato non è \\(0\\).</p>`
            }
        }

    

        //creo le slide vere e proprie
        for(let i = 0; i <= solutionIndex; i++) {
            let divisorListMatrixRed = divisorListMatrix.replace(`${divisorList[i].displayWithSign()} `, `\\color{red}{${divisorList[i].displayWithSign()}}\\color{gray}{} `)
            testTextArray[i] = 
            `<div class="ruffiniSlide">
                <div id="schemeRuffini" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    Possibili radici di \\[${poly.display()}\\]
                    <div class="formula">
                        \\[
                            
                            \\begin{array}{}
                                ${divisorListMatrixRed}
                            \\end{array}
                            
                        \\]   
                    </div>
                </div>
                <br>
                ${testTextArray[i]}
                    
            </div>`
        }


        //creo i polinomi di cui avrò bisogno per scrivere la divisione
        // ***questa parte dipende da quotDeg, il grado del polinomio quozionte***
        let leftSideRow = [];
        let rightSideRow = [];

        leftSideRow[0] = poly;
        rightSideRow[0] = bin;
        rightSideRow[1] = quot; 

        leftSideRow[1] = new Polynomial([product(quot.term[0],bin.term[0]), product(quot.term[0],bin.term[1])]);
        leftSideRow[2] = new Polynomial([difference(leftSideRow[0].term[1], leftSideRow[1].term[1]), leftSideRow[0].term[2]]);
        leftSideRow[3] = leftSideRow[2];


        //creo l'esempio
        esempio.innerHTML = 
        `<p>
            Scomponiamo il polinomio 
            \\[
                ${poly.display()}
            \\]
        </p>

        <br id="ruffiniSlide-container" >
        <div id="grayBorder-container" style="border: 0.01rem solid lightgray; padding: 1rem; min-height: 90vh;">

            <div class="ruffiniSlide">
                <p id="schemeRuffini" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        ${poly.display()}
                    \\]
                </p>
                <br>
                <p id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                </p>
            </div>

            <div class="ruffiniSlide">
                <p id="schemeRuffini" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\color{red}{${poly.term[0].coeff()}}\\color{black}{}x^2 ${poly.term[1].displayWithSign()} \\color{blue}{${poly.term[2].displayWithSign()}}
                    \\]
                </p>
                <br>
                <p id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Scriviamo l'elenco tutti i divisori del termine noto...
                    <br>
                    <br>
                    \\(\\triangleright\\quad\\) divisori di \\(\\color{blue}{${poly.term[2].display()}}\\): 
                    \\[${knownTermDivText}\\]
                    
                </p>
            </div>

            <div class="ruffiniSlide">
                <p id="schemeRuffini" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    \\[
                        \\color{red}{${poly.term[0].coeff()}}\\color{black}{}x^2 ${poly.term[1].displayWithSign()} \\color{blue}{${poly.term[2].displayWithSign()}}
                    \\]
                </p>
                <br>
                <p id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    ...e l'elenco tutti i divisori del coefficiente di \\(x^2\\).
                    <br>
                    <br>
                    \\(\\triangleright\\quad\\) divisori di \\(\\color{blue}{${poly.term[2].display()}}\\): 
                    <br>
                    \\[${knownTermDivText}\\]
                    
                    \\(\\triangleright\\quad\\) divisori di \\(\\color{red}{${poly.term[0].coeff()}}\\): 
                    <br>
                    \\[${xSquaredCoeffDivText}\\]
                </p>
            </div>

            <div class="ruffiniSlide">
                <p id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Ora formiamo tutte le frazioni positive e negative (\\(\\pm\\)) della forma 
                    \\[
                        \\dfrac{\\color{violet}{\\text{numero viola}}}{\\color{darkorange}{\\text{numero arancione}}}
                    \\]
                    ${firstTableText}
                </p>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Semplifichiamo le frazioni laddove possibile.
                    <br>
                    ${secondTableText}
                    <br>
                    <br>
                    <span style="color: gray">
                        La lista dei delle possibili radici di \\(${poly.display()}\\) è la seguente:
                    </span>
                    <div class="formula">
                        \\[
                            \\begin{array}{}
                            ${divisorListMatrix}
                            \\end{array}
                        \\]
                    </div>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="schemeRuffini" style="background-color: rgba(211, 211, 211,0.3); padding: 1rem;">                   
                    Possibili radici di \\[${poly.display()}\\]
                    <div class="formula">
                        \\[    
                            \\begin{array}{}
                                ${divisorListMatrix}
                            \\end{array} 
                        \\]   
                    </div>
                    
                </div>
            </div>`

            for(let i = 0; i <= solutionIndex; i++) {
                document.getElementById(`grayBorder-container`).innerHTML += `${testTextArray[i]}
                
                `
            }
            

            document.getElementById(`grayBorder-container`).innerHTML += `
            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Svolgiamo la divisione.
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()} 
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Troviamo un numero che moltiplicato per \\(\\color{blue}{${rightSideRow[0].term[0].display()}}\\) dia come risultato \\(\\color{red}{${leftSideRow[0].term[0].display()}}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\color{red}{${leftSideRow[0].term[0].display()}} & ${leftSideRow[0].term[1].displayWithSign()} & ${leftSideRow[0].term[2].displayWithSign()} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].displayWithSign()} 
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Troviamo un numero che moltiplicato per \\(\\color{blue}{${rightSideRow[0].term[0].display()}}\\) dia come risultato \\(\\color{red}{${leftSideRow[0].term[0].display()}}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\color{red}{${leftSideRow[0].term[0].display()}} & ${leftSideRow[0].term[1].displayWithSign()} & ${leftSideRow[0].term[2].displayWithSign()} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].displayWithSign()} 
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].term[0].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(\\color{green}{${rightSideRow[1].term[0].display()}}\\) per \\(\\color{blue}{${rightSideRow[0].display()}}\\) e scriviamo il risultato sotto a \\(${poly.display()}\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & \\color{blue}{${rightSideRow[0].term[1].displayWithSign()}}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].term[0].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(${rightSideRow[1].term[0].display()}\\) per \\(${rightSideRow[0].display()}\\) e scriviamo il risultato sotto a \\(${poly.display()}\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                  \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        \\color{black}{${leftSideRow[1].term[0].display()}} &  & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].displayWithSign()} 
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].term[0].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
                \\[
                    \\color{green}{${rightSideRow[1].term[0].display()}} \\,\\,\\color{gray}{\\cdot}\\,\\, \\color{blue}{${rightSideRow[0].term[0].display()}}\\color{gray}{} = \\color{black}{${leftSideRow[1].term[0].display()}}
                \\]
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(${rightSideRow[1].term[0].display()}\\) per \\(x -3\\) e scriviamo il risultato sotto a \\(${poly.display()}\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div>
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].display()} & \\color{black}{${leftSideRow[1].term[1].displayWithSign()}} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & \\color{blue}{${rightSideRow[0].term[1].displayWithSign()}} 
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].term[0].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                    \\[
                        \\color{green}{${rightSideRow[1].term[0].display()}} \\,\\,\\color{gray}{\\cdot}\\,\\, \\color{blue}{\\left(${rightSideRow[0].term[1].displayWithSign()}\\right)}\\color{gray}{} = \\color{black}{${leftSideRow[1].term[1].displayWithSign()}}
                    \\]
                    <br>
                    <br>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,\\color{blue}{${poly.display()}}\\,\\,\\,\\) e \\(\\,\\,\\,\\color{black}{${leftSideRow[1].display()}}\\,\\,\\,\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        \\color{blue}{${leftSideRow[0].term[0].display()}} & \\color{blue}{${leftSideRow[0].term[1].displayWithSign()}} & \\color{blue}{${leftSideRow[0].term[2].displayWithSign()}} \\\\
                                        \\color{black}{${leftSideRow[1].term[0].display()}} & \\color{black}{${leftSideRow[1].term[1].displayWithSign()}} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].term[0].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,${poly.display()}\\,\\,\\,\\) e \\(\\,\\,\\,${leftSideRow[1].display()}\\,\\,\\,\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        \\color{blue}{${leftSideRow[0].term[0].display()}} & ${leftSideRow[0].term[1].displayWithSign()} & ${leftSideRow[0].term[2].displayWithSign()} \\\\
                                        \\color{black}{${leftSideRow[1].term[0].display()}} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,\\color{red}{//} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                \\[
                    \\color{blue}{${leftSideRow[0].term[0].display()}} - \\color{black}{${leftSideRow[1].term[0].display()}} = \\color{red}{0}
                \\]
                
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,${poly.display()}\\,\\,\\,\\) e \\(\\,\\,\\,${leftSideRow[1].display()}\\,\\,\\,\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${leftSideRow[0].term[0].display()} & \\color{blue}{${leftSideRow[0].term[1].displayWithSign()}} & ${leftSideRow[0].term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].display()} & \\color{black}{${leftSideRow[1].term[1].displayWithSign()}} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        //\\,\\,\\, & \\,\\,\\,\\color{red}{${leftSideRow[2].term[0].displayWithSign()}}\\\\ 
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                \\[
                    \\color{blue}{${leftSideRow[0].term[1].displayWithSign()}}\\color{gray}{} - \\color{black}{\\left(${leftSideRow[1].term[1].displayWithSign()}\\right)} = \\color{red}{${leftSideRow[2].term[0].displayWithSign()}}
                \\]
                
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,${poly.display()}\\,\\,\\,\\) e \\(\\,\\,\\,${leftSideRow[1].display()}\\,\\,\\,\\).
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${leftSideRow[0].term[0].display()} & ${leftSideRow[0].term[1].displayWithSign()} & \\color{blue}{${leftSideRow[0].term[2].displayWithSign()}} \\\\
                                        ${leftSideRow[1].term[0].display()} & ${leftSideRow[1].term[1].displayWithSign()} & \\color{black}{0}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\, ${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,\\color{red}{${leftSideRow[2].term[1].displayWithSign()}}\\\\ 
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                \\[
                    \\color{blue}{${leftSideRow[0].term[2].displayWithSign()}} - \\color{black}{\\left(0\\right)} = \\color{red}{${leftSideRow[2].term[1].displayWithSign()}}
                \\]
                
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Troviamo un monomio che moltiplicato per \\(\\color{blue}{${rightSideRow[0].term[0].display()}}\\) dia come risultato \\(\\color{red}{${leftSideRow[2].term[0].displayWithSign()}}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].display()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,\\color{red}{${leftSideRow[2].term[0].displayWithSign()}} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Troviamo un monomio che moltiplicato per \\(${rightSideRow[0].term[0].display()}\\) dia come risultato \\(${leftSideRow[2].term[0].displayWithSign()}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,\\color{red}{${leftSideRow[2].term[0].displayWithSign()}} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()} \\,\\,\\,\\color{green}{${rightSideRow[1].term[1].displayWithSign()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>    
                \\[
                    \\color{blue}{${rightSideRow[0].term[0].display()}} \\color{gray}{} \\cdot \\color{green}{\\left(${rightSideRow[1].term[1].displayWithSign()}\\right)}\\color{gray}{} =  \\color{red}{${leftSideRow[2].term[0].displayWithSign()}} 
                \\]                
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(\\color{green}{${rightSideRow[1].term[1].display()}}\\) per \\(\\color{blue}{${rightSideRow[0].display()}}\\) e scriviamo il risultato sotto \\(${leftSideRow[2].display()}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\, ${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & \\color{blue}{${rightSideRow[0].term[1].displayWithSign()}}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()} \\,\\,\\,\\color{green}{${rightSideRow[1].term[1].displayWithSign()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>             
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(${rightSideRow[1].term[1].display()}\\) per \\(${bin.display()}\\) e scriviamo il risultato sotto \\(${leftSideRow[2].display()}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\, ${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        & \\color{black}{${leftSideRow[3].term[0].displayWithSign()}} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & ${rightSideRow[0].term[1].display()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()} \\,\\,\\,\\color{green}{${rightSideRow[1].term[1].displayWithSign()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>             
                \\[
                    \\color{green}{\\left(${rightSideRow[1].term[1].displayWithSign()}\\right)} \\color{gray}{}\\cdot \\color{blue}{${rightSideRow[0].term[0].display()}} \\color{gray}{} = \\color{black}{${leftSideRow[3].term[0].displayWithSign()}}
                \\]
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Moltiplichiamo \\(${rightSideRow[1].term[1].display()}\\) per \\(${bin.display()}\\) e scriviamo il risultato sotto \\(${leftSideRow[2].display()}\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        & ${leftSideRow[3].term[0].displayWithSign()} & \\color{black}{${leftSideRow[3].term[1].displayWithSign()}}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & \\color{blue}{${rightSideRow[0].term[1].display()}}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].term[0].display()} \\,\\,\\,\\color{green}{${rightSideRow[1].term[1].displayWithSign()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>             
                \\[
                    \\color{green}{\\left(${rightSideRow[1].term[1].displayWithSign()}\\right)} \\color{gray}{}\\cdot \\color{blue}{\\left(${rightSideRow[0].term[1].displayWithSign()}\\right)} \\color{gray}{} = \\color{black}{${leftSideRow[3].term[1].displayWithSign()}}
                \\]
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,\\color{blue}{${leftSideRow[2].display()}}\\,\\,\\,\\) e \\(\\,\\,\\,\\color{black}{${leftSideRow[3].display()}}\\,\\,\\,\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem; border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,\\color{blue}{${leftSideRow[2].term[0].displayWithSign()}} & \\,\\,\\,\\color{blue}{${leftSideRow[2].term[1].displayWithSign()}}\\\\ 
                                        & \\color{black}{${leftSideRow[3].term[0].displayWithSign()}} & \\color{black}{${leftSideRow[3].term[1].displayWithSign()}}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>             
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,${leftSideRow[2].display()}\\,\\,\\,\\) e \\(\\,\\,\\,${leftSideRow[3].display()}\\,\\,\\,\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="border-bottom: 0.01rem solid gray; margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,\\color{blue}{${leftSideRow[2].term[0].displayWithSign()}} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        & \\color{black}{${leftSideRow[3].term[0].displayWithSign()}} & ${leftSideRow[3].term[1].displayWithSign()}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\quad & \\,\\,\\,\\color{red}{//} & \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>          
                \\[
                    \\color{blue}{${leftSideRow[2].term[0].display()}} \\color{gray}{} - \\color{black}{\\left(${leftSideRow[3].term[0].display()}\\right)} \\color{gray}{} = \\color{red}{0}
                \\]   
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    Eseguiamo la sottrazione tra \\(\\,\\,\\,${leftSideRow[2].display()}\\,\\,\\,\\) e \\(\\,\\,\\,${leftSideRow[3].display()}\\,\\,\\,\\)
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        ${poly.term[0].display()} & ${poly.term[1].displayWithSign()} & ${poly.term[2].displayWithSign()} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="border-bottom: 0.01rem solid gray; margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\, ${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,\\color{blue}{${leftSideRow[2].term[1].displayWithSign()}}\\\\ 
                                        & ${leftSideRow[3].term[0].displayWithSign()} & \\color{black}{${leftSideRow[3].term[1].displayWithSign()}}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\quad & \\,\\,\\,// & \\,\\,\\,\\color{red}{//} \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    ${rightSideRow[0].term[0].display()} & ${rightSideRow[0].term[1].displayWithSign()}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    ${rightSideRow[1].display()}
                                \\)
                            </div>
                        </div>
                    </div>
                </div>          
                \\[
                    \\color{blue}{${leftSideRow[2].term[1].displayWithSign()}} \\color{gray}{} - \\color{black}{\\left(${leftSideRow[3].term[1].displayWithSign()}\\right)} \\color{gray}{} = \\color{red}{0}
                \\]   
            </div>

            <div class="ruffiniSlide">
                <div id="commentRuffini" style="color: gray; text-align:left; min-height: 5rem;">
                    <br>
                    <br>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: flex-start;">
                        <div style="padding-right: 0.5rem; border-right: 0.01rem gray solid;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\begin{array}{}
                                        \\color{red}{${leftSideRow[0].term[0].display()}} & \\color{red}{${leftSideRow[0].term[1].displayWithSign()}} & \\color{red}{${leftSideRow[0].term[2].displayWithSign()}} \\\\
                                        ${leftSideRow[1].term[0].displayWithSign()} & ${leftSideRow[1].term[1].displayWithSign()} & \\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="border-bottom: 0.01rem solid gray; margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\,\\,\\,// & \\,\\,\\,${leftSideRow[2].term[0].displayWithSign()} & \\,\\,\\,${leftSideRow[2].term[1].displayWithSign()}\\\\ 
                                        & \\,\\,\\,${leftSideRow[3].term[0].displayWithSign()} & \\,\\,\\,${leftSideRow[3].term[1].displayWithSign()}\\\\
                                    \\end{array}
                                \\)
                            </div>
                            <div style="margin-top: 0.4rem;">
                                \\(
                                    \\begin{array}{}
                                        \\quad\\quad & \\,\\,\\,// & \\,\\,\\,\\,\\,// \\\\
                                        \\\\
                                    \\end{array}
                                \\)
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-content: center; padding-left: 0; margin-left: 0;">
                            <div style="border-bottom: 0.01rem solid gray;">
                                \\(
                                    \\,\\,\\,
                                    \\begin{array}{}
                                    \\color{blue}{${rightSideRow[0].term[0].display()}} & \\color{blue}{${rightSideRow[0].term[1].display()}}
                                    \\end{array}
                                \\)
                            </div>
                            <div>
                                \\(
                                    \\,\\,\\,
                                    \\color{green}{${rightSideRow[1].display()}}
                                \\)
                            </div>
                        </div>
                    </div>
                </div> 
                <br>
                <p style="color: gray; text-align: center;">
                    si ha che 
                    \\[
                        \\color{red}{${poly.display()}} \\color{gray}{} = \\color{blue}{\\left(x-3\\right)} \\color{gray}{} \\cdot \\color{green}{\\left(2x -1\\right)}
                    \\]   
                </p>
            </div>`

        
        esempio.innerHTML += 
        `<div class="button-container" style="width: 100%; margin: auto; display:flex; flex-direction:row; justify-content: space-evenly; align-items: center;">
            <button id="previousSlideRuffini-button" onclick="previousSlideRuffini()">Indietro</button>
            <button id="slideRuffini-button" onclick="nextSlideRuffini()">Avanti</button>
        </div>
        
        <br>
        <p id="ruffini-conclusion" class="grayBackground">
            In conclusione possiamo scomporre il polinomio come segue:
            \\[
                ${poly.display()} = \\left(${bin.display()}\\right)\\cdot\\left(${quot.display()}\\right)
            \\]
        </p>            
        <br>`

        /*
        let logStr = `
        r: ${r.display()}
        bin: ${bin.display()}
        quot: ${quot.display()}
        poly: ${poly.display()}
        x^2 coeff divisor: `;

        for(let i = 0; i < xSquaredCoeffDiv.length; i++) {
            logStr += `${xSquaredCoeffDiv[i].display()} `
        }

        logStr += `
        known coeff divisor: `

        for(let i = 0; i < knownTermDiv.length; i++) {
            logStr += `${knownTermDiv[i].display()} `
        }

        logStr += `
        solutionIndex: ${solutionIndex}`

        logStr += `

        firstTable:`

        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
            logStr += `
            `
            for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {
                logStr += `${firstTable[i][j]} `
            }
        }

        logStr += `

        secondTable:`

        for(let i = 0; i < xSquaredCoeffDiv.length/2 + 1; i++) {
            logStr += `
            `
            for(let j = 0; j < knownTermDiv.length/2 + 1; j++) {
                if(i===0 && j===0) {
                    logStr += ``
                } else {
                    logStr += `${secondTable[i][j].display()} `
                }
            }
        }

        logStr += `

        divisorListMatrix:
        ${divisorListMatrix}`

        for(let i = 0; i < solutionIndex; i++) {

            logStr += `
            
            testTextArray[${i}]:
            ${testTextArray[i]}`
        } 
        
        console.log(logStr);

        */
        inizializeRuffini();
    }
        
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function rndInt(min, max) {
    let rnd = min + Math.floor(Math.random()*(max - min +1));
    return rnd;
}



/* -------------------------------------------------------------------- */


//inizializzo l'indice delle slide sul quadrato di binomio a 0
let currentSlideSquareBinomialIndex = 0;

function inizializeSquareBinomial() {

    currentSlideSquareBinomialIndex = 0;
    

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

    //disabilito il pulsante previous
    document.getElementById("previousSlideSquareBinomial-button").disabled = true;
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
        document.getElementById(`slideSquareBinomial-button`).disabled = true;  
        document.location.href=`#squareBinomial-conclusion`      
    }

    //nel caso in cui il pulsante previous sia disabilitato lo riattivo
    if(document.getElementById(`previousSlideSquareBinomial-button`).disabled === true) {
        document.getElementById(`previousSlideSquareBinomial-button`).disabled = false;  
    }

}

//funzione per passare alla slide precedente
function previousSlideSquareBinomial() {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#squareBinomialSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("squareBinomialSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSquareBinomialIndex--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[currentSlideSquareBinomialIndex].style.display = "block";
    slide[currentSlideSquareBinomialIndex].style.fontSize = "1.1rem";
    if(currentSlideSquareBinomialIndex === 0) {
        document.getElementById(`previousSlideSquareBinomial-button`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`slideSquareBinomial-button`).disabled === true) {
        document.getElementById(`slideSquareBinomial-button`).disabled = false;  
    }

}

inizializeSquareBinomial()


/* --------------------------------------------------------------------------------------------- */

//inizializzo l'indice delle slide sul quadrato di binomio a 0
let currentSlideSumByDifferenceIndex = 0;

function inizializeSumByDifference() {

    currentSlideSumByDifferenceIndex = 0

    let slide = document.getElementsByClassName("sumByDifferenceSlide")

    //TODO questo *** è un tentativo (fallito miseramente) di rimediare al seguente problema :
    //quando passo alla seconda slide (la 1-esima) il font-size delle formule matematiche cambia per ragioni misteriose
    //Queste 3 linee di codice possono essere omesse, ogni slide ha come attributo style "none"
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.fontSize = "100%";   //***
        slide[i].style.display = "none"
    }
    
    //rendo visibile la prima slide
    slide[0].style.display = "block"

    //disabilito il pulsante previous
    document.getElementById("previousSlideSumByDifference-button").disabled = true;
}


//funzione per passare alla slide successiva
function nextSlideSumByDifference() {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#sumByDifferenceSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("sumByDifferenceSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSumByDifferenceIndex++;

    //se ci sono ancora slide da mostrare passo alla successiva
    if(currentSlideSumByDifferenceIndex < slide.length) {
        slide[currentSlideSumByDifferenceIndex].style.display = "block";
        slide[currentSlideSumByDifferenceIndex].style.fontSize = "1.1rem";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(currentSlideSumByDifferenceIndex  === slide.length) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`slideSumByDifference-button`).disabled = true;  
        document.location.href=`#sumByDifference-conclusion`      
    }

    //nel caso in cui il pulsante previous sia disabilitato lo riattivo
    if(document.getElementById(`previousSlideSumByDifference-button`).disabled === true) {
        document.getElementById(`previousSlideSumByDifference-button`).disabled = false;  
    }

}

//funzione per passare alla slide precedente
function previousSlideSumByDifference() {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#sumByDifferenceSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("sumByDifferenceSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSumByDifferenceIndex--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[currentSlideSumByDifferenceIndex].style.display = "block";
    slide[currentSlideSumByDifferenceIndex].style.fontSize = "1.1rem";
    if(currentSlideSumByDifferenceIndex === 0) {
        document.getElementById(`previousSlideSumByDifference-button`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`slideSumByDifference-button`).disabled === true) {
        document.getElementById(`slideSumByDifference-button`).disabled = false;  
    }

}


inizializeSumByDifference();

/* --------------------------------------------------------------------------------------------- */

//inizializzo l'indice delle slide sul trinomio speciale a 0
let currentSlideSpecialTrinomialIndex = 0;

function inizializeSpecialTrinomial() {

    currentSlideSpecialTrinomialIndex = 0

    let slide = document.getElementsByClassName("specialTrinomialSlide")

    //TODO questo è un tentativo (fallito miseramente) di rimediare al seguente problema :
    //quando passo alla seconda slide (la 1-esima) il font-size delle formule matematiche cambia per ragioni misteriose
    //Queste 3 linee di codice possono essere omesse, ogni slide ha come attributo style "none"
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.fontSize = "100%";   
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"

    //rendo visibile la prima slide
    document.getElementById("slideSpecialTrinomial-button").style.display = "block"

    //disabilito il pulsante previous
    document.getElementById("previousSlideSpecialTrinomial-button").disabled = true;

}


//funzione per passare alla slide successiva
function nextSlideSpecialTrinomial() {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#specialTrinomialSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("specialTrinomialSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSpecialTrinomialIndex++;

    //se ci sono ancora slide da mostrare passo alla successiva
    if(currentSlideSpecialTrinomialIndex < slide.length) {
        slide[currentSlideSpecialTrinomialIndex].style.display = "block";
        slide[currentSlideSpecialTrinomialIndex].style.fontSize = "1.1rem";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(currentSlideSpecialTrinomialIndex  === slide.length) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`slideSpecialTrinomial-button`).disabled = true;  
        document.location.href=`#specialTrinomial-conclusion`      
    }

    //nel caso in cui il pulsante previous sia disabilitato lo riattivo
    if(document.getElementById(`previousSlideSpecialTrinomial-button`).disabled === true) {
        document.getElementById(`previousSlideSpecialTrinomial-button`).disabled = false;  
    }

}

//funzione per passare alla slide precedente
function previousSlideSpecialTrinomial() {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#specialTrinomialSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("specialTrinomialSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideSpecialTrinomialIndex--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[currentSlideSpecialTrinomialIndex].style.display = "block";
    slide[currentSlideSpecialTrinomialIndex].style.fontSize = "1.1rem";
    if(currentSlideSpecialTrinomialIndex === 0) {
        document.getElementById(`previousSlideSpecialTrinomial-button`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`slideSpecialTrinomial-button`).disabled === true) {
        document.getElementById(`slideSpecialTrinomial-button`).disabled = false;  
    }


}

inizializeSpecialTrinomial()


/* ----------------------------------------------------------------------------------- */

//inizializzo l'indice delle slide sul trinomio speciale a 0
let currentSlideRuffiniIndex = 0;

function inizializeRuffini() {

    currentSlideRuffiniIndex = 0

    let slide = document.getElementsByClassName("ruffiniSlide")

    //TODO questo è un tentativo (fallito miseramente) di rimediare al seguente problema :
    //quando passo alla seconda slide (la 1-esima) il font-size delle formule matematiche cambia per ragioni misteriose
    //Queste 3 linee di codice possono essere omesse, ogni slide ha come attributo style "none"
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.fontSize = "100%";   
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"

    //rendo visibile la prima slide
    document.getElementById("slideRuffini-button").style.display = "block"

    //pulsante previous disabled
    document.getElementById("previousSlideRuffini-button").disabled = true;

}


//funzione per passare alla slide successiva
function nextSlideRuffini() {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#ruffiniSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("ruffiniSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideRuffiniIndex++;

    if(currentSlideRuffiniIndex !== 0 ) {
        //pulsante previous abiliatato
        document.getElementById("previousSlideRuffini-button").disabled = false;
    }

    //se ci sono ancora slide da mostrare passo alla successiva
    if(currentSlideRuffiniIndex < slide.length) {
        slide[currentSlideRuffiniIndex].style.display = "block";
        slide[currentSlideRuffiniIndex].style.fontSize = "1.1rem";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(currentSlideRuffiniIndex  === slide.length) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`slideRuffini-button`).disabled = true;  
        document.location.href=`#ruffini-conclusion`      
    }

    //nel caso in cui il pulsante previous sia disabilitato lo riattivo
    if(document.getElementById(`previousSlideRuffini-button`).disabled === true) {
        document.getElementById(`previousSlideRuffini-button`).disabled = false;  
    }

}

//funzione per passare alla slide precedente
function previousSlideRuffini() {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#ruffiniSlide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("ruffiniSlide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    currentSlideRuffiniIndex--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[currentSlideRuffiniIndex].style.display = "block";
    slide[currentSlideRuffiniIndex].style.fontSize = "1.1rem";
    if(currentSlideRuffiniIndex === 0) {
        document.getElementById(`previousSlideRuffini-button`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`slideRuffini-button`).disabled === true) {
        document.getElementById(`slideRuffini-button`).disabled = false;  
    }


}

function rndCoprime(min, max, n) {
    let a = [];
    for(let i = 0; i < n; i++) {
        a[i] = rndInt(min, max);
    }

    let d = a[0];
    for(let i = 1; i < n; i++) {
        d = gcd(d, a[i]);
    }

    while(d !== 1) {
        for(let i = 0; i < n; i++) {
            a[i] = rndInt(min, max);
        }
        d = a[0];
        for(let i = 1; i < n; i++) {
            d = gcd(d, a[i]);
        }
    }

    return a

}



inizializeRuffini()

