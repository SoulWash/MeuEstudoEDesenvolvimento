//Passo 1 - Quais os valores da receita e despesas :
let family = {
    receitas: [2500, 3200, 250.43],
    despesas: [320.14, 128.45, 3400]
}

// Passo 2 - Somar os valores de cada uma :
function soma(array) {
    let total = 0
    
    for (let valor of array) {
        total += valor
    }
    return total
}

// Passo 3 - Subtrair os valores e mostrar se deu positivo ou negativo :

function calcularOsGastos(){
    const totalReceitas = soma(family.receitas)
    const totalDespesas = soma(family.despesas)
    const total = totalReceitas - totalDespesas

// Passo 3.1 - Fluxo já determinado com negativo:
    let balanceText = "negativo"
// Passo 3.2 -  Fluxo alternativo : Se o total for maior que 0 o Valor vai ser positivo. 
    const tudoCerto = total >= 0
    if (tudoCerto) {
        balanceText = "positivo"
    }
// Passo 3.3 - Mostrar os valores:
    console.log(`O saldo da familia está ${balanceText}: R$${total.toFixed(2).replace('.',',')}`)
}
// Passo 4 - Execultar a função:
calcularOsGastos()