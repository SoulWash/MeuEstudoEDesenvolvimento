// Função que eleva o número ao quadrado

// Imperativo: Faça da seguinte forma. Forma Explicativa
let number = 2
 function square(){
    return number * number
 }
number = square()

//  // Declarativa: O que fazer e não como fazer.
const square = n => n * n;


// Imutabilidade: Sempre uma constante
const car = {
    quantity: 2,
    total: 200
}
// Não altere a variável, vc cria uma nova
// vai pegar o que tiver na variável 'car' e alterar o objeto 'quantity'
const newCar = {...car, quantity: 3} 



// Stateless: Não guarda estados

//stateful funtion : vai utilizar os dados de fora da função
let nota = 2
function somar(){
    return nota + nota
}
nota = somar()

//stateless function : Não vai guardar o valor, só vai saber quando for passado na função.
const notas = nt => nt + nt;