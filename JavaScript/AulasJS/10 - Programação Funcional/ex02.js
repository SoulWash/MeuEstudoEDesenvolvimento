// Funções Independentes
// Pelo menos 1 argumento, deverá retornar algo, não guarda estado e dados imutáveis
// Não utiliza loops(FOR, WHILE), mas caso usa recursão(a função chama ela mesma)

const random = (number, Math) =>
Math.floor(Math.random() * number);

//recursive(a função vai retornar ela mesma)
const factorial = x => {
    if (x === 0){
        return 1;
    }

    return x * factorial(x - 1)
}
console.log(factorial(4))

//Função Pura
// Não depende de dados externo a não ser o argumento passado;
// Não sofre nenhuma interferência do mundo externo a ela;
// Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente;
// Não terá nenhum efeito colateral no código:Não irá modificar nenhum dado e não irá guardar nenhum estado.

//função impura: Ex.1 - Depende de dado externo que não foi passado como parâmetro:
function calcularCircumferencia(radius){
    return Math.PI * (radius + radius)
}
// Ex.2 - Alterando dado externo
let person = {
    name: 'Washington luiz',
    age: 'jovem'
}
function chageName(name) {
    person.name = name
}

// Função pura: Ex.1 - Não vai depender de dados externos pois todos estão sendo passados como argumentos

//function anonymous
const calcCircumferencia = function(pi, radius) {
    return pi * (radius + radius)
}
// arrow function
const calcCirc = (pi,radius) => pi * (radius + radius)

// Ex.2 - 
const changePersonName = (person, age) => ({...person, name})




