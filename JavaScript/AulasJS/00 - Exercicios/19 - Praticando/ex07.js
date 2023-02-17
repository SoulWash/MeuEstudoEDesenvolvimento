// Dando notas de provas e trabalhos, dando sua média e mostrando se foi aprovado ou reprovado. 

let notap = (p1,p2,p3,p4)=>{
    p = (p1+p2+p3+p4)/4
    return p.toFixed(1)
}

let notat = (t1,t2,t3,t4)=>{
    t = (t1+t2+t3+t4)/4
    return t.toFixed(1)
}

class Aluno{
    result;
    constructor(MP, MT){
        this.MP = MP
        this.MT = MT
    }

    media(){
        return (this.MP + this.MT)/2
    }

    resultAluno(){
        if(this.media()>=6){
            this.result = "Aprovado"
        } else if(this.media()>=4){
            this.result = "Recuperação"
        } else {
            this.result = "Reprovado"
        }
        return this.result
    }
}


console.log(notap(6,6,5,8),notat(2,10,6,2))
let aluno = new Aluno(p,t)
console.log(aluno.media())
console.log(aluno.resultAluno())