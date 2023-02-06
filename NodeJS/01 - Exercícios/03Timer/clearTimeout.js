// clearTimeout cancelar um timeout

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut) // vai guardar

clearTimeout(timer) // imediatamente vai cancelar o que guardou


