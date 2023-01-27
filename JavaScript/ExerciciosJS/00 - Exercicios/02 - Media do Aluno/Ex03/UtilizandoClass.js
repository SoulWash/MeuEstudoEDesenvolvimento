class Nota {
    result;

    constructor(nota1, nota2){
        this.nota1 = nota1
        this.nota2 = nota2
    }

    media(){
        return this.nota1 + this.nota2 / 2
    }

    resultAluno(){
        if (this.media() >= 7){
            this.result = "aprovado"
        } else if (this.media() >=4 && this.media() <=6){
            this.result = "recuperação"
        } else {
            this.result = "reprovado"
        }
        return this.result
    }
}

let notas = new Nota(2,2)

console.log("Sua média é " + notas.media() + " e vc foi " + notas.resultAluno() + "!")