// setInterval irá rodar uma função N vezes
// despois de X milissegundos

const timeOut = 1000
const checking = () => console.log('Checking!')

setInterval(checking, timeOut)