// Calcule o alcance de um projétil, dada a velocidade inicial V=0 e o ângulo = 0 entre o cano do canhão e o solo;
class Bala{
    constructor(Vo,teta){
        this.Vo = Vo
        this.teta = teta*Math.PI/180
        this.g = 9.8
    }

    formula(){
        let S = Math.sqrt(this.Vo) * Math.sin(2*this.teta) /this.g
        return S
    }
}
let alcanceDaBala = new Bala(180,50)
console.log(`${alcanceDaBala.formula()}`)