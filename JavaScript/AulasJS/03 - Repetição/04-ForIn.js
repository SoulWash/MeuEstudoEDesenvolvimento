// For...in

/* 
O for in vai criar um loop em cima de objeto, pegando suas propriedades.
*/

let person = {
    name: 'Wash',
    age: 27,
    weight: 85.5
}

for (let property in person) {
    console.log(property)
    //console.log(person['age'])
    //console.log(person.name)
    console.log(person[property])
}

