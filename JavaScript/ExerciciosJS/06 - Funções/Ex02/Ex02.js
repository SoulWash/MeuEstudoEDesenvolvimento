/*
function semana(dia){
    console.log('Aprendendo função')
    dia()
    console.log('O bicho é brabo')
}

semana(
    () => {
        console.log('Estou em um callback')
    }
)
*/

/*
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
}

    const wash = new Person('Washington')
    const jose = new Person('Jose')
    console.log(wash.walk() + ' e ' + jose.walk())
*/




function Zoologico(name){
    this.name = name
    this.eat = function(){
        return this.name + ' está comendo.'
    }
}

let animal = 'Zebra'
animal = 'tatu'

const animals = new Zoologico(animal)
console.log(animals.eat())

