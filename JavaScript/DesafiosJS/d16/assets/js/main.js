

function contar() {
    let cont = Number(document.querySelector('#ini').value);
    let quantdd = Number(document.querySelector('#fim').value);
    let passos = Number(document.querySelector('#passo').value);
    let res = document.querySelector('#res');


    if (cont == 0 || quantdd == 0) {
        res.innerHTML = `Impossível contar`
    } else {
        if (passos <= 0) {
            alert('Passo inválido! Considere o Passo com 1')
            passos = 1;
        }
        if (cont < quantdd) {
            res.innerHTML = `<h3>Contando...</h3>`;
            for (let c = cont; c <= quantdd; c += passos) {
                res.innerHTML += ` ${c}&#x1F449`;
            }
            res.innerHTML += ` &#x1F3C1`;
        } else if (cont > quantdd) {
            res.innerHTML = `<h3>Contando...</h3>`;
            for (let c = cont; c >= quantdd; c -= passos) {
                res.innerHTML += ` ${c}&#x1F449`;
            }
        } else {
            res.innerHTML = `Não é possível contar, pois os números são iguais`
        }
    }
}