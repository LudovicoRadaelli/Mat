function generaEsempio(n) {

    let esempio = document.getElementById("esempio"+n);

    document.location.href = `#esempio${n}`

    if(n === 1) {

        //QUEST'ESEMPIO FUNZIONA, MA E' SCRITTO DA CANI. L'AVER DEFINITO L'OGGETTO POLINOMIO r HA SOLO COMPLICATO LE COSE
        //OLTRETUTTO C'E' RIDONDANZA 
        
        let x0 = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10), 1, [0, 0, 0, 0, 0, 0])
        let y0 = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10), 1, [0, 0, 0, 0, 0, 0])
        
        let appartiene = Math.floor(Math.random()*2); 

        let m = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 1, 0, 0]);
        let q = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);

        let r = new Polynomial([m, q]); 

        

        if(appartiene) {

            console.log(`appartiene`)
            
            let q = y0. coeff() - r.term[0]. coeff()*x0. coeff();
            
            if(q >= 0) {
                Object.defineProperty(r.term[1], "sign", {value: 0})            
            } else {
                Object.defineProperty(r.term[1], "sign", {value: 1})            
            }

            Object.defineProperty(r.term[1], "num", {value: Math.abs(q)})        

            esempio.innerHTML = `
            Stabilire se il punto di coordinate 
            \\[
                \\left(\\color{red}{${x0.display()}}\\,\\color{black}{},\\,\\,\\color{blue}{${y0.display()}}\\color{black}{}\\right)
            \\]
            appartiene alla retta di equazione 
            \\[
                \\color{blue}{}y \\color{black}{}\\,\\,=\\,\\, ${r.term[0].coeff()}\\,\\color{red}{}x \\color{black}{} \\,  ${r.term[1].displayWithSign()}
            \\]
            <br>
            <b>Svolgimento</b>
            <br>
            
            Sostituiamo le coordinate del punto nell'equazione della retta e svolgiamo i conti:
            \\[
                \\begin{align*}
                    \\color{blue}{${y0.display()}} \\color{black}{} & = ${r.term[0].coeff()} \\cdot \\color{red}{\\left(${x0.display()}\\right)}\\color{black}{} ${r.term[1].displayWithSign()}
                    \\\\\\\\
                    ${y0.display()} & = ${product(r.term[0], x0).coeff()} ${r.term[1].displayWithSign()}
                    \\\\\\\\
                    ${y0.display()} & = ${y0.display()} \\quad \\color{lightgreen}{\\text{✔}}
                \\end{align*}
            \\]
            Le coordinate del punto <b>soddisfano</b> l'equazione della retta, ovvero sostituite nell'equazione
            generano un'uguaglianza vera.
            <br>
            <br>
            Quindi il punto <b>appartiene</b> alla retta.

            
            `

        } else {

            let q = y0. coeff() - r.term[0]. coeff()*x0. coeff() + Math.floor(Math.random()*4 + 1);
            Object.defineProperty(r.term[1], "sign", {value: Math.floor(Math.random()*2)})   ;
            Object.defineProperty(r.term[1], "num", {value: Math.abs(q)});


            esempio.innerHTML = `
            Stabilire se il punto di coordinate 
            \\[
                \\left(\\color{red}{${x0.display()}}\\,\\color{black}{},\\,\\,\\color{blue}{${y0.display()}}\\color{black}{}\\right)
            \\]
            appartiene alla retta di equazione 
            \\[
                \\color{blue}{}y \\color{black}{}\\,\\,=\\,\\, ${r.term[0].coeff()}\\,\\color{red}{}x \\color{black}{} \\,  ${r.term[1].displayWithSign()}
            \\]
            <br>
            <b>Svolgimento</b>
            <br>
            
            Sostituiamo le coordinate del punto nell'equazione della retta e svolgiamo i conti:
            \\[
                \\begin{align*}
                    \\color{blue}{${y0.display()}} \\color{black}{} & = ${r.term[0].coeff()} \\cdot \\color{red}{\\left(${x0.display()}\\right)}\\color{black}{} ${r.term[1].displayWithSign()}
                    \\\\\\\\
                    ${y0.display()} & = ${product(r.term[0], x0).coeff()} ${r.term[1].displayWithSign()}
                    \\\\\\\\
                    ${y0.display()} & =
                    ${sum(product(new Monomial(r.term[0].sign, r.term[0].num, 1, [0, 0, 0, 0, 0, 0]), x0), r.term[1]).coeff()} \\quad \\color{red}{\\text{✗}}
                \\end{align*}
            \\]
            Le coordinate del punto <b>non soddisfano</b> l'equazione della retta, ovvero sostituite nell'equazione
            generano un'uguaglianza falsa.
            <br>
            <br>
            Quindi il punto <b>non appartiene</b> alla retta.`
        }

    }

    if(n === 2) {

        let m = new Monomial(0, 1, 1, [1, 0, 0, 0, 0, 0]);
        Object.defineProperty(m, "letter", {value: ["m", "q", "c", "x", "y", "z"]})
        
        let q = new Monomial(0, 1, 1, [0, 1, 0, 0, 0, 0]);
        Object.defineProperty(q, "letter", {value: ["m", "q", "c", "x", "y", "z"]})

        console.log(`
        m: ${m.display()},
        q: ${q.display()}`)

        //TODO
        //siccome la classe Monomial non gestisce bene lo 0, prendo tutte coordinate non nulle

        let xA = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);
        let yA = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);
        
        let xB = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);
        let yB  = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);
        
        if(xA.coeff() !== xB.coeff()) {

            let xAPar = ``;
            if(xA.coeff() < 0) {
                xAPar = `\\left(${xA.coeff()}\\right)`
            } else {
                xAPar = `${xA.coeff()}`;
            }

            let xBPar = ``;
            if(xB.coeff() < 0) {
                xBPar = `\\left(${xB.coeff()}\\right)`
            } else {
                xBPar = `${xB.coeff()}`;
            }


            console.log(`
            xA.coeff(): ${xA.coeff()},
            xB.coeff(): ${xB.coeff()},
            xAPar: ${xAPar},
            xBPar: ${xBPar},`)


            esempio.innerHTML = 
            `<p>
                Troviamo la retta passante per i punti 
                \\[
                    A\\left(${xA.coeff()}\\,,\\,\\,${yA.coeff()}\\right)    
                    \\quad\\text{e}\\quad 
                    B\\left(${xB.coeff()}\\,,\\,\\,${yB.coeff()}\\right)
                \\]
                
                I punti non sono allineati verticalmente, quindi la retta passante per \\(A\\) e \\(B\\) deve essere della forma
                \\[
                    y = mx + q    
                \\]
                <br>
            </p>
            <ul>
            <li>
                    Dato che \\(A\\) appartiene alla retta, le sue coordinate <i>soddisfano</i> l'equazione della retta:
                    \\[
                        ${yA.coeff()} = ${m.display()} \\cdot ${xAPar} ${q.displayWithSign()}
                    \\]
            </li>
                <br>
                <li>
                    Allo stesso modo, il punto \\(B\\) appartiene alla retta, le sue coordinate <i>soddisfano</i> l'equazione della retta:
                    \\[
                        ${yB.coeff()} = ${m.display()} \\cdot ${xBPar} ${q.displayWithSign()}
                    \\]
                </li>
            </ul>

            <br>

            <p>
                Quindi dobbiamo trovare una coppia di numeri \\(m\\) e \\(q\\) che risolva il sitstema
                \\[
                    \\begin{cases}
                        ${yA.coeff()} = ${m.display()} \\cdot ${xAPar} ${q.displayWithSign()}
                        \\\\\\\\
                        ${yB.coeff()} = ${m.display()} \\cdot ${xBPar} ${q.displayWithSign()}
                    \\end{cases}
                \\]
                Isoliamo la \\(q\\) nella prima equazione
                \\[
                    \\begin{cases}
                        -q = ${xA.coeff()}m  ${opposite(yA).displayWithSign()}
                        \\\\\\\\
                        ${yB.coeff()} = ${xB.coeff()} ${m.display()} ${q.displayWithSign()}
                    \\end{cases}

                    \\Rightarrow

                    \\begin{cases}
                        ${q.displayWithSign()} = ${opposite(xA).coeff()} ${m.display()}  ${yA.displayWithSign()}
                        \\\\\\\\
                        ${yB.coeff()} = ${xB.coeff()}${m.display()} + q
                    \\end{cases}
                \\]
                Ora sostituiamo il valore di \\(q\\) in funzione di \\(m\\) nella seconda equazione
                \\[
                    \\begin{cases}
                        ${q.display()} = ${opposite(xA).coeff()}${m.display()}  ${yA.displayWithSign()}
                        \\\\\\\\
                        ${yB.coeff()} = ${xB.coeff()}${m.display()} ${opposite(xA).displayWithSign()}${m.display()}  ${yA.displayWithSign()}
                    \\end{cases}
                \\]
                Portiamo i temini con \\(m\\) a sinistra ed i termini noti a destra, poi svolgiamo 
                i calcoli e troviamo il valore di \\(m\\)
            </p>`

            let mValue = division(sum(yA, opposite(yB)), sum(product(xA, m), product(opposite(xB), m)));
            Object.defineProperty(mValue, "literal", {value: [0,0,0,0,0,0]});
            

            esempio.innerHTML += `<p class="formula">
                \\[
                    \\begin{align*}
                        &\\begin{cases}
                            ${q.display()} = ${opposite(xA).coeff()}${m.display()}  ${yA.displayWithSign()}
                            \\\\\\\\
                            ${opposite(xB).coeff()}${m.display()} ${xA.displayWithSign()}${m.display()} =   ${yA.display()} ${opposite(yB).displayWithSign()}
                        \\end{cases}

                        \\\\\\\\

                        \\Rightarrow

                        &\\begin{cases}
                            ${q.display()} = ${opposite(xA).coeff()}${m.display()}  ${yA.displayWithSign()}
                            \\\\\\\\
                            ${sum(product(xA, m), product(opposite(xB), m)).coeff()}m  = ${sum(yA, opposite(yB)).display()}
                        \\end{cases}

                        \\\\\\\\

                        \\Rightarrow

                        &\\begin{cases}
                            ${q.display()} = ${opposite(xA).coeff()}${m.display()}  ${yA.displayWithSign()}
                            \\\\\\\\
                            m = ${mValue.display()}
                        \\end{cases}

                    \\end{align*}
                \\]
            </p>`

            let qValue = sum(product(opposite(xA),mValue), yA) 

            esempio.innerHTML += 
            `<p>  
                 A questo punto sostituiamo il valore di \\(m\\) nella prima equazione
                \\[
                    \\begin{cases}
                        ${q.display()} = ${opposite(xA).coeff()}\\left(${mValue.display()}\\right) ${yA.displayWithSign()} = ${qValue.display()}
                        \\\\\\\\
                        m = ${mValue.display()}
                    \\end{cases}            
                \\]
                Abbiamo così trovato \\(m\\) e \\(q\\) della retta passante per i punti \\(A\\) e \\(B\\), che quindi ha equazione
                \\[
                    y = ${mValue.display()}x ${qValue.displayWithSign()}
                \\]
            </p>`

            console.log(`
            esempio2HTML: ${esempio.innerHTML}`)
        }

        

    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}

