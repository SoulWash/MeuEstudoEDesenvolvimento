let weight;
console.log(typeof(weight))

let name = 'Wash'
let age = 27
let stars = 2.5
let isSubscribed = true

console.log(typeof(name) + ' ' + typeof(age) + ' ' + typeof(stars) + ' ' + typeof(isSubscribed))


let student = {
    nome: 'Wash',
    idade: 27,
    peso: 78.2
}
console.log(`${student.nome} de idade ${student.idade} e pesa ${student.peso}kg.`)


let students = [
    student
];
console.log(students[0])

const mayk = {
    nome: 'mayk',
    idade: 33,
    peso: 80.2
}
students[1] = mayk;
console.log(students[1].nome)

