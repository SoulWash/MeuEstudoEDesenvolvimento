
function contar(){
    let cNP1 = Number(document.querySelector('#cNP1').value);
    let cNP2 = Number(document.querySelector('#cNP2').value);
    let res = document.querySelector('#res');
    res.innerHTML += `<h2>Contando de ${cNP1} até ${cNP2}</h2>`


    if (cNP1 < cNP2) {
        while (cNP1 <= cNP2) {
            res.innerHTML += ` ${cNP1}&#x1F449`
            cNP1++
        } 
    } else if (cNP1 > cNP2){
        while (cNP1 >= cNP2) {
            res.innerHTML += ` ${cNP1}&#x1F449`
            cNP1-=1
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    res.innerHTML += ` &#x1F3C1`;




}