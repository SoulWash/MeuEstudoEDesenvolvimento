
/* Calculando sua idade */

function iniciar() {
    let anoNasc = Number(prompt('Em que ano você nasceu? '));
    let anoAtual = new Date().getFullYear();
    let idade =  anoAtual- anoNasc;
    const res = document.querySelector('#result');
    res.innerHTML = `<p>Você nasceu em <mark>${anoNasc}</mark> e sua idade é <mark>${idade}</mark>.</p>`
}

/* Múltiplas ações */

function clicou() {
    let valor1 = Number(prompt('Primeiro valor: '));
    let valor2 = Number(prompt('Segundo valor: '));
    const calcular = Number(prompt(`Valores informados ${valor1} e ${valor2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`));

    let res = document.querySelector('#res');
    res.innerHTML = `<strong>Calculando...</strong>`
    switch (calcular){
        case 1:
            res.innerHTML = `<p>${valor1} + ${valor2} = <strong>${valor1 + valor2}</strong></p>`;
             break
        case 2:
            res.innerHTML = `<p>${valor1} - ${valor2} = <strong>${valor1 - valor2}</strong></p>`;
            break
        case 3:
            res.innerHTML = `<p>${valor1} x ${valor2} = <strong>${valor1 * valor2}</strong></p>`;
            break
        case 4:
            res.innerHTML = `<p>${valor1} / ${valor2} = <strong>${valor1 / valor2}</strong></p>`;
            break
        default:
            res.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${valor1} e ${valor2}, mas não sei o que fazer com eles.</p>`;
            break
    }
}

/* Gerador de números */

let pensei = document.querySelector('#pensei');
function sortear() {
    let min = 1;
    let max = 100;
    let result = max - min;
    let sorteando = Math.random();
    let num = min + Math.trunc(result * sorteando);

    pensei.innerHTML = `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`;
}

function limpar() {
    pensei.innerHTML = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>';
}

/* Tente adivinhar meu número */

let adivinhar = document.querySelector('#adivinhar');
let pc = 0;
let jogador = 0;

function sorteado() {
    let minN = 1;
    let maxN = 100;
    let resultN = maxN - minN;
    let sorte = Math.random();
    pc = minN + Math.trunc(resultN * sorte);
}

function comecar(){
    jogador = Number(prompt('Qual é o seu palpite? '));
    if (jogador < pc) {
        adivinhar.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`;
    } else if (jogador > pc) {
        adivinhar.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`;
    } else if (jogador == pc) {
        adivinhar.innerHTML += `<p><strong>PARABÉNS</strong>! Você acertou! Eu tinha sorteado o valor <mark>${pc}</mark>!</p>`;
        document.querySelector('button#btn').style.visibility = 'hidden';
    } else {
        adivinhar.innerHTML += `<p><strong>[ERRO]</strong> Digite novamente!</p>`;
    }
}
