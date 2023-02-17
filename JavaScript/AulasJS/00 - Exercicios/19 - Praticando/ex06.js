// Parte 1 - Para uma entrada do salário bruto, calcule a contribuição ao INSS e o salário líquido restante

// Parte 2 - Apos calcular o INSS, calcule o desconto IRRF 

class Contribuicao{
    constructor(salarioBruto){
        this.salarioBruto = salarioBruto
        this.INSS;
        this.res;
        this.IR;
        this.Liq;
        this.desc;
    }

    inss(){
        if(this.salarioBruto <= 1659.38){
            this.INSS = (this.salarioBruto*8)/100
       }else if(this.salarioBruto <= 2765.66){
           this.INSS = (this.salarioBruto*9)/100
       }else if(this.salarioBruto <= 5531.31){
        this.INSS = (this.salarioBruto *11)/100
       } else{
        this.INSS = 608.44
       }

       return this.INSS.toFixed(2).replace('.',',')
    }

    restoSalario(){
        this.res = this.salarioBruto-this.INSS 
        return this.res.toFixed(2).replace('.',',')
    }

    IRRF(){
        if(this.res <= 1903.98){
            return 0
        } 
        if (this.res <= 2826.65){
            this.IR = ((this.res * 7.5)/100) - 142.80
        } else if (this.res <= 3751.05){
            this.IR = ((this.res * 15)/100) - 354.80
        } else if (this.res <= 4664.68) {
            this.IR = ((this.res * 22.5)/100) - 636.13
        } else {
            this.IR = ((this.res*27.5)/100)- 869.36
        }
        this.Liq = this.salarioBruto - this.INSS - this.IR 
        return this.Liq.toFixed(2).replace('.',',')
    }

    descontoIRRF(){
        this.desc = this.res - this.Liq
        return this.desc.toFixed(2).replace('.',',')
    }
} 



let cb = new Contribuicao(3000)

console.log(`Seu salário bruto é R$${cb.salarioBruto} e sua contribuição para o INSS vai ser de R$${cb.inss()} sobrando do seu salário R$${cb.restoSalario()}`)
console.log(`Seu salário depois do desconto do Imposto de Renda Retido na fonte(IRRF) R$${cb.IRRF()} e o desconto foi de ${cb.descontoIRRF()}`)