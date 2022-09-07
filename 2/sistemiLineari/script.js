let correctAnswer = true;
let sign = ["+", "-"];
let sa, sb, sc, sd, a, b, c, d;
let coin = [0,0,1];

function checkAnswer(answer) {
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    if(answer === correctAnswer) {
        document.getElementById("right").style.display = "block";
    } else {
        document.getElementById("wrong").style.display = "block";
    }
    document.getElementById("button-container").style.display = "none";
    document.getElementById("altraDomanda").style.display = "block";
}

function altraDomanda() {
    
    sa = sign[Math.floor(Math.random()*2)];
    sc = sign[Math.floor(Math.random()*2)];
    
    a = Math.floor(Math.random()*11 + 1);
    if(a === 1) a = "";
    c = Math.floor(Math.random()*11 + 1);
        if(c === 1) c = "";
    if(coin[Math.floor(Math.random()*3)] === 0) {
        sb = sa;
        b = a;
        sd = sc;
        d = c; 
        correctAnswer = true;
    } else {
        sb = sign[Math.floor(Math.random()*2)];
        sd = sign[Math.floor(Math.random()*2)];
        b = Math.floor(Math.random()*11 + 1);
        if(b === 1) b = "";
        d = Math.floor(Math.random()*11 + 1);
        if(d === 1) d = "";
        correctAnswer = false;
    }
    

    document.getElementById("domanda").innerHTML = 
    `\\[
        \\color{black}{${sa}${a}}\\color{red}{A} \\color{black}{\\color{black}{${sc}${c}}} \\color{blue}{C} \\color{black}{\\,\\,=\\,\\,} \\color{black}{${sb}${b}}\\color{red}{B} \\color{black}{${sd}${d}} \\color{blue}{D} \\,\\,\\color{black}{\\text{?}}
    \\]`;
    MathJax.typesetClear([document.getElementById("domanda")]);
    MathJax.typesetPromise([document.getElementById("domanda")]).then(() => {});
    
    document.getElementById("button-container").style.display = "flex";
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("altraDomanda").style.display = "none";
}

let sc1, c1, sc2, c2, sxA, xA, syA, yA, sxC, xC, syC, yC, sB, B, sD, D, prevB, prevD;




