
// If...else assignment
/*
let temp = 37.5
let highTemp = temp >= 37.5
let mediumTemp = temp < 37.5 && temp >= 37

if (highTemp) {
    console.log('Esta com febre alta')
} else if (mediumTemp) {
    console.log('Febre')
} else {
    console.log('Saudável')
}
*/

// switch
/*
let carro = 'Ford'

switch (carro) {
    case 'Ford':
        console.log('Sou muito Fordão')
        break
    case 'Celta':
        console.log('O celta preto, acho que vai chover.') 
        break
    case 'Honda':
        console.log('Estou só hondando.')   
        break
    default:
        console.log('Auto-bots vamos rodar!')
        break
}
*/

function calculate(num1, operator, num2) {
    let result = 0

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.log('Não implementado')
            break                
    }
    return result
}
console.log(calculate(5, '+', 8))

