slideIndex = 0;

//funzione per passare alla slide successiva
function nextSlide() {
    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("slide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex++;

    if(slideIndex !== 0 ) {
        //pulsante previous abiliatato
        document.getElementById("previousSlide-button").disabled = false;
    }

    //se ci sono ancora slide da mostrare passo alla successiva
    if(slideIndex < slide.length) {
        slide[slideIndex].style.display = "block";
    }

    //le slide da mostrare sono finite. rendo nuovamente visibile l'ultima slide (altimenti sparisce)
    //e scrollo la vista al riquadro conclusiovo
    if(slideIndex  === slide.length -1) {
        slide[slide.length-1].style.display = "block";
        document.getElementById(`nextSlide-button`).disabled = true;  
    }

}

//funzione per passare alla slide successiva
function previousSlide() {

    
    //ogni volta che il bottone viene premuto scrollo in modo da centrare le slide
    document.location.href=`#slide-container`

    //nascondo tutte le slide
    let slide = document.getElementsByClassName("slide")
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    //aggiorno l'indice
    slideIndex--;


    //passo alla precedente. se è la prima slide disattivo il tasto previous
    slide[slideIndex].style.display = "block";
    slide[slideIndex].style.fontSize = "1.1rem";
    if(slideIndex === 0) {
        document.getElementById(`previousSlide-button`).disabled = true;
    } 

    //nel caso in cui il pulsante next sia disabilitato lo riattivo
    if(document.getElementById(`nextSlide-button`).disabled === true) {
        document.getElementById(`nextSlide-button`).disabled = false;  
    }


}