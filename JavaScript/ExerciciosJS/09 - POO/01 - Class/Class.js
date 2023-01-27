// POO CLASS

// class Carro{
//     //cor= "vermelho"
//     constructor(c) {
//         //this.cor = 'red' // O 'this' vai dá referencia a class Carro.
//         this.cor = c
//         console.log("Hi, I'm a new car: " + this.cor)
//     }
// }

// let c1 = new Carro('blue')
// let c2 = new Carro('red')
// let c3 = new Carro('green')

// Herança : Pai e filho

//Class Pai
class Veiculo {
    rodas = 4

    mover(direcao){}
    virar(direcao){}
}

// Class Filho
class Moto extends Veiculo {  // a classe Moto 'HERDA' de Veivulo
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}