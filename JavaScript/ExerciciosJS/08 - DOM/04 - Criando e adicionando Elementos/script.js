// Criando e adicionando elementos

// createElement
const nav = document.createElement('nav')
nav.innerHTML = `<ul><a href="#"><li>HOME</li></a>
<a href="#"><li>DETAILS</li></a>
</ul>`


// append: Depois do elemento 'header'
const header = document.querySelector('header')
header.append(nav)

// prepend: Antes do elemento 'header'
// header.prepend(nav)


// insertBefore: Vai adicionar entre os elementos informados
const body = document.querySelector('body')
// vai passar o primeiro elemento, depois o insertBefore o elemento criado e o ultimo elemento
body.insertBefore(nav, header)

