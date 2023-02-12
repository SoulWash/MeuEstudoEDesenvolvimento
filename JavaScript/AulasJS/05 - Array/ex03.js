// Matrix um array dentro de outro array

// const char = [["Felina",12,"Gatuna"],["Lion",15,"Guerreiro"],["pato", 543,"Mago"]]

// console.log(`A ${char[0][2]} roubou a espada do ${char[1][0]}. E o ${char[2][2]} se teleportou para floresta.`)



//STACK

//Passo 1: Modelando

class Stack {
    constructor(){
        this.data = []
        this.top = -1
    }
    push(value){
        this.top++ // se eu tava devendo 1 e tenho 1, vou ficar com 0.
        this.data[this.top] = value // o array data com a posição do indice 0 recebe o valor 
        return this.data
    }
    pop(){
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top] // vai guardar o elemento que está no topo
        delete this.data[this.top] // vai deletar o elemento
        this.top-- // Decrementar 
        return poppedTop // mostrar como ficou o this.data[this.top] após o decremento
    }

    peek(){
        return this.top >= 0 ? this.data[this.top]:undefined
    }
}


//Passo 2: Utilizando
const stack = new Stack()

//Adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))


// Só vai mostrar o último que foi colocado
console.log(stack.peek())


stack.pop() // Remove o 'structures'
console.log(stack.pop()) //remove o 'data' e mostra ele

//Monstrando novamento o último elemento
console.log(stack.peek())

