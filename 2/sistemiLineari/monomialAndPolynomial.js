function Monomial(sign, num, den, literal){
    
    //segno
    this.sign = sign;
    
    //parte numerica 
    this.num = num;
    this.den = den;
    //parte this.letterale
    this.literal = literal;

    //questo permette di introdurre anche altre this.lettere 
    //(basta modificare una di quelle che compaiono nell'array)
    this.letter = ["a","b","c","x","y","z"]

    //per scrivere la funzione su MathJax senza segno + davanti
    this.display = function() {

        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    str += this.letter[i];
                } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                }
            }
        }

        /* Per controllare il caso in cui il monomio sia 1 */
        if(this.literal[0] === 0 && this.literal[1] === 0 && this.literal[2] === 0 && this.literal[3] === 0 && this.literal[4] === 0 && this.literal[5] === 0 && (this.num === 1 && this.den === 1)) {

            str = "";

            if(this.sign == 0) {
                str = "1"
            } else {
                str = "-1"
            }

        }

        /* Per controllare il caso in cui il monomio sia 0 */
        if(this.num === 0) {

            str = "0";

        }
        
        return str
    }

     //per scrivere la funzione su MathJax con segno + davanti
     this.displayWithSign = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    str += this.letter[i];
                } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                }
            }
        }

        
        if(this.literal[0] === 0 && this.literal[1] === 0 && this.literal[2] === 0 && this.literal[3] === 0 && this.literal[4] === 0 && this.literal[5] === 0 && (this.num === 1 || this.num === -1)) {
            
            if(this.sign === 0) {
                str = "+1"
            } else {
                str = "-1"
            }
        }
        

        return str
    }

    //evidenzia il monomio del colore passato come parametro
    this.color = function(color) {
        let str = this.display();
        str = `\\color{${color}}{${str}}\\color{black}{}`
        return str
    }

    //evidenzia il segno
    this.redSign = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "\\color{red}{-}";
        } else {
            str +="\\color{red}{+}"
        }

        str += "\\color{black}{"

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    str += this.letter[i];
                } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                }
            }
        }

        str += "}"

        
        if(this.literal[0] === 0 && this.literal[1] === 0 && this.literal[2] === 0 && this.literal[3] === 0 && this.literal[4] === 0 && this.literal[5] === 0 && (this.num === 1 || this.num === -1)) {
            console.log(`${this.literal}`)
            if(this.sign === 0) {
                str = "\\color{red}{+}\\color{black}{1}"
            } else {
                str = "\\color{red}{-}\\color{black}{1}"
            }
        }
        
        return str
    }

    //evidenzia la parte numerica
    this.redNumb = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }

        if(this.den === 1) {
            if(this.num !==1){
                str += "\\color{red}{"+this.num+"}";
            } else {
                str += "\\color{red}{1}"
            }
        } else {
            str += "\\color{red}{\\dfrac{"+this.num+"}{"+this.den+"}}"
        }

        str += "\\color{black}{"
        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    str += this.letter[i];
                } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                }
            }
        }
        str += "}"
        return str
    }

    //evidenzia tutta la parte this.letterale
    this.redLit = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        str += "\\color{red}{"            
        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    str += this.letter[i];
                } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                }
            }
        }
        str += "}"

        return str
    }

    //evidenzia solo l'esponente l-esimo
    this.redLett = function(l) {
        var redIndex = l;
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }
        
        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    if(i === redIndex){
                        str += "\\color{red}{"+this.letter[i]+"}\\color{black}{";
                    } else {
                        str += this.letter[i];
                    }
                } else {
                    if(i === redIndex){
                        str += "\\color{red}{"+this.letter[i]+"^{"+this.literal[i]+"}}\\color{black}{";
                    } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                    }   
                    
                }
            }
        }

        if(this.literal[l] !== 0){ //se non c'è la this.lettera da evidenziare questa parentesi
            str += "}";            //genera un errore
        }   

        return str
    }

    //disegna solo il segno in rosso
    this.tillRedSign = function() {
        var str = "\\color{red}{";
        
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        str += "}";

        return str
    }

    ////disegna solo il segno in nero
    this.tillBlackSign = function() {
        var str = "";
        
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        return str
    }

    //disegna fino al numero, con numero in rosso
    this.tillRedNumb = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }  else {
            str += "+"
        }

        str += "\\color{red}{"
        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }
        str += "}"
        return str
    }

    //disegna fino al numero, con numero in nero
    //scrive il segno anche nel caso in cui sia +
    this.tillBlackNumb = function() {
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        return str
    }

    //disegna fino alla l-esima this.lettera, con la this.lettera in rosso
    this.tillRedLett = function(l) {
        var redIndex = l;
        var str = "";
    
        if(this.literal[l] === 0) {
            if(l === 0) {
                str = this.tillBlackNumb();
            } else {
                let newL = l-1
                str = this.tillBlackLett(newL);
            }
            
        } else {

            if(this.sign === 1) {
                str += "-";
            }  else {
                str += "+"
            }

            if(this.den === 1) {
                if(this.num !==1){
                str += this.num;
                }
            } else {
                str += "\\dfrac{"+this.num+"}{"+this.den+"}"
            }
            
            

            

            for(let i = 0; i<this.literal.length; i++) {
                if(this.literal[i] !== 0) {
                    if(this.literal[i] === 1) {
                        if(i === redIndex){
                            str += "\\color{red}{"+this.letter[i]+"}\\color{black}{";
                            break;
                        } else {
                            str += this.letter[i];
                        }
                    } else {
                        if(i === redIndex){
                            str += "\\color{red}{"+this.letter[i]+"^{"+this.literal[i]+"}}\\color{black}{";
                            break;
                        } else {
                        str += this.letter[i]+"^{"+this.literal[i]+"}";
                        }   
                        
                    }
                }
            }
            str += "}";

        }

        return str
    }

     //disegna fino alla l-esima this.lettera, con la this.lettera in nero
     this.tillBlackLett = function(l) {
        var redIndex = l;
        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }
        
        
        for(let i = 0; i<this.literal.length; i++) {
            if(this.literal[i] !== 0) {
                if(this.literal[i] === 1) {
                    if(i === redIndex){
                        str += this.letter[i];
                        break;
                    } else {
                        str += this.letter[i];
                    }
                } else {
                    if(i === redIndex){
                        str += this.letter[i]+"^{"+this.literal[i]+"}";
                        break;
                    } else {
                    str += this.letter[i]+"^{"+this.literal[i]+"}";
                    }   
                    
                }
            }
        }

        return str
    }

    this.displayCoeff  = function() {

        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        }

        if(this.den === 1) {
            if(this.num !== 1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }


        /* Per controllare il caso in cui il monomio sia 1 */
        /* if((this.num === 1 && this.den === 1)) {

            str = "";

            if(this.sign == 0) {
                str = "1"
            } else {
                str = "-1"
            }

        } */

        /* Per controllare il caso in cui il monomio sia 0 */
        /* if(this.num === 0) {

            str = "0";

        } */
        
        return str

    }

    this.displayCoeffWithSign = function() {

        var str = "";
    
        if(this.sign === 1) {
            str += "-";
        } else {
            str += "+"
        }

        if(this.den === 1) {
            if(this.num !==1){
            str += this.num;
            }
        } else {
            str += "\\dfrac{"+this.num+"}{"+this.den+"}"
        }

        
        /* if(this.num === 1 || this.num === -1) {
            
            if(this.sign === 0) {
                str = "+1"
            } else {
                str = "-1"
            }
        } */
        

        return str

    }

    this.coeff = function() {
        let coeff = parseFloat(this.num/this.den);
        if(this.sign === 1) {
            coeff = -coeff;
        }
        return coeff
    }

    this.xExp = function() {
        return this.literal[3];
    }

    //valuta un polinomio nella sola incognita x in un punto c assegnato
    this.evalX = function(c) {
        return this.coeff()*Math.pow(c, this.xExp());
    }

    //valuta un polinomio nella sola incognita x in un punto c assegnato (funziona solo per valori interi)
    //defColor è il colore di default, mentre subColor è il colore della stringa sostituita
    this.displayEvalX = function(c, defColor, subColor) {
        let str = `${this.displayWithSign()}`;
        str = str.replace(/x/g, `\\color{${subColor}}{\\left(${c}\\right)}\\color{${defColor}}{}`)

        return str 
    }
}


