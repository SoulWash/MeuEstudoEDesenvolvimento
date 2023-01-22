let res = document.querySelector('#res')
let name = document.querySelector('#name')
let linguagem = document.querySelector('#linguagem')


function lgJs(lg){
    if(lg === 'JS' || lg === 'JAVASCRIPT'){
        return true
    } else {
        return false
    }
}

let NaoELgP = (lg) => {
    if(lg === 'HTML' || lg === 'CSS'){
        return true
    } else {
        return false
    }
}

/*
function htmlNope(lg){
    if(lg === 'HTML' || lg === 'Html' || lg === 'html'){
        return true
    } else {
        return false
    }
}

function cssNope(lg){
    if(lg === 'CSS' || lg === 'Css' || lg === 'css'){
        return true
    } else {
        return false
    } 
}
*/

function clicou(){
    res.innerHTML = `<h4>Bem vindo(a) <strong>${name.value}</strong>!</h4>`

    if(lgJs(linguagem.value.toUpperCase()) && !NaoELgP(linguagem.value.toUpperCase())){
        res.innerHTML += `<p>Estou aprendendo essa linguagem.</p>`
    } else if (NaoELgP(linguagem.value.toUpperCase())) {
        res.innerHTML += `<p>${linguagem.value.toUpperCase()} não é uma linguagem de programação!</p>`
    } else {
        res.innerHTML += `<p>Ainda não estudei sobre essa linguagem.</p>`
    }

    name.value =''
    linguagem.value = ''
}