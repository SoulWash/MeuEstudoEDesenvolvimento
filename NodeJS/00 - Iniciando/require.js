// A função Require vai servir para chamar módulos nativos do nodejs 
// Path é um módulo que já existe dentro do nodejs

// Módulos nativos
// const path = require("path")

// console.log(path.basename(__filename))
// console.log(path.basename("/Users/starters/docs.js"))


// Meus módulos

const myModule = require('./exports')

console.log(myModule)