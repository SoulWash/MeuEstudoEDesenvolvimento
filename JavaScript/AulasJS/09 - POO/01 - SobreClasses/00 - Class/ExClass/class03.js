

class Job {
    constructor(vH, tE, desc){
        this.valorHora = vH
        this.tempoEstimado = tE
        this.desc = desc
    }

    get custoEstimado(){
        return this.calcularEstimativa()
    }

    desconto(){
        return this.valorHora * this.tempoEstimado * (this.desc/100)
    }

    calcularEstimativa(){
        return  this.valorHora * this.tempoEstimado - this.desconto()
    }
}



let job = new Job(60,48,10)
console.log(job.custoEstimado)
console.log(job.calcularEstimativa())
console.log(job.desconto())


