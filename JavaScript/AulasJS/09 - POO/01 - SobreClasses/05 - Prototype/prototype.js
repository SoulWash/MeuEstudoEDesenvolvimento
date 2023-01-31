//Prototype:
// Pode criar ou subscrever métodos e propriedades;
// Object.prototype: Vai servir qualquer objeto no javascript dentro e fora de class

class Carro {
    constructor(tpCarro, tpComb){
        this.tipo = tpCarro //1=Passeio, 2=transporte, 3=Combate
        this.tipoComb = tpComb; // 1=gassolina, 2=diesel, 3=etanol
        this.qtdeComb = 100;
        this.ligado = false;
    }

    info(){
        if(this.tipo == 1){
            console.log("Tipo de Carro: Passeio")
        } else if(this.tipo == 2){
            console.log("Tipo  de Carro: Transporte")
        } else {
            console.log("Tipo de Carro: Combate")
        }
        console.log("Qtde Combustivel........:", this.qtdeComb);
        if(this.tipoComb == 1){
            console.log("Tipo Combustível: Gasolina")
        } else if(this.tipoComb == 2){
            console.log("Tipo Combustível: Diesel")
        } else {
            console.log("Tipo Combustível: Etanol")
        }
        console.log("Ligado..................:", (this.ligado ? 'Sim':'Não'));
    }
    set ligarDesligado(ld){
        if(ld === true){
            console.log("Tuntuntutntuntun...")
        };
        this.ligado = ld;
    }
    get getLigado(){
        return this.ligado;
    }
    
    set setComb(v){
        if(v<0 || v>100){
            throw new Error("O Tanque está vazando ou ultrapassou o limite do tanque")
        }
        this.combutivel = v
    }
    get getComb(){
        return this.qtdeComb
    }
}

class CarroCombate extends Carro{
    constructor(tpComb,potTiro){
        super(3,tpComb)
        this.municao = 1000;
        this.potTiro = potTiro;
        this.blindagem = 100;
    }
    info(){
        super.info()
        console.log("Qtd Tiros: " + this.municao)
        console.log("Potência do Tiro: ", this.potTiro)
        console.log("Blindagem: ", this.blindagem)
        console.log("..........................")
    }
}

class CarroTransport extends Carro {
    constructor(_,tpComb, malas){
        super(2, tpComb)
        this.passageiros = 10;
        this.malas = malas;
    }
    info(){
        super.info()
        console.log("Qtd Passageiros:", this.passageiros)
        if(this.malas == undefined){
            return console.log('Não possui bagagens.')
        }
        console.log("Qtd de Bagagens:", this.malas)

    }
}

Carro.prototype.potencia = 0
Carro.prototype.velocidade = 0
Carro.prototype.velMax = 0

// Vai subscrever o método info original;
// Carro.prototype.info = function(){
//     console.log("Potencia...:", this.potencia)
//     console.log("Velociade..:", this.velocidade)
//     console.log("Vel. Máxima:", this.velMax)
//     console.log("..........................")
// }

// Adicionando um novo método;
Carro.prototype.info2 = function(){
    this.info()
    console.log("Potencia...:", this.potencia)
    console.log("Velociade..:", this.velocidade)
    console.log("Vel. Máxima:", this.velMax)
    console.log("..........................")
}

let c1 = new Carro(1,2)
let c2 = new CarroCombate(1,87)
let c3 = new CarroTransport(2,3)

//c1.info()
c2.info2()
//c2.info()
//c3.info()