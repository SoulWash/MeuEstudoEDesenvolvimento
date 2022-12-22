/*  
function contar(){
    let cont = 0;
    let numero = Number(document.querySelector('#cN').value);
    let res = document.querySelector('#res');
    res.innerHTML = `<h3>Tabuada de ${numero}</h3>`;

    while (cont <= 10) {
        res.innerHTML += `<p>${numero} X ${cont}=<strong>${cont * numero}</strong></p>`;
        cont++
    }
}
*/


/* FOR */

function contar(){
    let numero = Number(document.querySelector('#cN').value);
    let res = document.querySelector('#res');
    res.innerHTML = `<h3>Tabuada de ${numero}</h3>`;

    for (let cont = 0; cont <= 10; cont++) {
        res.innerHTML += `<p>${numero} X ${cont}=<strong>${cont * numero}</strong></p>`;
        
    }
}