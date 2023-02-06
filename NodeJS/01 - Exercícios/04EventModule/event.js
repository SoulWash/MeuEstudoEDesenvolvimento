const {EventEmitter}= require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você,', message)
}) //on vai 'ouvir'

ev.emit('saySomething', 'Washington')  // emit de emitir(executar,rodar)