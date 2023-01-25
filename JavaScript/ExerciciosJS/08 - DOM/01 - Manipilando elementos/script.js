
//Manipulando Atributos:

//Pegando a tag e botando em uma variavel
const header = document.querySelector('header')
//Adicionando atributos
header.setAttribute('id','cabeca')
header.setAttribute('class', 'bg cabecalho')

const headerId = document.querySelector('#cabeca')
//Escrevendo novo html
headerId.innerHTML += '<h1>Que isso meu mano?</h1>'

//Localizando o atributo
console.log(headerId.getAttribute('class'))
//Removendo o atributo
headerId.removeAttribute('class')