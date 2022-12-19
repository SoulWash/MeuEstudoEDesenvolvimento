
function clicou() {

    let ano = Number(prompt('Qual é o ano que você quer verificar? '));
    let res = document.querySelector('#res');
    res.innerHTML = `<h2><strong>Analisando o ano de ${ano}</strong><h2>`

    if (ano % 4 == 0 || ano % 400 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <strong id="eBissexto">É BISSEXTO</strong> ✅</p>`
    } else if (ano % 100 != 0) {
        res.innerHTML += `<p>O ano de ${ano} <strong id="naoEBissexto">NÃO É BISSEXTO</strong> ❌</p>`
    } else {
        res.innerHTML = `<h2>[ERRO] Digite Novamente!</h2>`
    }
}