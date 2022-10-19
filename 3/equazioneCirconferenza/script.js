let esempio;

function generaEsempio(n) {

    esempio = document.getElementById(`esempio${n}`);
    document.location.href=`#esempio1`;

    if(n === 1) {

        let a = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*20 + 1), 1, [0,0,0,0,0,0]);
        let b = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*20 + 1), 1, [0,0,0,0,0,0]);

        let cambiaVersoText = ``;
        let diseguaglianza = `\\gt`;
        let diseguaglianzaInversa = `\\lt`;
        let diseguaglianzaAParole = `maggiore`;
        let segnoGrafico = `\\color{blue}{-------} &\\,\\,\\,\\color{black}{0}\\,\\,\\, \\color{red}{+++++++}`

        if(a.sign === 1) {
            
            cambiaVersoText = 
            `<br>
            ⚠️ Dato che il numero per cui dividiamo è negativo il verso della diseguaglianza si <b>ribalta</b>`;

            diseguaglianza = `\\lt`;

            diseguaglianzaAParole = `minore`;

            diseguaglianzaInversa = `\\gt`;

            segnoGrafico = `\\color{red}{+++++++} &\\,\\,\\,\\color{black}{0}\\,\\,\\, \\color{blue}{-------}`

        } 

        esempio.innerHTML = 
        `<div id="slide-container1">
        
            <div class="slide1">
                <div class="grayBorder">
                    Studiare il segno del polinomio
                    \\[
                        ${a.display()}x ${b.displayWithSign()}
                    \\]
                    al variare del valore della \\(x\\).
                </div>
                <br>
                <b>Svolgimento</b>
                <br>
                Vogliamo scoprire 
                <br>
                <br>
                <ul>
                    <li>
                        Per quali valori di \\(x\\) il polinomio assume segno <b>positivo</b>
                    </li>
                    <br>
                    <li>
                        Per quali valori di \\(x\\) il polinomio assume segno <b>negativo</b>
                    </li>
                    <br>
                    <li>
                        Per quali valori di \\(x\\) il polinomio vale <b>zero</b>
                    </li>
                    <br>
                </ul>
            </div>
            
            <div class="slide1">
                Iniziamo con il chiederci per quali valori della \\(x\\) il polinomio è <b>positivo</b>. 
                <br>
                In simboli:
                \\[
                    \\underset{\\text{il polinomio}}{\\underbrace{${a.display()}x ${b.displayWithSign()}}} \\,\\,\\, \\underset{\\text{è positivo}}{\\underbrace{\\gt 0}}
                \\]
            </div>

            <div class="slide1">
                Risolviamo la disequazione
                \\[
                    ${a.display()}x ${b.displayWithSign()} \\gt 0
                \\]
                Per prima cosa spostiamo \\(${b.displayWithSign()}\\) dall'altra parte del simbolo di disuguaglianza cambiandolo di segno
                \\[
                    ${a.display()}x \\gt ${opposite(b).display()}
                \\]
                Ora dividiamo entrambi i membri per \\(${a.display()}\\).
                ${cambiaVersoText}
                \\[
                    \\begin{align*}
                        \\dfrac{${a.display()}x}{${a.display()}} &${diseguaglianza} \\dfrac{${opposite(b).display()}}{${a.display()}}
                        \\\\\\\\
                        x &${diseguaglianza} ${simplify(division(opposite(b), a).display())}
                    \\end{align*}
                \\]
            </div>

            <div class="slide1">
                \\(\\triangleright\\,\\,\\,\\)Abbiamo scoperto che il polinomio è <b>positivo</b> se il valore di \\(x\\) è ${diseguaglianzaAParole} di 
                <nobr>\\(${simplify(division(opposite(b), a).display())}\\).</nobr>

                <br>
                <br>

                \\(\\triangleright\\,\\,\\,\\)Gli stessi passaggi della disequazione appena risolta ci dicono che il polinomio vale <b>zero</b> 
                se il valore di \\(x\\) è \\(${simplify(division(opposite(b), a).display())}\\).
                <br>
                Infatti
                \\[
                    \\begin{align*}    
                        ${a.display()}x ${b.displayWithSign()} &= 0
                        \\\\\\\\
                        ${a.display()}x &= ${opposite(b).display()}
                        \\\\\\\\
                        x & = ${simplify(division(opposite(b), a).display())}
                    \\end{align*}    
                \\]

                \\(\\triangleright\\,\\,\\,\\)Per tutti gli altri valori di \\(x\\) il polinomio sarà <b>negativo</b>.
            </div>

            <div class="slide1">
                In conclusione il polinomio \\(${a.display()}x ${b.displayWithSign()}\\) è
                <br>
                <br>
                <ul>
                    <li>
                        <b>positivo</b> se \\(x ${diseguaglianza} ${simplify(division(opposite(b), a).display())}\\)
                    </li>
                    <br>
                    <li>
                        uguale a <b>zero</b> se \\(x = ${simplify(division(opposite(b), a).display())}\\)
                    </li>
                    <br>
                    <li>
                        <b>negativo</b> se \\(x ${diseguaglianzaInversa} ${simplify(division(opposite(b), a).display())}\\)
                    </li>
                </ul>
                <br>                    
                <br>
                <br>
                Lo stesso risultato che abbiamo appena espresso a parole, può essere rappresentato attraverso questo grafico
                <div style="min-height: 5rem; max-height: 3rem; font-size: 0.8rem">
                    \\[
                        \\begin{align*}
                            \\color{white}{}

                            \\underset{${a.display()}x ${b.displayWithSign()}}{\\text{segno di}}\\,\\,
                            
                            \\color{black}{}
                            
                            \\color{gray}{}\\dfrac{\\quad\\qquad\\qquad\\qquad}{} &\\color{black}{}\\overset{${simplify(division(opposite(b), a).display())}}{} \\color{gray}{}\\dfrac{\\quad\\qquad\\qquad\\qquad}{}
                            \\\\\\\\
                            \\color{gray}{
                                \\underset{${a.display()}x ${b.displayWithSign()}}{\\text{segno di}}
                            }\\,\\,
                            \\color{black}{}
                            ${segnoGrafico}
                        \\end{align*}
                    \\]
                    
                </div>

                
                
            </div>


            <br>

        </div>
        
        
        

        
        `

        inizialize(1);
    }

    console.log(
        esempio.innerHTML);
        
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});

    

}

slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//funzione per passare alla slide successiva
function nextSlide(n) {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container${n}`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName(`slide${n}`)
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex[n]++;

    if(slideIndex[n] !== 0 ) {
        //pulsante previous abiliatato
        document.getElementById(`previousSlide-button${n}`).disabled = false;
    }

    //se ci sono ancora slide da mostrare passo alla successiva
    if(slideIndex[n] < slide.length) {
        slide[slideIndex[n]].style.display = "block";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(slideIndex[n]  === slide.length -1) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`nextSlide-button${n}`).disabled = true;  
    }

}
    
//funzione per passare alla slide successiva
function previousSlide(n) {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container${n}`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName(`slide${n}`)
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex[n]--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[slideIndex[n]].style.display = "block";
    slide[slideIndex[n]].style.fontSize = "1.1rem";
    if(slideIndex[n] === 0) {
        document.getElementById(`previousSlide-button${n}`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`nextSlide-button${n}`).disabled === true) {
        document.getElementById(`nextSlide-button${n}`).disabled = false;  
    }
}


function inizialize(n) {

    slideIndex[n] = 0

    let slide = document.getElementsByClassName(`slide${n}`)

    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }

    //rendo visibile la prima slide
    slide[0].style.display = "block"

    //pulsante next disabled
    document.getElementById(`nextSlide-button${n}`).disabled = false;

    //pulsante previous disabled
    document.getElementById(`previousSlide-button${n}`).disabled = true;

}




