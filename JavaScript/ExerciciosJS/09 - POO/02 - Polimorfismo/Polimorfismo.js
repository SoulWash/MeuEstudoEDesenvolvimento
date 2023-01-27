// Polimorfismo


// Passo 1 - Possui uma classe de Atleta

class Atleta {
    peso;
    categoria;

    constructor(peso){
        this.peso = peso
    }


    definirCategoria(){
        if (this.peso <= 50){
            this.categoria = 'infantil'
        } else if (this.peso <= 65){
            this.categoria = 'juvenil'
        } else {
            this.categoria = 'adulto'
        }
        return this.categoria
    }
}

// Passo 2 - A classe Lutador vai herdar da classe Atleta
class Lutador extends Atleta {
    constructor(peso){
        super(peso) // Pegou os atributos da classe Atleta(pai)
    }

// // Reenscreveu a condição do método pai para o novo objeto
    definirCategoria(){
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60){
            this.categoria = 'leve'
        } else if (this.peso <= 75){
            this.categoria = 'meio-leve'
        } else {
            this.categoria = 'pesado'
        }
        return this.categoria
    }
}

let atleta = new Atleta(50)
console.log("A categoria do atleta é "+atleta.definirCategoria())

let lutador = new Lutador(70)
console.log("A categoria do lutador é "+lutador.definirCategoria())