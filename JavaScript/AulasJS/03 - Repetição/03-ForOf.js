// For of

let name = 'Wash'

for (let char of name) {
    console.log(char)
}

/*
A nova variavel 'char' vai armazenar cada letra da variavel 'name'.
Quando rodar irá repitir o ciclo até passar por todas as letras.

O mesmo vai fazer com o array.
*/


let names = ['Kelly', 'João','Carlos']

for (let name of names) {
    console.log(name)
}

/*
Dentro do escopo do for of a nova variavel 
'name' vai ser trocado pelo elemento do array.
*/