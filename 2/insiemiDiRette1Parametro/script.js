var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "material_id":"aedgbcgn",
    "scaleContainerClass":"geogebra-container"}, 
    true);
        
    
    window.addEventListener("load", function() { 
        ggbApp1.inject('geogebra1');
    });


    function disegnaInsieme(n) {

        //nascondo tutte le formule
        document.getElementById(`insieme1`).style.display = "none";
        document.getElementById(`insieme2`).style.display = "none";
        document.getElementById(`insieme3`).style.display = "none";

        //nascondo tutti gli insiemi sul canvas di Geogebra
        gg1.setVisible("d",false);
        gg1.setVisible("h",false);

        gg1.setVisible("k",false);
        gg1.setVisible("f",false);


        gg1.setVisible("b",false);
        gg1.setVisible("g",false);

        //mostro la formula che mi insteressa
        document.getElementById(`insieme${n}`).style.display = "block";


        //mostro l'insieme che mi interessa sul canvas e la formula relativa
        if(n === 1) {
            gg1.setVisible("d",true);
            gg1.setVisible("h",true);
        }

        if(n === 2) {
            gg1.setVisible("b",true);
            gg1.setVisible("g",true);

        }

        if(n === 3) {
            gg1.setVisible("f",true);
            gg1.setVisible("k",true);
        }
    } 

    document.getElementById(`insieme3`).style.display = "block";