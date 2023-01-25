




// function converter(f, c){
//     celsius = (f - 32) * 5/9
//     fahrenheit = c * 9/5 +32

//     if(c) {
//         console.log(`O valor em celsius é ${celsius}`)
//     }

//     if(f){
//         console.log(`O valor em fahrenheit é ${fahrenheit}`)
//     }
// }

// converter(50,50)

// Passo 1 - Criando a função que vai transformar o Celsius ou Fahrenheit :
function transformDegree(degree) {
// Passo 2 - Vê se no grau que vai ser passado vai ter "F" ou "C":
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
// Passo 3.1 - Criando uma válidação, Fluxo de erro 1.1:
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

//Passo 4 - Criando o fluxo ideal, F -> C:
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


//Passo 5 - Criando fluxo alternativo, C -> F     
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
// Vai retornar o número concatenando com a string
    return formula(updatedDegree) + degreeSign
}
// Passo 3.2 Teste da função, Fluxo de erro 1.2
try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
} catch (error){
    console.log(error)
    // console.log(error.message) // Com o message ele não mostrar os detalhes do erro.
}

