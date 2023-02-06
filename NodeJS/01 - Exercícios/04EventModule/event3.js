const {inherits} = require('util') // inherits vai herdar

const {EventEmitter} = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const person = new Character('Jorge')

person.on('Bora bill', () => console.log(`Uiii!! O ${person.name} gosta de um vinhozinho.`))

person.emit('Bora bill')