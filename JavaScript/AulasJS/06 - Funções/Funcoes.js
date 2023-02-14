//Função:
//Serve para agrupamento de código,reutilizar o código e da significado ao bloco de código.

//FUNCTION STATEMENT: function nome(){}

// function somar(num1,num2){
//     let soma = num1 + num2
//     console.log(soma)
// }
// for (let i = 0; i<=10; i++) {
//     somar(10,20)
// }


//Function com Return: 
//São funções que retornam valores para sua chamada

function person(){
    return person = {
        nome:"Washington",
        idade: 27
    }
}
//Retorna o valor que é um objeto,string,número,booleano...
console.log(person())

//Parâmetro
//pode utilizar valores padrões para o parâmentro

const valorPadrão =0
function nota(n1=valorPadrão,n2=valorPadrão){
    let res = n1 + n2
    return res
}
let somaN = nota(12,89)
console.log(somaN)