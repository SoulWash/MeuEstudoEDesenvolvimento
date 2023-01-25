// Navegando pelos elementos :

// Pegando a tag
const header = document.querySelector('header')

//Elementos Pais:

// parentNode - parentElement
// Mostrando o elemento pai da tag que foi pega
console.log(header.parentNode)
console.log(header.parentElement)


// Elementos Filhos: 
// childNodes: Vai pegar TODOS os elementos filhos contando o espaços vazios

// children: Vai ignorar os espaços vazios
console.log(header.childNodes)
console.log(header.children)

//firstChild: Apenas o PRIMEIRO elemento filho e vai contar o espaço vazio como primeiro
//firstElementChild: Vai ignorar o espaço vazio
console.log(header.firstChild)
console.log(header.firstElementChild)

//lastChild: Apenas o ULTIMO elemento filho e vai contar o espaço vazio como primeiro
//lastElementChild: Vai ignorar o espaço vazio

// Elementos Irmãos:

//nextSibling: O próximo elemento irmão, contando o espaço vazio
//nextElementSibling: Vai ignorar o espaço vazio
console.log(header.nextSibling)
console.log(header.nextElementSibling)

//previousSibling: O anterior elemento irmão, contando o espaço vazio
//previousElementSibling: Vai ignorar o espaço vazio
console.log(header.previousSibling)
console.log(header.previousElementSibling)