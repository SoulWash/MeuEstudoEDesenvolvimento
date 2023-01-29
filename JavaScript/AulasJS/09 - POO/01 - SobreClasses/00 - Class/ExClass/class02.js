class Pedido {
    constructor(data, item, valor){
        this.data = data;
        this.item = item;
        this.valor = valor;
    }

    teste(){
        console.log('teste')
    }
}

let pedido = new Pedido(new Date, ['item 1','item 2'], 100);

console.log(pedido)

console.log(`O valor do pedido é: ${pedido.valor}`)
pedido.teste()