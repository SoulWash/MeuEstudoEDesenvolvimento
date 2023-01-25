// Alterando Estilos:

// Pegando as tags
const element = document.querySelector('body')
const title = document.querySelector('h1')

// Atribuindo estilos para as tags
element.style.backgroundColor = '#000520'
title.style.color = '#964825'


//ClassList:

//Adicionar a classe
element.classList.add('active', 'green')

//Remover a classe
element.classList.remove('active')

//Se a classe existir ele tira, se não ele coloca.
element.classList.toggle('active')
