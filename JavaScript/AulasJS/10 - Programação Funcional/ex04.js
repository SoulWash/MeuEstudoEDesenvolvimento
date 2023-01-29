//Composição de funções
//Um encadeamento de função;
//Uma função que retorna um dado e vai pra outra função, que retorna um dado
//e vai pra outra função,que retorna...;

// Array com vários nomes
const people = ['Wanessa','Daniel','Washington','Jorge']

//Vai buscar o nome das pessoas que as letras começem com 'W' e retornar cada uma com todas as letras maiúsculas;
const upperCasePeopleThatStartsWithW = people.filter(person => person.startsWith('W')).map(wperson => wperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithW)
