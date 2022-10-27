var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"gkrdftge"}, 
    true);   

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"nuz2ck6s"}, 
    true);   

var ggbApp3 = new GGBApplet({
    "appName": "classic", 
    "id": "gg3",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"ebvvyep3"}, 
    true);   

var ggbApp4 = new GGBApplet({
    "appName": "classic", 
    "id": "gg4",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "material_id":"dsubd9ay"}, 
    true);  


window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
    ggbApp3.inject('geogebra3');
    ggbApp4.inject('geogebra4');
});


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

    if(n === 1) {
        for(let i = 1; i <= 10; i++) {
            gg1.setVisible(`l${i}`, false)
        }
        gg1.setVisible(`f`, false)
    } else if(n === 2) {
        for(let i = 1; i <= 10; i++) {
            gg2.setVisible(`l${i}`, false)
        }
        gg2.setVisible(`f`, false)
    }

    //aggiorno l'indice
    slideIndex[n]++;

    console.log(`slideIndex[${n}]: ${slideIndex[n]}`)

    if(n === 1) {
        if(slideIndex[n] === 9) {
            gg1.setVisible(`l8`, true)
        } else if(slideIndex[n] === 10) {
            
            gg1.setVisible(`f`, true)
            gg1.setVisible(`l8`, true)
        } else {
            gg1.setVisible(`l${slideIndex[n]}`, true)
        }
    } else if(n === 2) {
        if(slideIndex[n] === 9) {
            gg2.setVisible(`l8`, true)
        } else if(slideIndex[n] === 10) {
            
            gg2.setVisible(`f`, true)
            gg2.setVisible(`l8`, true)
        } else {
            gg2.setVisible(`l${slideIndex[n]}`, true)
        }
    }

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

    if(n===1) {
        for(let i = 1; i <= 10; i++) {
            gg1.setVisible(`l${i}`, false)
        }
        gg1.setVisible(`f`, false)
    } else if(n===2) {
        for(let i = 1; i <= 10; i++) {
            gg2.setVisible(`l${i}`, false)
        }
        gg2.setVisible(`f`, false)
    }

    //aggiorno l'indice
    slideIndex[n]--;

    if(n===1) {
        if(slideIndex[n] === 9) {
            gg1.setVisible(`l8`, true)
        } else if(slideIndex[n] === 10) {
            
            gg1.setVisible(`f`, true)
            gg1.setVisible(`l8`, true)
        } else {
            gg1.setVisible(`l${slideIndex[n]}`, true)
        }
    } else if(n===2) {
        if(slideIndex[n] === 9) {
            gg2.setVisible(`l8`, true)
        } else if(slideIndex[n] === 10) {
            
            gg2.setVisible(`f`, true)
            gg2.setVisible(`l8`, true)
        } else {
            gg2.setVisible(`l${slideIndex[n]}`, true)
        }
    }
    


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

let currentIndex = 0


function inizialize(n) {

    currentIndex = 0

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
    document.getElementsByClassName(`slide${n}`)[0].style.display = "block"

    //pulsante previous disabled
    document.getElementById(`previousSlide-button${n}`).disabled = true;

}

inizialize(1)
inizialize(2)

/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */
