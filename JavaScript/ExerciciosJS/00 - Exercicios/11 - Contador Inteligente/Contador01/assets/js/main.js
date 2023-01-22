
function iniciar() {
    let contador = 1;
    let res = document.querySelector('#res');

    while (contador <= 10) {
        res.innerHTML += ` ${contador}&#x1F449`;
        contador++
    }
    res.innerHTML += ` &#x1F3C1`;
}

/* Contando de 1 até 10 (marcando os pares) */

function clicou() {
    let cont = 1;
    let result = document.querySelector('#result');

    while (cont <= 10) {
        if (cont % 2 === 0) {
            result.innerHTML += ` <mark>${cont}&#x1F449</mark>`;
        } else {
            result.innerHTML += ` ${cont}&#x1F449`;
        }
        cont++
    }
    result.innerHTML += ` &#x1F3C1`;
}

/* Mostrando só os pares */

function mostrarPares() {
    let par = 2;
    let mostrar = document.querySelector('#mostrar');

    while (par <= 10) {
            mostrar.innerHTML += ` ${par}&#x1F449`;
        par+=2
    }
    mostrar.innerHTML += ` &#x1F3C1`;
}

/* Contagem regressiva */

function regressiva() {
    let ContRegre = 10;
    let reg = document.querySelector('#reg');

    while (ContRegre >= 1) {
        reg.innerHTML += ` ${ContRegre}&#x1F449`;
        ContRegre-=1
    }
    reg.innerHTML += ` &#x1F3C1`;
}

/* Contagem regressiva (marcando os impares)*/

function regImpar() {
    let RegreImp = 10;
    let impar = document.querySelector('#impar');

    while (RegreImp >= 1) {
        if (RegreImp % 2 != 0){
            impar.innerHTML += ` <mark>${RegreImp}&#x1F449</mark>`;
        } else {
            impar.innerHTML += ` ${RegreImp}&#x1F449`;
        }
        RegreImp-=1
    }
    impar.innerHTML += ` &#x1F3C1`;
}