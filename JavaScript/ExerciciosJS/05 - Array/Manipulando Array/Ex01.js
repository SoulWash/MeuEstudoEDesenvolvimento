
let frases = 'Eu quero viver!'

let myArray = frases.split(' ') // Irá transformar cada palavras em um elemento de um array ['Eu', 'quero', 'viver!']
let frasesComUnderscore = myArray.join("_") // Irá juntar e incluir o que foi passado
console.log(myArray)
console.log(frasesComUnderscore.toUpperCase())

let chavez = 'Eu prefiro morrer, do que perder a vida!'
console.log(chavez.includes('perder')) 
/* 
O método includes vai verificar se o que foi passado se encontra na váriavel, se sim passa a ser verdadeiro.
Espaços e tamanho das letras importam!
*/

console.log(Array.from(frases)) // Transforma uma cadeia de caracteres em elementos de um array


// Manipulando Array

console.log([
    'a',
    {name: 'Wash'},
    function() {return 'alo'}
][2]())

const person = [
    'Capitão',
    {name: 'Washington'},
    function() {return ' está andando'}
]

console.log(person[1].name + person[2]())

/////////////////////////////////////////////////////////

let lg = ['html', 'css', 'js']
console.log(lg)

lg.push('ruby') // adiciona no fim
console.log(lg)

lg.unshift('sql') // adiciona no inicio
console.log(lg)

lg.pop('')  // exclui no fim
console.log(lg)

lg.shift('')  // exclui no inicio
console.log(lg)

console.log(lg.slice(1,3))   // slice pegar alguns elementos do array (indice[0,1,2] , elemento(1,2,3))

let lgg = ['html', 'css', 'js']

lgg.splice(1,2) // splice remove itens de qualque posição do array (indice[0,1,2], quantidade depois no indeci escolhido).
console.log(lgg)

let index = lg.indexOf('css') // buscar a posição do array

lg.splice(index,1)
console.log(lg)