

let person = {
    name: 'Wash',
    surName: '',
    age: 27
}

person.surName = new String('Luiz')

console.log(`${person.surName}`)


delete person.age  // Vai deletar a propriedade escolhida 
console.log(person)

