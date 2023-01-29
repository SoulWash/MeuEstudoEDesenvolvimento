//First-class function:
//Podem estar em qualquer lugar, inclusive, como parâmetro de outras funçôes
// A função poderá ser entendida como uma variável

const sayMyName = () => console.log("Wash")
const runFunction = fn => fn() //vai receber uma função como argumento

runFunction(sayMyName)
runFunction(() => console.log("discover"))
console.log(runFunction(Math.random))

//Higher-order Function:
// Funções que recebem funções como argumentos
// Funções que poderão retornar outras funções


//Ex.: Com .map():

const numbers= [2,4,8,16] // Array com os número;
// constante 'square' que vai receber um número * número;
const square = n=>n*n 
// uma função atrelada ao array, que recebe 'square' como argumento;
const squareNumber = numbers.map(square) 
// Vai retornar cada número do array ao quadrado
console.log(squareNumber)


//Ex.: Retorno de função (currying ou aplicação parcial de função):

//Criando uma função(pause) que vai receber uma outra função(fn);
//e possue o retorno de outra função(setTimeout);
const pause = wait => fn => setTimeout(fn, wait)

//Executando a função(pause) com argumento(wait), que vai executar a outra função(fn);
// e retornar o console.log.
pause(600)(() => console.log('waiting 600ms'))

//reenscrevendo novas funções e novos argumentos
const wait200 = pause(200)
const wait1000 = pause(1000)
//E retornando uma as funçôes 
wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))