function randomMonomial() {
    var a = new Monomial(rnd(0,1),rnd(1,9),rnd(1,5),[rnd(0,5),rnd(0,5),rnd(0,5),rnd(0,5),rnd(0,5),rnd(0,5)]);
    simplify(a);
    return a
}


//Per costruire l'oggetto polinomio do in input un array di monomi 
function Polynomial(v) {

    this.term = v;
    
    this.display = function() {

        var str = "";

        for(var i = 0; i < this.term.length; i++){
            if(i !== 0 && this.term[i].sign === 0) {
                str += "+";
                str += this.term[i].display();
            } else {
                str += this.term[i].display();
            }
        }
        
        return str
    }

    this.displayWithSign = function() {
        
        let segnoStr = ``;
        if(this.term[0].sign === 0) {
            segnoStr =`+`;
        }
        return segnoStr + this.display()
        
    }


    this.redSign = function(m) {

        var str = "";

        for(var i = 0; i < this.term.length; i++){
            if(i !== 0 && this.term[i].sign === 0) {
                if(i === m){
                    str += "\\color{red}{+}";
                    str += "\\color{black}{}";
                    str += this.term[i].display();
                } else {
                    str += "+";
                    str += this.term[i].display();
                }
            } else {
                if(i === m) {
                    str += this.term[i].redSign();
                } else {
                    str += this.term[i].display();
                }
            }
        }
        
        return str
    }

    this.redNumb = function(m) {

        var str = "";

        for(var i = 0; i < this.term.length; i++){
            if(i !== 0 && this.term[i].sign === 0) {
                if(i ===m) {
                    str += "+";
                    str += this.term[i].redNumb();
                } else {
                str += "+";
                str += this.term[i].display();
            }
            } else {
                if(i === m) {
                    str += this.term[i].redNumb();
                } else {
                str += this.term[i].display();
                }
            }
        }
        
        return str
    }

    this.redLit = function(m) {

        var str = "";

        for(var i = 0; i < this.term.length; i++){
            if(i !== 0 && this.term[i].sign === 0) {
                if(i === m) {
                    str += "+";
                    str += this.term[i].redLit();
                    str += "\\color{black}{";    
                } else {
                    str += "+";
                    str += this.term[i].display();    
                } 
            } else {
                if(i === m) {
                    str += this.term[i].redLit();
                    str += "\\color{black}{";
                } else {
                    str += this.term[i].display();
                }   
            }
                
        }
        str += "}";

        return str
    }

    this.redLett = function(m,l) {
        redIndex = l;

        var str = "";

        for(var i = 0; i < this.term.length; i++){
            if(i !== 0 && this.term[i].sign === 0) {
                if(i === m) {
                    str += "+";
                    str += this.term[i].redLett(redIndex);
                } else {
                    str += "+";
                    str += this.term[i].display();
                }
            } else {
                if(i === m) {
                    str += this.term[i].redLett(redIndex);
                } else {
                    str += this.term[i].display();
                }
            }
        }
        return str
    }
}


