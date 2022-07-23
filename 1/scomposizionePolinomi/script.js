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


        polyInParenthesis = new Polynomial(polyArray);
        for(let i = 1; i < polyArray.length; i++) {
            for(let j = 0; j < i; j++) {
                //controllo che i coefficienti siano coprimi; in caso contrario li modifico
                let gcdCoeff = gcd(polyInParenthesis.monomial[i].num, polyInParenthesis.monomial[j].num);
                if(gcdCoeff !== 1) {
                    Object.defineProperty(polyInParenthesis.monomial[i], "num" , {value:polyInParenthesis.monomial[i].num/gcdCoeff});
                }
            }
        }

        //mi assicuro che almeno un termine sia senza x
        Object.defineProperty(polyInParenthesis.monomial[rndInt(0,polyLength-1)], "literal" , {value: [0, 0, 0, 0, rndInt(1, 4),  0]});
        
        //mi assicuro che almeno un termine sia senza y
        let indexInquired = rndInt(0,polyLength - 1); 
        console.log(`indexInquired: ${indexInquired}`)
        while(polyInParenthesis.monomial[indexInquired].literal[3] === 0) {
            indexInquired = rndInt(0,polyLength - 1);    
        }
        Object.defineProperty(polyInParenthesis.monomial[indexInquired], "literal" , {value: [0, 0, 0, rndInt(1, 4), 0, 0]});


        //definisco il polinomio da scomporre a partire dal fattore comune e  dal polinomio in parentesi
        let toBeFactorizedArray = [];
        for(let i = 0; i < polyArray.length; i++) {
            toBeFactorizedArray.push(product(polyInParenthesis.monomial[i], commonFactor));
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
            Il fattore comune è \\(${commonFactor.display()}\\)
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
                    ${polyInParenthesis.monomial[i].displayWithSign()}
                \\) è il monomio che moltiplicato per \\(${commonFactor.display()}\\) dà come risultato \\(${toBeFactorized.monomial[i].displayWithSign()} \\)
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

            //controllo che i coefficienti del primo polinomio siano coprimi; in caso contrario li modifico
            let gcdCoeff = gcd(monomial1.num, monomial2.num);
            if(gcdCoeff !== 1) {
                Object.defineProperty(monomial1, "num" , {value:monomial1.num/gcdCoeff});
                Object.defineProperty(monomial2, "num" , {value:monomial2.num/gcdCoeff});
            }

            //controllo che i segni non siano entrambi -
            if(monomial1.sign === 1 && monomial2.sign === 1) {
                let index = rndInt(0, 1);
                let monomialArray = [monomial1, monomial2];
                let monomial = monomialArray[index]
                Object.defineProperty(monomial, "sign" , {value: 0});
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

        
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

function rndInt(min, max) {
    let rnd = min + Math.floor(Math.random()*(max - min +1));
    return rnd;
}



