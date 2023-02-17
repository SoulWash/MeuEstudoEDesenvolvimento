//  Somando os números depois dividindo pelo mesmo

class Media{
    constructor(num){
        this.num = num
        this.soma=0
    }

    media(){
        for(let cont=1; cont <=this.num; cont+=2){
            this.soma+=cont
        }
        return media = this.soma/this.num
    }
}

let media = new Media(500)
console.log("Média:", media.media())


//Somando números pares; 
let soma = 0
let num=50
for(let cont=2; cont<=num; cont+=2){
    console.log(cont + "+" + soma + "=")
    soma+=cont 
    console.log(soma)
}


// function pairSum(numbIndex){
//     let result = 0
//     for(let i = 0; i <=numbIndex; i++){
//         if(i %2===0){
//             result +=i
//         }
//     }

//     return result
// }
// console.log(pairSum(200))




