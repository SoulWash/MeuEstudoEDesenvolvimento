const getFlagValue = require('./export')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

//node console --name "Washington Luiz" --greeting "Bem vindo a Wakanda!"



