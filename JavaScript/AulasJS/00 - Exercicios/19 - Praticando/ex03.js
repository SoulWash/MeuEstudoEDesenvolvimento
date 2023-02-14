// Veja se o número é par ou impar;

class EleEPOuI{
    constructor(numero){
        this.numero = Math.floor(numero)
    }

    parImpar(){
        if(this.numero%2==0){
            return `O número ${parOuImpar.numero} é par!`
        } else if (this.numero%2!==0){
            return `O número ${parOuImpar.numero} é impar!`
        } else {
            return "Tente novamente..."
        }
    }
}

let parOuImpar = new EleEPOuI(523)
console.log(parOuImpar.parImpar())










