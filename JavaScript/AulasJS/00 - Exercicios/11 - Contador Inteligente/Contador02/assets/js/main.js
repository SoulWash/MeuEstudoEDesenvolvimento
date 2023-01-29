
function contar(){
    let cont = 0;
    let cNP = Number(document.querySelector('#cNP').value);
    let res = document.querySelector('#res');
    res.innerHTML += `<h2>Contando de ${cont} até ${cNP}</h2>`
    while (cont <= cNP) {
        res.innerHTML += ` ${cont}&#x1F449`
        cont++
    } 
    res.innerHTML += ` &#x1F3C1`;
}