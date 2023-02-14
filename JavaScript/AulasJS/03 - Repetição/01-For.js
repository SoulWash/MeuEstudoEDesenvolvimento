// Estrutura de Repetição: For

//Incrementação: Vai contar de 0 a 9 
/*
for (let i = 0; i < 10; i++) {
    console.log(i)
}
*/

//Decrementar: vai contar de 100 a 0
/*
for(let i = 100; i >= 0; i--) {
    console.log(i)
}
*/


// break - para a execução do loop
// continue - pula a execução do momento

for (let i = 100; i >= 0; i--) {
    if (i === 90 || i === 85 || i === 84) {
        continue
    }

    if (i === 50) {
       console.log('Como vai?')
    }

    if (i === 25) {
        console.log('cuidado com o muroooo!!')
    }

    if (i === 12) {
        console.log('...')
        break
    }

    console.log(i)
}