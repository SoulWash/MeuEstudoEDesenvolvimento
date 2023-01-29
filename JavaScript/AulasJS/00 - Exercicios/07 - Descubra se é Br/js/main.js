
let nascio = document.querySelector('#nascionalidade');
let res = document.querySelector('#res');


function brasileiro(n){
    if(n == 'Brasil' || n == 'brasil' || n =='brazil' || n == 'Brazil' || n == 'BR' || n == 'Br') {
        return `<p><strong>Você é Brasileiro!</strong> &#x1F389</p>`;
    } else {
        return `<p>Você não é brasileiro... &#x1F62D</p>`
    }
}

function alemao(n){
    if(n == 'Alemanha' || n == 'Germany' || n == 'Deutschland') {
        return true
    } else {
        return false
    }
}



function verificar() {
    res.innerHTML = brasileiro(nascio.value);

    if (brasileiro(nascio.value) && !alemao(nascio.value)) {
        res.innerHTML += `<h1>Seja bem-vindo aqui!</h1>`;
    } else {
        res.innerHTML += `<h1>Mano, 7x1 nunca mais!</h1>`
    }
    
    nascio.value = '';
    nascio.focus();
}
