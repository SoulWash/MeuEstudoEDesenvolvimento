// POO CLASS
//São templates para criação de objetos. 
//Contem atributos e métodos:
//Atributos são as características da classe
//Métodos são as funções da classe



class Carro{
//cor= "vermelho"
    constructor(marca,modelo,cor) {
//this.cor = 'red' // O 'this' vai dá referencia a class Carro.
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ligado;
        this.km = 0
        this.combustivel = 10
    }
// Métodos;
    info(){
        console.log("Marca.........: " + this.marca)
        console.log("Modelo........: " + this.modelo)
        console.log("Cor...........: " + this.cor)
        console.log("Ligado........: " + (this.ligado ? 'Sim': 'Não'))
        console.log("KM............: " + this.km)
        console.log("Combustível...: " + this.combustivel)
        console.log("...........................")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado= false
    }
}

let c1 = new Carro("Honda","HRV",'Prata')
let c2 = new Carro("VW","Golf",'red')
let c3 = new Carro("Ford","Mustang",'green')

c3.ligar(true)
c3.cor = "black"

c1.info()
c2.info()
c3.info()