function randomPolynomial(numAdd) {
    var mono = [];
    for(var i = 0; i < numAdd; i++) {
         mono.push(randomMonomial());
    }
    return new Polynomial(mono);
    
}

//somma tra monomi
function sum(a,b) {
    var s = new Monomial();
    for(var i = 0; i < a.literal.length; i++) {
        if(a.literal[i] !== b.literal[i]) {
            return
        }
    }
    
    let aNum;
    if(a.sign === 1) {
        aNum = -a.num;
    } else {
        aNum = a.num;
    }

    let bNum;
    if(b.sign === 1) {
        bNum = -b.num;
    } else {
        bNum = b.num;
    }
    s.num = lcm(a.den,b.den)/a.den*aNum+lcm(a.den,b.den)/b.den*bNum;
    if(s.num > 0) {
        s.sign = 0;
    } else {
        s.num = -s.num;
        s.sign = 1;
    }
    s.den = lcm(a.den,b.den);
    s.literal = a.literal;
    
    return s
}

//opposto di un dato monomio
function opposite(a) {
    let b = new Monomial((a.sign + 1)%2, a.num, a.den, a.literal);
    return b
}

//sottrazione tra monomi
function difference(a, b) {
    let c = opposite(b);
    let d = sum(a, c)
    return d
}

//prodotto tra monomi
function product(a,b) {
    
    var pSign = (a.sign + b.sign)%2; 
    
    var pNum = a.num*b.num;
    var pDen = a.den*b.den; 

    let length = Math.max(a.literal.length,b.literal.length);
    var pLiteral = [];
    for(var i = 0; i < length; i++) {
        pLiteral[i] = a.literal[i] + b.literal[i]; 
    }

    var p = new Monomial(pSign,pNum,pDen,pLiteral);
    
    return p 

}

//divisione tra monomi
function inverse(a) {
    
    var iSign = a.sign; 
    
    var iNum = a.den;
    var iDen = a.num;

    var iLiteral = [];
    for(var i = 0; i < 6; i++) {
        iLiteral[i] = a.literal[i]; 
    }

    var i = new Monomial(iSign, iNum, iDen, iLiteral);
    
    return simplify(i)

}

//divisione tra monomi
function division(a,b) {
    
    var dSign = (a.sign + b.sign)%2; 
    
    var dNum = a.num*b.den;
    var dDen = a.den*b.num;

    var dLiteral = [];
    for(var i = 0; i < 6; i++) {
        dLiteral[i] = a.literal[i] - b.literal[i]; 
    }

    var d = new Monomial(dSign, dNum, dDen, dLiteral);
    
    return simplify(d)

}

function simplify(a) {
    var gdc = gcd(a.num,a.den);
    a.num = a.num/gdc;
    a.den = a.den/gdc;
    return a
}

//mcm tra due numeri
function lcm(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
 }
 //MCD tra due numeri
 function gcd(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
//numero random compreso tra min e max (inclusi)
function rnd(min,max) {
    return Math.floor(Math.random() * (max+1 - min) ) + min;
}

//evidenzia il polinomi del colore passato come parametro
color = function(col, str) {
    str = `\\color{${col}}{${str}}\\color{black}{}`
    return str
}



/*
document.body.innerHTML += "<br>\\["+a.redSign()+"\\]";
document.body.innerHTML += "<br>\\["+a.redNumb()+"\\]";
document.body.innerHTML += "<br>\\["+a.redLit()+"\\]";
document.body.innerHTML += "<br>\\["+a.redLett("c")+"\\]";
document.body.innerHTML += "<br>\\[\\begin{align*} \\dfrac{1}{2}x^{2}+2 = \\\\";
document.body.innerHTML += "= \\dfrac{1}{2}x^{2}+2 = \\\\";
document.body.innerHTML += "= \\dfrac{1}{2}x^{2}+2 = \\\\";
document.body.innerHTML += "\\end{align*}\\] ";
document.body.innerHTML += "<br>\\["+b.display()+"\\]";
document.body.innerHTML += "<br>\\["+p1.display()+"\\]";*/


