/*
let name = 'luiz'
let age = 50


const pessoa = {
    nome: name,
    idade: age
};

const {idade} = pessoa

console.log(pessoa.nome + ' ' + idade)
*/
/*

function agenda({nome}) {
    console.log(nome)
}

const pessoa = {
    nome: "wash",
    idade: 27
}

agenda(pessoa)
*/

function liquidificador([fl, ...rest]) {
    console.log(rest)
}
liquidificador(["banana", "pera", "uva"])