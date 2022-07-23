/*a = [];

for(var i = 0; i < 3; i++) {
    a[i] = new Monomial(rnd(0,1),rnd(1,5),rnd(1,5),[1,2,3,4,5,6])
}
var p = new Polinomial(a);

document.body.innerHTML = "\\["+p.display()+"\\]";
document.body.innerHTML += "<br>\\["+p.redSign(rnd(0,2))+"\\]";
document.body.innerHTML += "<br>\\["+p.redNumb(rnd(0,2))+"\\]";
document.body.innerHTML += "<br>\\["+p.redLit(rnd(0,2))+"\\]";
document.body.innerHTML += "<br>\\["+p.redLett(rnd(0,2),rnd(0,5))+"\\]";
document.body.innerHTML += "<br>\\["+a[0].tillRedSign()+"\\]";
document.body.innerHTML += "<br>\\["+a[0].tillRedNumb()+"\\]";
document.body.innerHTML += "<br>\\["+a[0].tillRedLett(0)+"\\]";
document.body.innerHTML += "<br>\\["+a[0].tillRedLett(3)+p.display()+"\\]";
*/
var container = document.getElementById("container");

var p = [];
p[0] = randomPolynomial(2);


for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 6; j++) {
        p[0].poly[i].literal[j] = 0;
    }
}

Object.defineProperty(p[0].poly[0], "num" , {value: rnd(1,10)});
Object.defineProperty(p[0].poly[0], "den" , {value: 1});
Object.defineProperty(p[0].poly[1], "num" , {value: rnd(1,10)});
Object.defineProperty(p[0].poly[1], "den" , {value: 1});
p[0].poly[0].literal[rnd(3,5)] = rnd(0,3);
p[0].poly[0].literal[rnd(3,5)] = rnd(0,3);
p[0].poly[1].literal[rnd(3,5)] = rnd(0,3);
p[0].poly[1].literal[rnd(3,5)] = rnd(0,3);

p[1] = randomPolynomial(2);

for(let i = 0; i<2; i++) {
    for(let j = 0; j<6; j++) {
        p[1].poly[i].literal[j] = 0;
    }
}

Object.defineProperty(p[1].poly[0], "num" , {value: rnd(1,10)});
Object.defineProperty(p[1].poly[0], "den" , {value: 1});
Object.defineProperty(p[1].poly[1], "num" , {value: rnd(1,10)});
Object.defineProperty(p[1].poly[1], "den" , {value: 1});
p[1].poly[0].literal[rnd(3,5)] = rnd(0,3);
p[1].poly[0].literal[rnd(3,5)] = rnd(0,3);
p[1].poly[1].literal[rnd(3,5)] = rnd(0,3);
p[1].poly[1].literal[rnd(3,5)] = rnd(0,3);

container.innerHTML = '<button id="nextButton" onclick="showStep(0,0,0,1)";>&#8594;</button>';    

container.innerHTML += align("\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = ");

console.log(`${p[0].display()}  ${p[1].display()}`)


let i = 4;
let j = 0;


