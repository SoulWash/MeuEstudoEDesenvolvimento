//Eventos:

const input = document.querySelector('input')

//Quando adicionar algo no teclado ou mover as teclas
input.onkeydown = function () {
    console.log('rodei')
}
//onkeyup: Se manter segurado vai contar apenas uma ação
//onkeypress: vai rodar com qualquer tecla apertada

const h1 = document.querySelector('h1')

h1.addEventListener('click', clicou)
function clicou(){
    console.log('Clicou')
}

//O add.EventListener permite adicionar o outro evento com o primeiro 
h1.addEventListener('click', function(){
    console.log('Outro click')
})

// argument 'event' : Vai mostrar o tipo de evento chamado
const div = document.querySelector('div')

div.onclick = function(event){
    console.log(event)
}