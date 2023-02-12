const pilotos = ['Senna','Prost','Schumacher','Hamilton']

// Vai buscar pelo indice
console.log(pilotos[3])

// quantidade de elementos no array
console.log(pilotos.length)
// Array é iterável
for (const piloto of pilotos) {
    console.log(piloto)
}

//Adicionando elemento
pilotos.push('Alonso')
console.log(pilotos)

//o '.find' Vai buscar
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

//Deletar um elemento
pilotos.splice(1,1)
console.log(pilotos)


