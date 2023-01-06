let nome = document.querySelector('#aluno')
let pNota = document.querySelector('#notaP1')
let sNota = document.querySelector('#notaP2')
let res = document.querySelector('#res')


let Media = (nP, nS) => {
    return (Number(nP) + Number(nS)) / 2
}



function clicou(){
    res.innerHTML = `Calculando nota do aluno <strong>${nome.value}</strong>...`
    let resultado = Media(pNota.value, sNota.value)

    if (resultado > 6) {
        res.innerHTML += `<p>[APROVADO!]</p>`
    } else if (resultado > 4) {
        res.innerHTML += `<p>[RECUPERAÇÃO!]</p>`
    } else {
        alert('[REPROVADO!!]')
    }


    nome.value = ''
    pNota.value = ''
    sNota.value = ''
}