class Carro {
    constructor(marca, modelo, cor){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.km = 0;
        this.ligado;
        this.combutivel=0;
    }

    info(){
        console.log("Marca........:", this.marca);
        console.log("Modelo.......:", this.modelo);
        console.log("Cor..........:", this.cor);
        console.log("Combustível..:", this.combutivel);
        console.log("Ligado.......:", (this.ligado ? 'Sim':'Não'));
        console.log("KM...........:", this.km);
        console.log("..........................")
    }
    ligarDesligado(ld){
        if(ld === true){
            console.log("Tuntuntutntuntun...")
        }
        this.ligado = ld
    }
    
    set setComb(v){
        if(v<0 || v>100){
            throw new Error("O Tanque está vazando ou ultrapassou o limite do tanque")
        }
        this.combutivel = v
    }
    get getComb(){
        return this.combutivel
    }
}


let c1 = new Carro("Honda","HRV",'Prata')
let c2 = new Carro("VW","Golf",'red')
let c3 = new Carro("Ford","Mustang",'green')

c1.ligarDesligado(true)
c3.setComb = 100
c2.getComb

c1.info()
c2.info()
c3.info()