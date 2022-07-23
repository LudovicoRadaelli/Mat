function generaEsempio(n) {

    let esempio =document.getElementById("esempio"+n);

    if(n === 1) {

        
    }
    
    MathJax.typesetClear([esempio]);
    MathJax.typesetPromise([esempio]).then(() => {});
}