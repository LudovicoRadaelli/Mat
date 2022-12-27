/* ------------ HTML ------------ */
/* 

    <div>
        <h3 class="yellow">Tool per angoli multipli</h3>

        <br>

        <p class="gray">
            Trascinando il punto nero sulla circonfereza potete visualizzare seno, coseno e tangente dell'angolo che vi interessa e confrontarli con seno, coseno e tangente dell'angolo di cui è multiplo.
            <br>
            Potete usare questo strumento per risolvere gli esercizi che seguono.
        </p>

        <br>

        <div class="geogebra-container">
            <div id="geogebra2"></div>
        </div>
        <br>
        <div class="input-container" style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; font-size: 0.9rem;">
            <div class="input">
                <input type="radio" class="input" name ="griglia" checked = "checked" onclick="cambiaGriglia(30)"> <span> Multipli di \(\dfrac{\pi}{6}\)</span>
            </div>
            <div class="input">
                <input type="radio" class="input" name ="griglia" onclick="cambiaGriglia(45)"> <span> Multipli di \(\dfrac{\pi}{4}\)</span>
            </div>
            <div class="input">
                <input type="radio" class="input" name ="griglia" onclick="cambiaGriglia(60)"> <span> Multipli di \(\dfrac{\pi}{3}\)</span>    
            </div>
        </div>
    </div>

*/

/* ------------ JS ------------ */


    var ggbApp2 = new GGBApplet({
        "appName": "classic", 
        "id": "gg2",
        "showToolBar": false, 
        "showAlgebraInput": false, 
        "showMenuBar": false, 
        "enableShiftDragZoom": false,
        "scaleContainerClass":"geogebra-container",
        "material_id":"uyg8bgbc"}, true
    );

    window.addEventListener("load", function() { 
        ggbApp2.inject('geogebra2');
    });

    

    function cambiaGriglia(n) {
        /* for(let i = 0; i < 2; i++) {
            
            document.getElementsByClassName("input")[i].checked = false;
        } */
        gg2.setValue("b",n)
    }