function showStep(done, i, j, index) {

    
    if(index === 1){
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");        
        var str;
        let indexB = index+1;
        if(done === 0) { 
            done = "";
        } 
        str = "\\left("+p[0].redSign(i)+"\\right)\\left("+p[1].redSign(j)+"\\right) = \\\\  \\\\ &= ";
        str += done;
        if(done === ""){ 
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+");'>&#8594;</button>";  
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        
        container.innerHTML += align(str);
    } 
    
    if(index === 2) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str = ""; 
        let indexB = index+1;
        if(done == 0) { 
            done = ""; 
        }
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &= ";
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedSign()+" \\\\";
        if(done === ""){ 
            done = 0; 
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+");'>&#8594;</button>";  
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML += align(str);  
    }

    if(index === 3) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].redNumb(i)+"\\right)\\left("+p[1].redNumb(j)+"\\right) = \\\\  \\\\ &= ";
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillBlackSign()+" \\\\";
        if(done === ""){ 
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+");'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    if(index === 4) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &= ";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedNumb()+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    
    if(index === 5) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        if(p[0].poly[i].literal[0] === 0 && p[1].poly[j].literal[0] === 0) {
            index = index +2;
        } else {
            var str;
            let indexB = index+1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,0)+"\\right)\\left("+p[1].redLett(j,0)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillBlackNumb()+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            
            container.innerHTML +=align(str);
        }
        
    }

    if(index === 6) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(0)+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    if(index === 7) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        if((p[0].poly[i].literal[1] === 0 && p[1].poly[j].literal[1] === 0) || p[0].poly[i].literal[1] === undefined || p[1].poly[j].literal[1] === undefined) {
            index = index +2;
        } else {
            var str;
            let indexB = index+1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,1)+"\\right)\\left("+p[1].redLett(j,1)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(0)+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            container.innerHTML +=align(str);
        }
        
    } 

    if(index === 8) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(1)+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    if(index === 9) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        if((p[0].poly[i].literal[2] === 0 && p[1].poly[j].literal[2] === 0) || p[0].poly[i].literal[2] === undefined || p[1].poly[j].literal[2] === undefined) {
            index = index +2;
        } else {
            var str;
            let indexB = index+1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,2)+"\\right)\\left("+p[1].redLett(j,2)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(1)+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            container.innerHTML +=align(str);
        }
        
    } 

    if(index === 10) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(2)+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    if(index === 11) {
        
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");

        if((p[0].poly[i].literal[3] === 0 && p[1].poly[i].literal[3] === 0) || p[0].poly[i].literal[3] === undefined || p[1].poly[j].literal[3] === undefined) {
            index = index +2;
        } else {
            var str;
            let indexB = index + 1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,3)+"\\right)\\left("+p[1].redLett(j,3)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(2)+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            container.innerHTML += align(str);
        }
        
    } 

    if(index === 12) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(3)+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }
    
    if(index === 13) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        if((p[0].poly[i].literal[4] === 0 && p[1].poly[i].literal[4] === 0) || p[0].poly[i].literal[4] === undefined || p[1].poly[j].literal[4] === undefined) {
            index = index +2;
        } else {
            var str;
            let indexB = index+1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,4)+"\\right)\\left("+p[1].redLett(j,4)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(3)+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            container.innerHTML +=align(str);
        }
        
    } 

    if(index === 14) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        var str;
        let indexB = index+1;
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(4)+" \\\\";
        if(done === "") {
            done = 0;
            container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
        } else {
            done = done.replaceAll("frac","\\frac");
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML +=align(str);
    }

    if(index === 15) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")");
        if((p[0].poly[i].literal[5] === 0 && p[1].poly[i].literal[5] === 0) || p[0].poly[i].literal[5] === undefined || p[1].poly[j].literal[5] === undefined) {
            index = index +1;
        } else {
            var str;
            let indexB = index+1;
            if(done === 0) { done = "";}
            str = "\\left("+p[0].redLett(i,5)+"\\right)\\left("+p[1].redLett(j,5)+"\\right) = \\\\  \\\\ &=";  
            str += done;
            str += product(p[0].poly[i],p[1].poly[j]).tillRedLett(4)+" \\\\";
            if(done === "") {
                done = 0;
                container.innerHTML = "<button id='nextButton' onclick='showStep("+done+","+i+","+j+","+indexB+")'>&#8594;</button>";
            } else {
                done = done.replaceAll("frac","\\frac");
                container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
            }
            container.innerHTML +=align(str);
        }
        
    } 

    if(index === 16) {
        console.log("showStep("+done+", "+i+", "+j+", "+index+")\n");
        var strAppoggioRed = product(p[0].poly[i],p[1].poly[j]).tillRedLett(5)+" \\\\ ";
        var strAppoggioBlack = product(p[0].poly[i],p[1].poly[j]).tillBlackLett(5);
        strAppoggioBlack.replace("frac","\\frac");
        console.log("strAppoggioBlack: \n"+strAppoggioBlack+"\n");
        var str;
        let indexB = 1;
        console.log("j === p[1].poly.length-1 && i === p[0].poly.length-1): \n"+(j === p[1].poly.length-1 && i === p[0].poly.length-1))
        
        /*if((j === p[1].poly.length-1 && i === p[0].poly.length-1)) {
            console.log("ciao")
            document.getElementById("container").innerHTML = "wdciwudcon"
            
        } else */
            let finished = false;
            console.log("sono entrato anche qui")
            if(j<p[1].poly.length-1){
                j++;  
            } else {
                j = 0;
                if(i<p[0].poly.length-1) {
                    i++;
                } else {
                    finished = true;
                }
            }

        
        
        if(done === 0) { done = "";}
        str = "\\left("+p[0].display()+"\\right)\\left("+p[1].display()+"\\right) = \\\\  \\\\ &=";  
        str += done;
        done += strAppoggioBlack;
        done = done.replaceAll("frac","\\frac");
        str += strAppoggioRed;
        console.log("(done,i,j,indexB): "+"\n("+done+", "+i+", "+j+", "+indexB+")");
        if(finished) {
            container.innerHTML = '<button id="nextButton" onclick="showStep(0,0,0,1)";>&#8594;</button>';   
            p[0] = randomPolynomial(2);

for(let i = 0; i<2; i++) {
    for(var j = 0; j<6; j++) {
        p[0].poly[i].literal[j] = 0;
    }
}

    Object.defineProperty(p[0].poly[0], "den" , {value: 1});
    Object.defineProperty(p[0].poly[1], "den" , {value: 1});
    p[0].poly[0].literal[rnd(0,5)] = rnd(0,3);
    p[0].poly[0].literal[rnd(0,5)] = rnd(0,3);
    p[0].poly[1].literal[rnd(0,5)] = rnd(0,3);
    p[0].poly[1].literal[rnd(0,5)] = rnd(0,3);

    p[1] = randomPolynomial(2);

    for(let i = 0; i<2; i++) {
        for(var j = 0; j<6; j++) {
            p[1].poly[i].literal[j] = 0;
        }
    }

    Object.defineProperty(p[1].poly[0], "den" , {value: 1});
    Object.defineProperty(p[1].poly[1], "den" , {value: 1});
    p[1].poly[0].literal[rnd(0,5)] = rnd(0,3);
    p[1].poly[0].literal[rnd(0,5)] = rnd(0,3);
    p[1].poly[1].literal[rnd(0,5)] = rnd(0,3);
    p[1].poly[1].literal[rnd(0,5)] = rnd(0,3);
            
        } else {
            container.innerHTML = "<button id='nextButton' onclick='showStep(&apos;"+done+"&apos;, "+i+","+j+","+indexB+")'>&#8594;</button>";
        }
        container.innerHTML += align(str);  
        if(finished) {
            //setTimeout(function(){ alert("Moltiplicazione finita! Premi il pulsante per effettuarne un'altra"); }, 1100);
        }
    }


    MathJax.typesetClear([container]);
    MathJax.typesetPromise([container]).then(() => {});

    
}

function align(text) {
    return "\\[ \\begin{align*} &\\color{white}{=}\\color{black}{}"+text+" \\\\ \\end{align*} \\]";

}


///////////////////////////////////////////////////////////////////////////

