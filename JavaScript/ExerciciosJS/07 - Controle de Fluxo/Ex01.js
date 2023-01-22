// Capiturar error ou falhas na aplicação

// throw

function sayMyName(name = ''){
    if (name === '') {
        throw new Error('Nome é necessário')
    }
    // console.log('depois do erro')
    console.log(name)
}

// try...catch

try {
    // sayMyName('')
    sayMyName('Washington')
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')