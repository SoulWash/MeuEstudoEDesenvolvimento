class Person {
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    talk(){
        console.log(`${this.name} está falando`)
    }
    walk(){
        console.log(`${this.name} está andando`)
    }
}

class PhysicsPerson extends Person {
    constructor(name, phone, email, cpf){
        super(name, phone, email);
        this.cpf = cpf;
    }
}

class LegalPerson extends Person {
    constructor(name, phone, email, cnpj){
        super(name, phone, email);
        this.cnpj = cnpj
    }
    paySalary(){
        console.log(`${this.name} vai pagar os salários`)
    }
}

let physicsPerson = new PhysicsPerson("Washington", "(81)99999-9999", "gatinhopernambucano@email.com","321.123.124.-45")
physicsPerson.walk()

let legalPerson = new LegalPerson("Jorge","(81)98988-8878","adv.jorge.pe@email.com.br", "20.005.004/000123")
console.log('O Sr.' + legalPerson.name,'do cnpj', legalPerson.cnpj)
legalPerson.talk()
legalPerson.paySalary()
