
function verificar() {
    let precoAnterior = Number(prompt('Qual era o preço anterior do produto? '));
    let precoAtual = Number(prompt('Qual é o preço atual do produto? '));

    let res = document.querySelector('div#res');
    res.innerHTML = `<h2><strong>Analisando os valores informados</strong></h2>`;
    res.innerHTML += `<p>O produto custava R$ ${precoAnterior.toFixed(2).replace('.',',')} e agora custa ${precoAtual.toFixed(2).replace('.',',')}.</p>`;

    let diferenca = Math.abs(precoAnterior - precoAtual);
    let variacaoMaior =   Math.abs(((precoAtual - precoAnterior) / precoAtual) * 100);
    let variacaoMenor =   Math.abs(((precoAtual - precoAnterior) / precoAnterior) * 100);
    if (precoAtual > precoAnterior) {
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
        res.innerHTML += `<p>O preço subiu ${diferenca.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p>Uma variação de ${variacaoMenor.toFixed(1).replace('.',',')}% para cima</p>`;
    } else if ( precoAtual < precoAnterior) {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`;
        res.innerHTML += `<p>O preço caiu ${diferenca.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p>Uma variação de ${variacaoMaior.toFixed(1).replace('.',',')}% pra baixo</p>`;
    } else {
        res.innerHTML += `<p>Não teve nenhuma mudança nos valor.</p>`;
    }
}