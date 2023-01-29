// Banco

class Utils {
    static configLinguagem = "pt-br";
    static configTime = {
        hour: '2-digit',
        minute:'2-digit'
    };

    static getFormatDate (){
        let date = new Date();
        return date.toLocaleDateString(this.configLinguagem, this.configTime)
    }
}


class Conta {
    constructor(name, numero, saldo){
        this.name = name;
        this.numero = numero;
        this.saldo = saldo;
        this.extrato = [];
    }

    get exibirExtrato(){
        console.log('--------Extrato da Conta---------')
        this.extrato.forEach(item => {
            console.log(item)
        })
        console.log('---------Fim do Extrato----------')
    }

    registrarNoExtrato(item){
        this.extrato.push(item)
    }
}

class ContaPoupanca extends Conta {
    #taxaDeSaque = 0.10;

    saque(valor){
        //console.log(valor)

        let taxaDeSaqueDoValor = valor * this.#taxaDeSaque;
        //console.log(taxaDeSaqueDoValor)

        let valorDeSaqueComATaxa = valor + taxaDeSaqueDoValor;
        //console.log(valorDeSaqueComATaxa)

        if(valorDeSaqueComATaxa > this.saldo){
            throw new Error('Saldo insuficiente');
        }

        this.saldo = this.saldo - valorDeSaqueComATaxa;
        this.registrarNoExtrato(`${Utils.getFormatDate()} - Saque de: ${valor} - Saldo de ${this.saldo}`)
        console.log(`O saldo atual após o saque é de: ${this.saldo}`);
    }

    deposito(valor){
        this.saldo = this.saldo + valor;
        this.registrarNoExtrato(`${Utils.getFormatDate()} - Depósito de: ${valor} - Saldo de ${this.saldo}`)
    }
}

let novaContaPoupanca = new ContaPoupanca("Washington", '12546', 1000)
novaContaPoupanca.saque(100)
novaContaPoupanca.deposito(500)
novaContaPoupanca.saque(300)

novaContaPoupanca.exibirExtrato