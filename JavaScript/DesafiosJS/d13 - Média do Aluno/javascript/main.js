
function resultado() {
    let name = prompt('Qual o nome do aluno? ');
    let primeiraNota = Number(prompt(`Qual a primeira nota do(a) aluno(a) ${name}: `));
    let segundaNota = Number(prompt(`Qual a segunda nota do(a) aluno(a) ${name}: `));
    let mediaAtual = (primeiraNota + segundaNota) / 2;
    let res = document.querySelector('section#info');
    res.innerHTML = `<h2>Analisando a situação do(a) aluno(a) ${name}.</h2>`
    res.innerHTML += `<p>Com as notas ${primeiraNota.toFixed(2).replace('.',',')} e ${segundaNota.toFixed(2).replace('.',',')}, <strong>a média é ${mediaAtual.toFixed(2).replace('.',',')}</strong>.</p>`
    if (mediaAtual > 6) {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno(a) está <strong id="aprovado">APROVADO(a)</strong>!!</p>`;
    } else if (mediaAtual >= 3) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno(a) está em <strong id="recuperacao">RECUPERAÇÃO</strong>!</p>`
    } else {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno(a) está <strong id="reprovado">REPROVADO(a)</strong>!</p>`;
    }
}

