
let family = {
    receitas: [900.10, 120.20, 50],
    despesas: [300.50, 540, 20.70, 80.90]
}

function soma(array) {
    let total = 0
    
    for (let valor of array) {
        total += valor
    }
    return total
}

function calcularOsGastos(){
    const totalReceitas = soma(family.receitas)
    const totalDespesas = soma(family.despesas)

    const total = totalReceitas - totalDespesas
    const tutoCerto = total >= 0
    let balanceText = "negativo"

    if (tutoCerto) {
        balanceText = "positivo"
    }

    console.log(`O saldo da familia está ${balanceText}: R$${total.toFixed(2).replace('.',',')}`)
}

calcularOsGastos()