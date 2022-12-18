
function clicou(){
    let numero = Number(prompt('Digite um número: '));
    let res = document.querySelector('#res');
    if (numero % 2 === 0) {
        res.innerHTML = `<p>O número ${numero} é <strong>PAR</strong>.</p>`
    } else if (numero % 2 !== 0) {
        res.innerHTML = `<p>O número ${numero} é <strong>ÍMPAR</strong>.</p>`
    } else {
        window.alert('[ERRO] DIGITE NOVAMENTE!')
    }
}


function mValor(){
    let n1 = Number(prompt('Digite um número: '));
    let n2 = Number(prompt('Digite outro número: '));
    let valor = document.querySelector('#valor');

    if (n1 > n2) {
        valor.innerHTML = `<p>Analisando os valore <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`;
    } else if (n1 < n2) {
        valor.innerHTML = `<p>Analisando os valore <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`;
    } else {
        valor.innerHTML = `<p>Analisando os valore <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`;
    }

}