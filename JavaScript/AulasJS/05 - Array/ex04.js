//Queue

//1-  Modelando

class Queue{
    constructor(){
        this.data = []
    }
// Vai adicionar o elemento no final da fila
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }
// Vai remover o primeiro elemento a entrar na fila
    dequeue(){
        const item = this.data.shift() // remove o primeiro elemento
        console.log(`${item} saiu da fila`)
    }
}


// 2- Utilizando
const fila = new Queue()

fila.enqueue("Jose")
fila.enqueue("Maria")
fila.enqueue("Jorge")
fila.dequeue()
fila.dequeue()