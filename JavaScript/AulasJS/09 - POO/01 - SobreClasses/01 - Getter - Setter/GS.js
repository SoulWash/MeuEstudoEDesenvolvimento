// Getter e Setter
// São métodos que servem para obter ou colocar valor em um atributo;

// Quando usar:
//Quando você desejar proteger o acesso a um atributo;
//Quando precisar colocar uma lógica adicional para acessar ou definir um valor;
//Retonar um valor calculado.

// class MinhaClasse {
//     constructor(atributo){
//         this.atributo = atributo
//     }

//     get obterAtributo(){
//         return this.atributo;
//     }

//     set definirAtributo(valor){
//         this.atributo = valor;
//     }
// }

// let exemplo = new MinhaClasse('teste');
// console.log(exemplo.obterAtributo);

// exemplo.definirAtributo = "Teste 123"
// console.log(exemplo.obterAtributo);


// Adicionando uma lógica antes do atributo

class MyClass {
    constructor(attribute){
        this.attribute = attribute;
    }

    get getAttribute(){
        return this.attribute.toUpperCase();
    }

    set toDefineAttribute(value){
        if(!value){
            throw new Error('O valor não pode ser vazio');
        }

        this.attribute = value
    }
}

let example = new MyClass('Test')
console.log(example.getAttribute)

example.toDefineAttribute = "Test one two three"
console.log(example.getAttribute)