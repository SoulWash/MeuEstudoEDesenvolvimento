// Definir
class Parafuso { // SuperClasse - Abstrata
     constructor(){
        if (this.constructor === Parafuso) // Quando só possui uma condição não é necessário as '{}'
            throw new Error("Classe abstrata não pode ser instânciada")
     }
     get tipo(){
        throw new Error("Método 'get tipo()' precisa ser implementado" )
    }
}

class Fenda extends Parafuso { //Vai Herdar de Parafuso
    constructor() {super()} //Herança atraves do 'super()'

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() {super()}

    get tipo(){
        return 'philips'
    }
}

class Allen extends Parafuso {} // se não for adicionado os métodos, não vai funcionar


let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()
console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)