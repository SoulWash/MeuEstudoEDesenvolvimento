// Quantas notas de 50,10,1 são necessárias para pagar uma conta cujo valor é fornecido;

// const valor = 577
// let n50 = valor / 50
// let r50 = valor % 50
// let n10 = r50 / 10
// let n1 = r50 % 10
//console.log(`Notas de Cinquenta ${Math.floor(n50)}, notas de dez ${Math.floor(n10)} e notas de um ${n1}`)


// Usando Class:

class Conta {
    constructor(valor){
        this.valor = valor
    }

    nota50(){
        return this.valor / 50
        
    }

    nota10(){
        let r50 = this.valor%50
        return r50/10
        
    }

    nota1(){
        let r50 = this.valor%50
        return r50%10
    }
}

let conta = new Conta(577)

console.log(`Notas de Cinquenta ${Math.floor(conta.nota50(0))}, notas de dez ${Math.floor(conta.nota10())} e notas de um ${conta.nota1()}`)



