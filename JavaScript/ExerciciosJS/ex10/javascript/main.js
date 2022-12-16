
function resultado() {
    let name = prompt('Qual o nome do aluno: ');
    let primeiraNota = Number(prompt(`Qual a primeira nota do aluno ${name}: `));
    let segundaNota = Number(prompt(`Qual a segunda nota do aluno ${name}: `));
    let mediaAtual = (primeiraNota + segundaNota) / 2;
    let res = document.querySelector('section#info');
    if (mediaAtual >= 7) {
        res.innerHTML += `<p id="aprovado"><strong>Aprovado(a)</strong>!!</p>`;
    } else if (mediaAtual >= 4) {
        res.innerHTML += `<p id="recuperacao"><strong>Recuperação</strong>!</p>`
    } else {
        res.innerHTML += `<p id="reprovado"><strong>Reprovado(a)</strong>!</p>`;
    }

    res.innerHTML += `<p>Aluno(a): ${name} 1° Nota: ${primeiraNota} / 2° Nota: ${segundaNota} / média final ${mediaAtual}</p>`;
}

