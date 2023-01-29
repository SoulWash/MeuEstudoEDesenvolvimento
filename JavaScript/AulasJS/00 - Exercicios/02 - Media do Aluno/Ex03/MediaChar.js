


function resultado(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >=80 && nota < 90
    let notaC = nota >= 70 && nota < 80
    let notaD = nota >= 60 && nota < 70
    let notaF = nota < 60 && nota >= 0
    let notaFinal;

    if (notaA) {
        notaFinal = 'A'
    } else if (notaB) {
        notaFinal = 'B'
    } else if (notaC) {
        notaFinal = 'C'
    } else if (notaD) {
        notaFinal = 'D'
    } else if (notaF){
        notaFinal = 'F'
    } else {
        notaFinal = 'Nota inválida'
    }
    return notaFinal
}

console.log(resultado(101))
console.log(resultado(-1))
console.log(resultado(10))
console.log(resultado(60))
console.log(resultado(70))
console.log(resultado(80))
console.log(resultado(90))
