// setTimeout rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('Mostrar') // vai aparecer primeiro o 'Mostrar' e depois de 3sec vai aparecer o 'done!'