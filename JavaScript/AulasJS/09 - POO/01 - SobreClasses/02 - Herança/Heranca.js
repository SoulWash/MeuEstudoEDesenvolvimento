
// Herança: 
//Possibilita uma classe obter atributos e métodos de outra classe;
// Usar quando tiver objetos com códigos semelhantes;
// Dica: Não usar em projetos com muitos níveis e projetos muito pequenos


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