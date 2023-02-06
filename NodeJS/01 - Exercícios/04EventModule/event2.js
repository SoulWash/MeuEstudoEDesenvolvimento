const {EventEmitter}= require('events')

const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você,', message)
}) //once vai ouvir apenas uma vez

ev.emit('saySomething', 'Washington') // vai executar
ev.emit('saySomething', 'Jorge') // Não vai executar