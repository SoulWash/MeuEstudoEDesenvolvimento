//Calcular o desconto do imposto em cima do salário recebido:

//Quando for atribuindo a pessoa e salário recebido;
class Tax{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
//Porcentagem do que vai ser retirado do salário;
    #porcentageTax = 0.20;

//Calculando a taxa;
    #calculateTax(){
        return this.salary * this.#porcentageTax;
    }
//Subtraindo a taxa do valor do salário;
    getNetSalary(){
        return this.salary - this.#calculateTax();
    }
}

//O nome da pessoa e o salário;
let person = new Tax("José", 1000);
//Mostrando o salário já descontado.
console.log("O salário líquido de ", person.name, 'é', person.getNetSalary())

//Vai mostrar erro pois é um atributo privado
//person.#porcentageTax;
