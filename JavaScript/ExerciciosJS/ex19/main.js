let vaga = [8, 4, 5, 1];

vaga[4]= 7;
vaga.push(6);
vaga.length;
/*
console.log(vaga)
console.log(vaga[1])
console.log(vaga.length)
console.log(vaga.sort())
console.log(vaga.indexOf(5))
*/

/*
for (let pos = 0; pos < vaga.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vaga[pos]}`);
}
*/

for (let pos in vaga) {
    console.log(`A posição ${pos} tem o valor ${vaga[pos]}`)
}

