

let num = document.querySelector('#num');
let res = document.querySelector('#res');


function parImpar(n){
    if(Number(n) % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

function clicou(){
    let resp = parImpar(num.value)
    res.innerHTML += `<h3>O número é ${resp}</h3>`;
}

