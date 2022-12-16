
function verificar() {
    let nascionalidade = document.querySelector('#nascionalidade').value;
    let res = document.querySelector('#res');
        if (nascionalidade === 'Brasil' || nascionalidade === 'brasil') {
            res.innerHTML = `<p><strong>Você é Brasileiro!</strong> &#x1F389</p>`
        } else {
            res.innerHTML = `<p>Você não é brasileiro... &#x1F62D</p>`
        }
}