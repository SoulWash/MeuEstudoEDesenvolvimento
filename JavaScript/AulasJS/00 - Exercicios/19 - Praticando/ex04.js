//Qual o número maior, entre dois números?!

function Numbers(num1,num2){
    if(num1 > num2){
        console.log(num1 + ' é maior que o ' + num2)
    } else if(num1 < num2){
        console.log(`${num2} é maior que o ${num1}`)
    } else {
        console.log("Os números são iguais!")
    }
}

Numbers(52,52)


//// Trocanco os valores entre si

let trocar = (x,y)=>{
    let aux = x
    x = y
    y = aux
    console.log(x,y)
}
trocar(20,54)