function generaEsempio(n) {

    let esempio = document.getElementById(`esempio${n}`);

    location.href = `#esempio${n}`

    if(n === 1) {

        let c1 = Math.floor(Math.random()*20 -10);
        while(c1 === 0) {
            c1 = Math.floor(Math.random()*20 -10);
        }
        let c2 = Math.floor(Math.random()*20 -10);
        while(c2 === 0) {
            c2 = Math.floor(Math.random()*20 -10);
        }

        esempio.innerHTML = 
        `Consideriamo queste due informazioni.
        \\[
            \\begin{cases}
                \\color{red}{A} \\color{black}{\\,=\\,} \\color{red}{B}
                \\\\\\\\
                \\color{blue}{C} \\color{black}{\\,=\\,} \\color{blue}{D}
            \\end{cases}
        \\]
        <nobr>Scegliamo due nuemeri, ad esempio \\(\\color{green}{${c1}}\\) e \\(\\color{green}{${c2}}\\).</nobr>
        <br>
        Moltiplichiamo tutti i termini della prima equazione per \\(\\color{green}{${c1}}\\) e tutti quelli della seconda per \\(\\color{green}{${c2}}\\):
        \\[
            \\begin{cases}
                \\color{green}{${c1}}\\,\\color{red}{A} \\color{black}{\\,=\\,} \\color{green}{${c1}}\\,\\color{red}{B}
                \\\\\\\\
                \\color{green}{${c2}}\\,\\color{blue}{C} \\color{black}{\\,=\\,} \\color{green}{${c2}}\\,\\color{blue}{D}
            \\end{cases}
        \\]`
        
        let secondLine = ``;
        if(c2 > 0) {
            c2 = `+\\,${c2}`
        }

        esempio.innerHTML += `Ora sommiamo i termini della prima equazione con quelli della seconda equazione
        \\[
            \\begin{align*}
                \\color{green}{${c1}}\\,\\color{red}{A} \\,\\color{green}{${c2}}\\,\\color{blue}{C} \\color{black}{\\,\\,=\\,\\,} \\color{green}{${c1}}\\,\\color{red}{B} \\, \\color{green}{${c2}}\\,\\color{blue}{D}
            \\end{align*}
        \\]
        `

        

    }

    if(n === 2) {
        //segni
        sc1 = sign[Math.floor(Math.random()*2)];
        if(sc1 === "+") sc1 = "";
        sc2 = sign[Math.floor(Math.random()*2)];
        sxA = sign[Math.floor(Math.random()*2)];
        if(sxA === "+") sxA = "";
        syA = sign[Math.floor(Math.random()*2)];
        sxC = sign[Math.floor(Math.random()*2)];
        syC = sign[Math.floor(Math.random()*2)];
        sB = sign[Math.floor(Math.random()*2)];
        sD = sign[Math.floor(Math.random()*2)];

        //moltiplicatori equazioni
        c1 = Math.floor(Math.random()*6 + 1);
        //if(c1 === 1) c1 = "";
        c2 = Math.floor(Math.random()*6 + 1);
        //if(c2 === 1) c2 = "";

        //coefficienti equazioni
        xA =  Math.floor(Math.random()*9 + 1);
        //if(xA === 1) xA = "";
        yA =  Math.floor(Math.random()*9 + 1);
        //if(yA === 1) yA = "";
        xC =  Math.floor(Math.random()*9 + 1);
        //if(xC === 1) xA = "";
        yC =  Math.floor(Math.random()*9 + 1);
        //if(yC === 1) yA = "";

        B =  Math.floor(Math.random()*9 + 1);
        prevB = B;
        if(sB === "-") {
            B = `${sB}${B}`;
        } else {
            sB = "";
        }
        D =  Math.floor(Math.random()*9 + 1);
        prevD = D;
        if(sD === "-") {
            D = `${sD}${D}`;
        } else {
            sD = "";
        }

        /* B =  Math.floor(Math.random()*9 + 1);
        prevB = B;
        if(sB === "-") {
            B = `\\left(${sB}${B}\\right)`;
        } else {
            sB = "";
        }
        D =  Math.floor(Math.random()*9 + 1);
        prevD = D;
        if(sD === "-") {
            D = `\\left(${sD}${D}\\right)`;
        } else {
            sD = "";
        } */

        document.getElementById("eq1").innerHTML = 
        `\\[
            \\begin{equation*}
                        \\begin{cases}
                            \\overset{\\color{red}{A}}{\\color{gray}{\\overbrace{\\color{red}{${sxA}${xA}x${syA}${yA}y}}}}=\\overset{\\color{red}{B}}{\\color{gray}{\\overbrace{\\color{red}{${sB}${prevB}}}}} \\\\
                            \\\\
                            \\underset{\\color{blue}{C}}{\\color{gray}{\\underbrace{\\color{blue}{${sxC}${xC}x${syC}${yC}y}}}}=\\underset{\\color{blue}{D}}{\\color{gray}{\\underbrace{\\color{blue}{${sD}${prevD}}}}}
                        \\end{cases}
                    \\end{equation*}
        \\]`;

        

        document.getElementById("eq2").innerHTML = 
        `\\[
            ${sc1}${c1}\\color{red}{A} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{C} \\color{black}{\\,\\,=\\,\\,${sc1}${c1}} \\color{red}{B} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{D}
        \\]`;


        document.getElementById("eq3").innerHTML = 
        `\\[
            ${sc1}${c1}\\color{red}{\\left(${sxA}${xA}x${syA}${yA}y\\right)} \\color{black}{\\,\\,${sc2}\\,\\,${c2}} \\color{blue}{\\left(${sxC}${xC}x${syC}${yC}y\\right)} \\color{black}{\\,\\,=\\,\\,${sc1}${c1}\\,} \\color{red}{\\left(${B}\\right)} \\color{black}{\\,\\,${sc2}\\,\\,${c2}\\,} \\color{blue}{\\left(${D}\\right)}
        \\]`;

        let e = [];
        console.log(`
            sc1: ${sc1},
        c1: ${c1},
        sc2: ${sc2},
        c2: ${c2},
        sxA: ${sxA},
        xA: ${xA},
        syA: ${syA},
        yA: ${yA},
        sxC: ${sxA},
        xC: ${xA},
        syC: ${syC},
        yC: ${xC},
        sB: ${sB},
        B: ${B},
        sD: ${sD},
        D: ${D},
        e: ${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}, ${e[5]}, ${e[6]}, ${e[7]}, ${e[8]}, ${e[9]}, ${e[10]}, ${e[11]}`)

        if(sc1 === "" || sc1 === "+") {
            e[0] = sxA;
        } else {
            if(sxA === "+" || sxA === "")  {
                e[0] = "-";
            } else {
                e[0] = "+";
            }
        }
        e[1] = Math.floor(c1*xA);
        
        if(sc1 === "" || sc1 === "+") {
            e[2] = syA;
        } else {
            if(syA === "+")  {
                e[2] = "-";
            } else {
                e[2] = "+";
            }
        }

        e[3] = Math.floor(c1*yA);

        if(sc2 === "" || sc2 === "+") {
            e[4] = sxC;
        } else {
            if(sxC === "+")  {
                e[4] = "-";
            } else {
                e[4] = "+";
            }
        }

        e[5] = Math.floor(c2*xC);

        if(sc2 === "" || sc2 === "+") {
            e[6] = syC;
        } else {
            if(syC === "+")  {
                e[6] = "-";
            } else {
                e[6] = "+";
            }
        }

        e[7] = Math.floor(c2*yC);


        c1 = sc1+c1;
        c2 = sc2+c2;

        console.log(`
        c1_: ${c1};
        c2_: ${c2};
        `)

        e[8] = Math.floor(c1*B);

        /* if(sc1 === "" || sc1 === "+") {
            e[8] = sB;
        } else {
            if(sB === "+")  {
                e[8] = "-";
            } else {
                e[8] = "+";
            }
        } */

        //e[9] = Math.floor(c1*B);
        
        e[10] = Math.floor(c2*D);
        if(e[10]>0) {
            e[9] = "+";
        } else {
            e[9] = "";
        }

        /* if(sc2 === "" || sc2 === "+") {
            e[10] = sD;
        } else {
            if(sB === "+")  {
                e[10] = "-";
            } else {
                e[10] = "+";
            }
        } */

        //e[11] = Math.floor(c2*D); 

        document.getElementById("eq4").innerHTML = 
        `\\[
            ${e[0]}${e[1]}x${e[2]}${e[3]}y ${e[4]}${e[5]}x ${e[6]}${e[7]}y = ${e[8]}${e[9]} ${e[10]};
        \\]`;

        e[1] = e[0] + e[1];
        e[3] = e[2] + e[3];
        e[5] = e[4] + e[5];
        e[7] = e[6] + e[7];

        console.log(`
        e[1]: ${e[1]},
        e[3]: ${e[3]},
        e[5]: ${e[5]},
        e[7]: ${e[7]},
        `);

        e[1] = parseInt(e[1]) + parseInt(e[5]);
        e[3] = parseInt(e[3]) + parseInt(e[7]);
        if(e[3] >= 0) {
            e[2] = "+";
        } else {
            e[2] = "";
        }
        e[10] = parseInt(e[8]) + parseInt(e[10]);

        console.log(`
        e[1]: ${e[1]},
        e[3]: ${e[3]},
        e[2]: ${e[2]},
        e[10]: ${e[10]},
        `);

        document.getElementById("eq5").innerHTML = 
        `\\[
            ${e[1]}x${e[2]}${e[3]}y = ${e[10]};  
        \\]`

        MathJax.typesetClear([document.getElementById("eq1"), document.getElementById("eq2"), document.getElementById("eq3"), document.getElementById("eq4"), document.getElementById("eq5")]);
        MathJax.typesetPromise([document.getElementById("eq1"), document.getElementById("eq2"), document.getElementById("eq3"), document.getElementById("eq4"), document.getElementById("eq5")]).then(() => {});

    }

    if(n === 3) {

        //definisco gli oggetti soluzioni x ed y
        let solX = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10), 1, [0, 0, 0, 0, 0, 0]);
        let solY = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10), 1, [0, 0, 0, 0, 0, 0]);
        
        //definisco gli oggetti coefficienti della prima e seconda equazione
        let a = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 2), 1, [0, 0, 0, 0, 0, 0]);
        let b = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 2), 1, [0, 0, 0, 0, 0, 0]);
        let x0 = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);

        let c = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 2), 1, [0, 0, 0, 0, 0, 0]);
        let d = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 2), 1, [0, 0, 0, 0, 0, 0]);
        while(d.coeff() === b.coeff()) {
            Object.defineProperty(d, "num", {value: Math.floor(Math.random()*10 + 1)})
        } 
        let y0 = new Monomial(Math.floor(Math.random()*2), Math.floor(Math.random()*10 + 1), 1, [0, 0, 0, 0, 0, 0]);

        //definisco gli oggetti coefficienti moltiplicativi k1 e k2
        let k1 = new Monomial(0, lcm(a.num, c.num)/a.num, 1, [0, 0, 0, 0, 0, 0]);
        let k2 = new Monomial(0, lcm(a.num, c.num)/c.num, 1, [0, 0, 0, 0, 0, 0]);
        if(product(k1, a).sign === product(k2, c).sign) {
            Object.defineProperty(k2, "sign", {value: (k2.sign + 1)%2});
        }
        

    
        esempio.innerHTML = 
        `<div id="slide-container3" style="min-height: 85vh; border: 0.01rem solid lightgray; padding: 1rem; ">

        <div class="slide3">

            \\[
                \\begin{cases}
                ${a.display()}x  ${b.displayWithSign()}y = ${x0.display()}
                \\\\\\\\
                ${c.display()}x  ${d.displayWithSign()}y = ${y0.display()}
                \\end{cases}
            \\]

            Risolviamo questo sistema con il <b>metodo di eliminazione</b>.
            
        </div>

            <div class="slide3">

                \\[

                    \\color{white}{}

                    \\begin{align*}
                    
                    \\color{green}{k_{1}}&
                    \\\\\\\\
                    \\color{green}{k_{2}}&
                    \\end{align*}
                    
                    \\color{black}{}

                    \\begin{cases}
                    \\color{red}{${a.display()}}\\color{black}{}x  ${b.displayWithSign()}y = ${x0.display()}
                    \\\\\\\\
                    \\color{red}{${c.display()}}\\color{black}{}x  ${d.displayWithSign()}y = ${y0.display()}
                    \\end{cases}
                \\]

                <p>
                    Dobbiamo trovare una combinazione delle due equazioni che annulli il termine con la \\(x\\).
                    <br>
                    In altre parole dobbiamo individuare due numeri \\(\\color{green}{k_{1}}\\) e \\(\\color{green}{k_{2}}\\)
                    tali che 
                </p>

                <br>
                
                <p style="text-align: center">
                    il prodotto tra \\(\\color{green}{k_{1}}\\) e \\(\\color{red}{${a.display()}}\\) 
                    <br>
                    sia opposto 
                    <br>
                    al prodotto tra \\(\\color{green}{k_{2}}\\) e \\(\\color{red}{${c.display()}}\\)
                </p>
                
            </div>
            
            <div class="slide3">

                \\[
                    \\color{white}{}

                    \\begin{align*}
                    
                    \\color{green}{${k1.display()}}&
                    \\\\\\\\
                    \\color{green}{${k2.display()}}&
                    \\end{align*}
                    
                    \\color{black}{}
                    
                    \\begin{cases}
                    \\color{red}{${a.display()}}\\color{black}{}x ${b.displayWithSign()}y = ${x0.display()}
                    \\\\\\\\
                    \\color{red}{${c.display()}}\\color{black}{}x ${d.displayWithSign()}y = ${y0.display()}
                    \\end{cases}
                \\]

                <br>

                <p style="text-align: center">
                    Il prodotto tra \\(\\,\\color{green}{${k1.display()}}\\,\\) e \\(\\,\\color{red}{${a.display()}}\\,\\) è \\(\\,${product(k1, a).display()}\\).
                    <br>
                    Quello tra \\(\\,\\color{green}{${k2.display()}}\\,\\) e \\(\\,\\color{red}{${c.display()}}\\,\\) è \\(\\,${product(k2, c).display()}\\). 
                    <br>
                    Sono opposti!
                </p>

            </div>

            <div class="slide3">

                Moltiplichiamo i numeri che abbiamo trovato per tutti i termini delle due equazioni...

                \\[
                    \\color{white}{}

                    \\begin{align*}
                    
                        \\color{green}{${k1.display()}}&
                        \\\\\\\\
                        \\color{green}{${k2.display()}}&

                    \\end{align*}
                    
                    \\color{black}{}
                    
                    \\begin{cases}
                        \\color{red}{${a.display()}}\\color{black}{}x ${b.displayWithSign()}y = ${x0.display()}
                        \\\\\\\\
                        \\color{red}{${c.display()}}\\color{black}{}x ${d.displayWithSign()}y = ${y0.display()}
                    \\end{cases}
                \\]

                \\[
                \\Downarrow    
                \\]
                        
                \\[
                    \\begin{cases}
                        ${product(a, k1).display()}x ${product(b, k1).displayWithSign()}y = ${product(x0, k1).display()}
                        \\\\\\\\
                        ${product(c, k2).display()}x ${product(d, k2).displayWithSign()}y = ${product(y0, k2).display()}
                    \\end{cases}
                \\]
            </div>

            <div class="slide3">

                Sommiamo i termini delle equazioni membro a membro
        
                <div style="width: fit-content; margin: auto; border-bottom: 0.01rem solid black">
                    \\[
                        \\\\
                        \\color{blue}{+}
                        \\\\
                        \\begin{cases}
                            \\begin{array}{}
                                \\color{blue}{${product(a, k1).display()}x} & ${product(b, k1).displayWithSign()}y & = & ${product(x0, k1).display()}
                                \\\\\\\\
                                \\color{blue}{${product(c, k2).display()}x} & ${product(d, k2).displayWithSign()}y & = & ${product(y0, k2).display()}
                            \\end{array}
                        \\end{cases}
                    \\]
                </div>

                \\[
                    \\color{white}{}
                    
                    \\begin{cases}
                        \\color{black}{}
                        \\begin{array}{}
                            \\,\\,\\color{blue}{//}\\,\\, & \\color{white}{}${sum(product(b, k1), product(d, k2)).displayWithSign()}y & \\color{black}{}= &  \\color{white}{}${sum(product(x0, k1), product(y0, k2)).display()}
                        \\end{array}
                    \\end{cases}
                \\]

            </div>

            <div class="slide3">

                Sommiamo i termini delle equazioni membro a membro
        
                <div style="width: fit-content; margin: auto; border-bottom: 0.01rem solid black">
                    \\[
                        \\\\
                        \\color{blue}{+}
                        \\\\
                        \\begin{cases}
                            \\begin{array}{}
                                ${product(a, k1).display()}x & \\color{blue}{}${product(b, k1).displayWithSign()}y & = & ${product(x0, k1).display()}
                                \\\\\\\\
                                ${product(c, k2).display()}x & \\color{blue}{}${product(d, k2).displayWithSign()}y & = & ${product(y0, k2).display()}
                            \\end{array}
                        \\end{cases}
                    \\]
                </div>

                \\[
                    \\color{white}{}
                    
                    \\begin{cases}
                        \\color{black}{}
                        \\begin{array}{}
                            \\,\\,\\color{black}{//}\\,\\, & \\color{blue}{}${sum(product(b, k1), product(d, k2)).displayWithSign()}y & \\color{black}{}= &  \\color{white}{}${sum(product(x0, k1), product(y0, k2)).display()}
                        \\end{array}
                    \\end{cases}
                \\]

            </div>

            <div class="slide3">

                Sommiamo i termini delle equazioni membro a membro
        
                <div style="width: fit-content; margin: auto; border-bottom: 0.01rem solid black">
                    \\[
                        \\\\
                        \\color{blue}{+}
                        \\\\
                        \\begin{cases}
                            \\begin{array}{}
                                ${product(a, k1).display()}x & ${product(b, k1).displayWithSign()}y & = & \\color{blue}{}${product(x0, k1).display()}
                                \\\\\\\\
                                ${product(c, k2).display()}x & ${product(d, k2).displayWithSign()}y & = & \\color{blue}{}${product(y0, k2).display()}
                            \\end{array}
                        \\end{cases}
                    \\]
                </div>

                \\[
                    \\color{white}{}
                    
                    \\begin{cases}
                        \\color{black}{}
                        \\begin{array}{}
                            \\,\\,\\color{black}{//}\\,\\, & \\color{black}{}${sum(product(b, k1), product(d, k2)).displayWithSign()}y & \\color{black}{}= &  \\color{blue}{}${sum(product(x0, k1), product(y0, k2)).display()}
                        \\end{array}
                    \\end{cases}
                \\]

            </div>


            <div class="slide3">
            
                Sommiamo i termini delle equazioni membro a membro
        
                <div style="width: fit-content; margin: auto; border-bottom: 0.01rem solid black">
                    \\[
                        \\\\
                        \\color{blue}{+}
                        \\\\
                        \\begin{cases}
                            \\begin{array}{}
                                ${product(a, k1).display()}x & ${product(b, k1).displayWithSign()}y & = & ${product(x0, k1).display()}
                                \\\\\\\\
                                ${product(c, k2).display()}x & ${product(d, k2).displayWithSign()}y & = & ${product(y0, k2).display()}
                            \\end{array}
                        \\end{cases}
                    \\]
                </div>

                \\[
                    \\color{white}{}
                    
                    \\begin{cases}
                        \\color{black}{}
                        \\begin{array}{}
                            \\,\\,\\color{black}{//}\\,\\, & ${sum(product(b, k1), product(d, k2)).displayWithSign()}y & = &  ${sum(product(x0, k1), product(y0, k2)).display()}
                        \\end{array}
                    \\end{cases}
                \\]

            </div>

            <div class="slide3">
                Abbiamo così ottenuto l'equazione
                \\[
                    ${sum(product(b, k1), product(d, k2)).display()}y = ${sum(product(x0, k1), product(y0, k2)).display()}
                \\]
                che contiente <b>solo una incognita</b>. Per risolverla basta isolare la \\(y\\):
                \\[
                    y = ${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}    
                \\]
            </div>

            <div class="slide3">
                <nobr>Ora sappiamo che il valore di \\(y\\) è \\(${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}\\).</nobr>
                <br>
                <br>    
                Per trovare anche il valore di \\(x\\) scegliamo una delle due equazioni del sistema, la prima ad esempio, ed al posto della \\(y\\) sostituiamo \\(${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}\\)
                \\[
                    ${a.display()}x  ${b.displayWithSign()}\\color{red}{y}\\color{black}{} = ${x0.display()}
                \\]
                \\[
                    \\Downarrow    
                \\]
                \\[ 
                    ${a.display()}x  ${b.displayWithSign()}\\cdot\\color{red}{\\left(${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}\\right)}\\color{black}{} = ${x0.display()}
                \\]

                Questa equazione ha <b>una sola incognita</b>. Risolviamola.

            </div>
            
        </div>
        <br>

        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <button id="previousSlide-button3" onclick="previousSlide(3)" disabled>Indietro</button>
            <button id="nextSlide-button3" onclick="nextSlide(3)">Avanti</button>
        </div>
            `

            let muliplyInverse = ``;
            if(a.coeff !== 1){
                muliplyInverse = 
                `\\\\\\\\
                & x = ${sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))).display()} \\cdot \\left(${inverse(a).display()}\\right)
                \\\\\\\\
                & x = ${product(sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))), inverse(a)).display()}`;
            }

            let simplifyFraction = ``;
            if(product(sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))), inverse(a)).display() !== simplify(product(sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))), inverse(a))).display()) {

                simplifyFraction = 
                `\\\\\\\\
                & x = ${simplify(product(sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))), inverse(a))).display()}`
            }


            document.getElementById(`slide-container3`).innerHTML += 
            `<div class="slide3">

                \\[
                    \\begin{align*}
                        & ${a.display()}x  ${b.displayWithSign()}\\cdot\\left(${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}\\right) = ${x0.display()}
                        \\\\\\\\\\\
                        & ${a.display()}x  ${product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b).displayWithSign()} = ${x0.display()}
                        \\\\\\\\
                        & ${a.display()}x = ${x0.display()} ${opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b)).displayWithSign()}
                        \\\\\\\\
                        & ${a.display()}x = \\dfrac{${x0.display()} \\cdot ${opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b)).den} ${sign[opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b)).sign]}${opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b)).num}}{${opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b)).den}}
                        \\\\\\\\
                        & ${a.display()}x = ${sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))).display()}
                        ${muliplyInverse}
                        ${simplifyFraction}
                    \\end{align*}
                \\]
            </div>

            <div class="slide3">

                In conclusione, la soluzione del sistema
                \\[
                    \\begin{cases}
                    ${a.display()}x  ${b.displayWithSign()}y = ${x0.display()}
                    \\\\\\\\
                    ${c.display()}x  ${d.displayWithSign()}y = ${y0.display()}
                    \\end{cases}
                \\]

                è la coppia

                \\[
                    \\begin{cases} 
                         x = ${simplify(product(sum(x0, opposite(product(division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))), b))), inverse(a))).display()}
                         \\\\\\\\
                         y = ${division(sum(product(x0, k1), product(y0, k2)), sum(product(b, k1), product(d, k2))).display()}
                    \\end{cases}
                 \\]
            </div>

        `

        console.log(`
        solX: ${solX.display()}
        solY: ${solY.display()}
        a: ${a.display()}
        b: ${b.display()}
        x0: ${x0.display()}

        c: ${c.display()}
        d: ${d.display()}
        y0: ${y0.display()}

        k1: ${k1.display()} 
        k2: ${k2.display()}
        
        product(k1, a).sign: ${product(k1, a).sign}
        product(k1, a).sign + 1)%2: ${(product(k1, a).sign + 1)%2}
        k2.sign: ${k2.sign}
        `)

    }

    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});

    inizialize(n)

}


slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    currentIndex = 0

    slideIndex[n] = 0;

    let slide = document.getElementsByClassName(`slide${n}`)

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
    document.getElementById(`nextSlide-button${n}`).style.display = "block"

    //pulsante previous disabled
    document.getElementById(`previousSlide-button${n}`).disabled = true;

}




